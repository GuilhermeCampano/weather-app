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
		if (!(event.target as Element).closest('.autocomplete')) {
			if ($searchInput !== $lastSelectedSearchInput) {
				searchInput.set($lastSelectedSearchInput);
			}
			isInputFocused = false;
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

	function handleFocus() {
		isInputFocused = true;
		if ($searchInput.length > 0) {
			resetSearchInput();
		}
	}
</script>

<div class="location-search">
	<div class="location-search__item">
		<AutocompleteInput
			bind:searchInput={$searchInput}
			bind:isInputFocused
			hasResults={$hasResults}
			on:inputChange={debounce(searchLocations)}
			on:reset={resetSearchInput}
			on:focus={handleFocus}
		/>

		{#if isInputFocused}
			<AutocompleteResults
				results={$autoCompleteResults}
				on:selectLocation={(location) => onSelectLocation(location.detail)}
			/>
		{/if}
	</div>
	<div class="location-search__item">
		<PreciseLocationButton />
	</div>
</div>

<style>
	.location-search {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-flow: wrap;
		gap: 1rem;
	}
	
	.location-search__item {
		flex: 1 0 300px;
	}

	@media (max-width: 768px) {
		.location-search {
			text-align: right;
		}
	}
</style>
