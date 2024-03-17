import type { AutocompleteItem, PlaceGeolocationDetails, UserPreferences } from "$lib/models";

const LAST_SEARCH_KEY = 'lastSearch';
const USER_PREFERENCES_KEY = 'userPreferences';

class LocalStorageItem<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  save(value: T) {
    try {
      localStorage.setItem(this.key, JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  retrieve(): T | null {
    try {
      const item = localStorage.getItem(this.key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Failed to get from localStorage', e);
      return null;
    }
  }
}
export class LocalStorage {
  static lastSearch = new LocalStorageItem<{ placeDetails: PlaceGeolocationDetails, autocompleteItem: AutocompleteItem }>(LAST_SEARCH_KEY);
  static userPreferences = new LocalStorageItem<UserPreferences>(USER_PREFERENCES_KEY);
}
