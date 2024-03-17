const DEFAULT_MAX_ENTRIES = 100;
const DEFAULT_MAX_CACHE_TIME = 1000 * 60 * 60 * 24 * 7; // 1 week

export class InMemoryCache<T> {
  private cache: Map<string, T> = new Map();
  private maxEntries: number;
  private maxCacheTime: number;

  private creationTime: number;

  constructor(maxEntries: number = DEFAULT_MAX_ENTRIES, maxCacheTime: number = DEFAULT_MAX_CACHE_TIME) {
    this.maxEntries = maxEntries;
    this.maxCacheTime = maxCacheTime;
    this.creationTime = Date.now();
  }

  addToCache(key: string, value: T) {
    if (this.cache.size >= this.maxEntries) {
      this.purgeOldEntry();
    }
    this.cache.set(key, value);
  }

  getFromCache(key: string): T | undefined {
    if (this.isCacheStale()) {
      this.clearCache();
      return undefined;
    }
    return this.cache.get(key);
  }

  clearCache() {
    this.cache.clear();
  }

  private purgeOldEntry() {
    const oldestEntry = this.cache.keys().next().value;
    this.cache.delete(oldestEntry);
    console.log(`Purged oldest entry: ${oldestEntry}`);
  }

  private isCacheStale() {
    return Date.now() - this.creationTime > this.maxCacheTime;
  }
}