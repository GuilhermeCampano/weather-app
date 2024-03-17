import type { AutocompleteItem, PlaceGeolocationDetails } from "$lib/models";

const LAST_SEARCH_KEY = 'lastSearch';

export class LocalStorage {

  static saveLastSearch(placeDetails: PlaceGeolocationDetails, autocompleteItem: AutocompleteItem) {
    localStorage.setItem(LAST_SEARCH_KEY, JSON.stringify({ placeDetails, autocompleteItem}));
  }

  static getLastSearch(): { placeDetails: PlaceGeolocationDetails, autocompleteItem: AutocompleteItem } | null {
    const lastSearch = localStorage.getItem(LAST_SEARCH_KEY);
    return lastSearch ? JSON.parse(lastSearch) : null;
  }
}
