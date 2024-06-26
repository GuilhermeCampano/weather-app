<script lang="ts">
	import {
		searchInput,
		autoCompleteResults,
		resetSearchInput,
		hasResults,
		fetchAutoCompleteResults,
		selectPlaceResult,
		lastSelectedSearchInput
	} from '$lib/stores/search-location.store';
	import AutocompleteResults from './AutocompleteResults.svelte';
	import AutocompleteInput from './AutocompleteInput.svelte';
	import { debounce } from '$lib/utils/debounce';
	import ApiService from '$lib/utils/api-service';
	import type { AutocompleteItem } from '$lib';
	import { LocalStorage } from '$lib/utils/localstorage';
	import PreciseLocationButton from './PreciseLocationButton.svelte';
	import { goto } from '$app/navigation';
	import clickOutside from '$lib/utils/click-outside';

	let openAutocomplete = false;

	async function searchLocations() {
		if ($searchInput.length < 1) {
			autoCompleteResults.set([]);
			return;
		}

		fetchAutoCompleteResults($searchInput);
	}

	async function onSelectLocation(autocompleteItem: AutocompleteItem) {
		const placeDetails = await ApiService.getGeolocation(autocompleteItem.placeId);
		if (placeDetails) {
			selectPlaceResult(placeDetails, autocompleteItem.description);
			LocalStorage.lastSearch.save({ placeDetails, autocompleteItem });
			goto(`/forecast/${placeDetails.formattedAddress}`);
		}
		openAutocomplete = false;
	}

	function handleClickOutside() {
		openAutocomplete = false;
		if ($searchInput !== $lastSelectedSearchInput) {
			searchInput.set($lastSelectedSearchInput);
		}
	}

	function onInputFocus() {
		openAutocomplete = true;
		resetSearchInput();
	}
</script>

<div class="search" use:clickOutside={handleClickOutside}>
	<div class="search__autocomplete">
		<AutocompleteInput
			bind:searchInput={$searchInput}
			bind:isOpen={openAutocomplete}
			hasResults={$hasResults}
			on:inputChange={debounce(searchLocations, 250)}
			on:reset={resetSearchInput}
			on:focus={onInputFocus}
			on:blur={() => (openAutocomplete = false)}
		>
			{#if openAutocomplete && $hasResults}
				<AutocompleteResults
					results={$autoCompleteResults}
					on:selectLocation={(location) => onSelectLocation(location.detail)}
				/>
			{/if}
		</AutocompleteInput>
	</div>
	<div class="search__precise-button">
		<PreciseLocationButton />
	</div>
</div>

<style>
	.search {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-flow: wrap;
		column-gap: var(--spacing-md);
		color: var(--color-text);
	}
	.search__autocomplete {
		flex: 1 0 300px;
	}

	.search__precise-button {
		flex: 1 1 100px;
		text-align: right;
	}

	@media (min-width: 768px) {
		.search__precise-button {
			text-align: left;
		}
	}
</style>
