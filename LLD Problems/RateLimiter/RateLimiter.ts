class TokenBucket {
  constructor(
    public tokens: number,
    public lastRefillTime: number,
  ) {}
}

class Clock {
  now(): number {
    return Date.now();
  }
}

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

  private refill(bucket: TokenBucket, now: number): void {
    const elapsed = now - bucket.lastRefillTime;
    if (elapsed <= 0) return;

    const tokensToAdd = elapsed * this.refillRatePerMs;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + tokensToAdd);
    bucket.lastRefillTime = now;
  }
}
