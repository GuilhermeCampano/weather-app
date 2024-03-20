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

	let isInputFocused = false;

	async function searchLocations() {
		isInputFocused = true;
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
		isInputFocused = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!(event.target as Element).closest('.search__autocomplete')) {
			if ($searchInput !== $lastSelectedSearchInput) {
				searchInput.set($lastSelectedSearchInput);
			}
			isInputFocused = false;
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('click', handleClickOutside);
			window.addEventListener('keydown', selectDefaultLocation);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('click', handleClickOutside);
			window.removeEventListener('keydown', selectDefaultLocation);
		}
	});

	function selectDefaultLocation(event: KeyboardEvent) {
		if (event.key === 'Enter' && isInputFocused && $autoCompleteResults.length > 0) {
			onSelectLocation($autoCompleteResults[0]);
		}
	}
	function handleFocus() {
		isInputFocused = true;
		if ($searchInput.length > 0) {
			resetSearchInput();
		}
	}
</script>

<div class="search">
	<div class="search__autocomplete">
		<AutocompleteInput
			bind:searchInput={$searchInput}
			bind:isInputFocused
			hasResults={$hasResults}
			on:inputChange={debounce(searchLocations)}
			on:reset={resetSearchInput}
			on:focus={handleFocus}
		>
			{#if isInputFocused && $autoCompleteResults.length > 0}
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
		column-gap: 1rem;
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
