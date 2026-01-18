# Browser History — Design Problem

Design and implement a production-quality interface to navigate browser history (like modern web browsers).

Users should be able to:

- Visit new URLs
- Move backward in history
- Move forward in history

Treat this as more than a DSA exercise — focus on clean design, scalability, and extensibility.

## Functional Requirements

The component must provide these operations:

- `visit(url: string)`: Navigate to `url`. Clears all forward history.

- `back(steps: number): string`: Move back up to `steps` pages (stops at the first page if needed). Returns the current URL.

- `forward(steps: number): string`: Move forward up to `steps` pages (stops at the most recent page if needed). Returns the current URL.

### Behavior summary

- Visiting a new URL appends it to history and invalidates any forward entries.
- `back` and `forward` move a cursor in the history and return the URL at the new cursor position.

## Non-Functional Requirements

- **Time complexity:** Each operation should run in O(1) or amortized O(1).
- **Memory efficiency:** Keep storage proportional to the number of stored history entries.
- **Thread safety:** Design with future multi-tab or concurrent usage in mind.
- **Extensibility:** Make it easy to add features such as tabs, incognito mode, persistence, and history limits.
- **Testability:** Provide a clean API suitable for unit testing.

## API (suggested TypeScript signatures)

```ts
interface BrowserHistory {
  visit(url: string): void;
  back(steps: number): string;
  forward(steps: number): string;
}
```

## Example Usage

```ts
const browser = new MyBrowserHistory("leetcode.com");
browser.visit("google.com");
browser.visit("facebook.com");
browser.back(1); // returns 'google.com'
browser.back(1); // returns 'leetcode.com'
browser.forward(1); // returns 'google.com'
```

## Implementation Notes / Considerations

- A doubly-linked list or two-stack approach provides O(1) operations.
- To support persistence or limits, add a storage layer or a capped buffer.
- For concurrency, consider immutability or explicit synchronization at the component boundary.

---

If you want, I can:

- Implement a TypeScript `MyBrowserHistory` class with tests.
- Add persistence or a history-size limit feature.

Which would you like next?
