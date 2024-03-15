import type { AutocompleteItem } from "$lib";
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

export async function fetchAutoCompleteResults(input: string) {
  const results = await ApiService.getAutocomplete(input);
  autoCompleteResults.set(results || []);
}
