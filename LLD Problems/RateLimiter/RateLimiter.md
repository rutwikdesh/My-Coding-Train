# Token Bucket Rate Limiter Explanation

This document explains the implementation of the **Token Bucket Rate Limiter** found in `RateLimiter.ts`. This design is a standard Low-Level Design (LLD) pattern used for controlling the rate of traffic sent or received by a network interface or service.

---

## High-Level Overview

The Rate Limiter is designed using the **Token Bucket Algorithm**. 
- A token bucket is a container that holds a maximum number of tokens (`capacity`).
- Tokens are added to the bucket at a constant rate (`refillRate`).
- Each API request requires a token. If a token is available, the request is allowed, and a token is consumed.
- If no tokens are available, the request is rejected.

Rather than running a continuous background thread or timer to refill tokens for every user (which is highly inefficient and does not scale), this implementation uses **lazy refilling**. The token count is mathematically calculated and updated only when a request actually arrives (`allowRequest`).

---

## Detailed Code Walkthrough

### 1. `TokenBucket` Case Class
```typescript
class TokenBucket {
  constructor(
    public tokens: number,
    public lastRefillTime: number,
  ) {}
}
```
- **`tokens`**: The current number of tokens available in the bucket. Note that this can be a floating-point number due to fractional token replenishment over millisecond intervals.
- **`lastRefillTime`**: A timestamp (in milliseconds) representing the last time the bucket's token count was recalculated.

---

### 2. `Clock` Utility Class
```typescript
class Clock {
  now(): number {
    return Date.now();
  }
}
```
- The `Clock` class abstracts the fetching of the current system time.
- **Why do we have this?** It is a classic practice in Dependency Injection (DI). By passing a mock/custom `Clock` into the `RateLimiter` constructor during unit testing, we can simulate the passage of time deterministically without using real-world delays like `setTimeout`.

---

### 3. `RateLimiter` Class Properties & Constructor
```typescript
class RateLimiter {
  private readonly buckets = new Map<string, TokenBucket>();
  private readonly refillRatePerMs: number;
  private readonly capacity: number;
  private readonly clock: Clock;

  constructor(
    capacity: number,
    refillRatePerSec: number,
    clock: Clock = new Clock(),
  ) {
    this.capacity = capacity;
    this.refillRatePerMs = refillRatePerSec / 1000;
    this.clock = clock;
  }
...
```
- **`buckets`**: A hash map matching individual user IDs (`userId`) to their respective `TokenBucket` states. This enables per-user rate limiting.
- **`refillRatePerMs`**: The rate at which tokens are replenished, stored as tokens per millisecond. This is computed by dividing the user-provided tokens/second by `1000`.
- **`capacity`**: The maximum capacity of the bucket. This defines the maximum request burst size a user can trigger after a period of idle time.

---

### 4. `allowRequest` Method
```typescript
  allowRequest(userId: string): boolean {
    const now = this.clock.now();
    let bucket = this.buckets.get(userId);

    if (!bucket) {
      bucket = new TokenBucket(this.capacity, now);
      this.buckets.set(userId, bucket);
    }

    this.refill(bucket, now);

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return true;
    }

    return false;
  }
```
When a request comes in for a `userId`:
1. It retrieves the current timestamp.
2. It fetches the user's bucket from the `buckets` map. If it does not exist, a new bucket is initialized with full `capacity` and the `lastRefillTime` set to `now`.
3. It calls the private helper `refill()` to replenish tokens based on how much time has passed since the last action.
4. If the bucket has at least `1` token, we decrement the tokens by `1` and return `true` (request allowed).
5. If the tokens are less than `1`, we return `false` (request limited).

---

### 5. Lazy `refill` Logic
```typescript
  private refill(bucket: TokenBucket, now: number): void {
    const elapsed = now - bucket.lastRefillTime;
    if (elapsed <= 0) return;

    const tokensToAdd = elapsed * this.refillRatePerMs;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + tokensToAdd);
    bucket.lastRefillTime = now;
  }
```
This is the heart of the Rate Limiter's efficiency:
- **`elapsed`**: Calculated as `now - lastRefillTime`.
- **Token Math**: `tokensToAdd = elapsed_ms * refill_rate_per_ms`.
- **Capping**: The new token count can never exceed the defined bucket `capacity`. This is enforced using `Math.min()`.
- **State Update**: Updates `lastRefillTime` to `now` so future refilling is only done for the subsequent interval.

---

## Complexity Analysis

- **Time Complexity**: **$\mathcal{O}(1)$**. Retrieving, updating, and evaluating a user bucket takes constant time since it uses a hash map lookup.
- **Space Complexity**: **$\mathcal{O}(U)$** where $U$ is the number of unique active users sending requests. In standard production environments, map elements can be cleared after long inactivity to manage memory usage.
