interface StoreEntry<T = unknown> {
  value: T;
  expiresAt: number;
}

export class InMemoryStore {
  private data = new Map<string, StoreEntry>();
  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  set<T = unknown>(key: string, value: T, ttlMs: number): void {
    this.delete(key);
    const expiresAt = Date.now() + ttlMs;
    this.data.set(key, { value, expiresAt });
    const timer = setTimeout(() => {
      this.data.delete(key);
      this.timers.delete(key);
    }, ttlMs);
    if (typeof timer.unref === "function") timer.unref();
    this.timers.set(key, timer);
  }

  get<T = unknown>(key: string): T | undefined {
    const entry = this.data.get(key);
    if (!entry) return undefined;
    if (Date.now() >= entry.expiresAt) {
      this.delete(key);
      return undefined;
    }
    return entry.value as T;
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    const timer = this.timers.get(key);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(key);
    }
    return this.data.delete(key);
  }

  clear(): void {
    for (const timer of this.timers.values()) clearTimeout(timer);
    this.timers.clear();
    this.data.clear();
  }

  get size(): number {
    return this.data.size;
  }
}
