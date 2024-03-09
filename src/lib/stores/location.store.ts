import { derived, writable } from "svelte/store";

export const latitude = writable(0);
export const longitude = writable(0);
export const searchInput = writable("");
export const autoCompleteResults = writable([] as google.maps.places.AutocompletePrediction[]);
export const hasResults = derived(autoCompleteResults, $autoCompleteResults => $autoCompleteResults.length > 0);

export function resetSearchInput() {
  searchInput.set("");
  autoCompleteResults.set([]);
}