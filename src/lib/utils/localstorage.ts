import type { AutocompleteItem, PlaceGeolocationDetails } from "$lib/models";

const AUTOCOMPLETE_HASH_TABLE_KEY = 'autocompleteHashTable';
const LAST_SEARCH_KEY = 'lastSearch';
const MAX_ENTRIES = 100;

export class LocalStorage {

  static saveLastSearch(placeDetails: PlaceGeolocationDetails, autocompleteItem: AutocompleteItem) {
    localStorage.setItem(LAST_SEARCH_KEY, JSON.stringify({ placeDetails, autocompleteItem}));
  }

  static getLastSearch(): { placeDetails: PlaceGeolocationDetails, autocompleteItem: AutocompleteItem } | null {
    const lastSearch = localStorage.getItem(LAST_SEARCH_KEY);
    return lastSearch ? JSON.parse(lastSearch) : null;
  }


  static setAutoCompleteHashTable(inputSearch: string, autocompleteItem: AutocompleteItem[]): void {
    const autocompleteHashTable = JSON.parse(localStorage.getItem(AUTOCOMPLETE_HASH_TABLE_KEY) || '{}');
    const entries = Object.entries(autocompleteHashTable);

    if (entries.length >= MAX_ENTRIES) {
      const oldestEntry = entries[0];
      delete autocompleteHashTable[oldestEntry[0]];
    }
  
    autocompleteHashTable[inputSearch.toLocaleLowerCase()] = autocompleteItem;
    localStorage.setItem(AUTOCOMPLETE_HASH_TABLE_KEY, JSON.stringify(autocompleteHashTable));
  }
  
  static getAutoCompleteHashTable(inputSearch: string): AutocompleteItem[] | null {
    const autocompleteHashTable = JSON.parse(localStorage.getItem(AUTOCOMPLETE_HASH_TABLE_KEY) || '{}');
  
    const autocompleteItem = autocompleteHashTable[inputSearch.toLocaleLowerCase()];
  
    return autocompleteItem || null;
  }
}
