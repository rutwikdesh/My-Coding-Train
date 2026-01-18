interface IBrowserHistory {
  visit(url: string): void;
  forward(steps: number): string;
  back(steps: number): string;
}

interface IHistoryNode {
  url: string;
  prev: HistoryNode | null;
  next: HistoryNode | null;
}

class HistoryNode implements IHistoryNode {
  readonly url: string;
  prev: HistoryNode | null;
  next: HistoryNode | null;

  constructor(url: string) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

export default class BrowserHistory implements IBrowserHistory {
  private current: HistoryNode | null;

  constructor(homepage?: string) {
    this.current = homepage ? new HistoryNode(homepage) : null;
  }

  visit(url: string): void {
    if (this.current !== null) {
      const newNode = new HistoryNode(url);

      // cutting off forward history
      this.current.next = null;

      newNode.prev = this.current;
      this.current.next = newNode;
      this.current = newNode;
    } else {
      this.current = new HistoryNode(url);
    }
  }

  back(steps: number): string {
    for (let i = 0; i < steps; i++) {
      if (this.current && this.current.prev) {
        this.current = this.current?.prev;
      } else {
        return "";
      }
    }
    return this.current?.url || "";
  }

  forward(steps: number): string {
    for (let i = 0; i < steps; i++) {
      if (this.current && this.current.next) {
        this.current = this.current?.next;
      } else {
        return "";
      }
    }
    return this.current?.url || "";
  }
}
