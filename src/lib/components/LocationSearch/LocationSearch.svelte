<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fetchForecast } from '$lib/stores/forecast.store';
	import {
		latitude,
		longitude,
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
			selectPlaceResult(placeDetails, autocompleteItem);
			LocalStorage.lastSearch.save({ placeDetails, autocompleteItem });
			fetchForecast($latitude, $longitude);
		}
		openAutocomplete = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!(event.target as Element).closest('.search__autocomplete')) {
			openAutocomplete = false;
			if ($searchInput !== $lastSelectedSearchInput) {
				searchInput.set($lastSelectedSearchInput);
			}
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('click', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('click', handleClickOutside);
		}
	});

	function onInputFocus() {
		openAutocomplete = true;
		resetSearchInput();
	}
</script>

<div class="search">
	<div class="search__autocomplete">
		<AutocompleteInput
			bind:searchInput={$searchInput}
			bind:isOpen={openAutocomplete}
			hasResults={$hasResults}
			on:inputChange={debounce(searchLocations)}
			on:reset={resetSearchInput}
			on:focus={onInputFocus}
			on:blur={() => (openAutocomplete = false)}
		>
			{#if openAutocomplete}
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
