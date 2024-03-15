import type { AutocompleteItem, PlaceGeolocationDetails } from "$lib";
import ApiService from "$lib/utils/api-service";
import { derived, writable } from "svelte/store";

export const latitude = writable('0');
export const longitude = writable('0');
export const searchInput = writable("");
export const autoCompleteResults = writable([] as AutocompleteItem[]);
export const hasResults = derived(autoCompleteResults, $autoCompleteResults => $autoCompleteResults.length > 0);

export function resetSearchInput() {
  searchInput.set("");
  autoCompleteResults.set([]);
}

export function selectPlaceResult(place: PlaceGeolocationDetails) {
  searchInput.set(place.formattedAddress);
  latitude.set(place.latitude.toString());
  longitude.set(place.longitude.toString());
}

export async function fetchAutoCompleteResults(input: string) {
  const results = await ApiService.getAutocomplete(input);
  autoCompleteResults.set(results || []);
}
