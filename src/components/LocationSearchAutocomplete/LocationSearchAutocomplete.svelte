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
		selectPlaceResult
	} from '$lib/stores/location.store';
	import AutocompleteResults from './AutocompleteResults.svelte';
	import AutocompleteInput from './AutocompleteInput.svelte';
	import { debounce } from '$lib/utils/debounce';
	import ApiService from '$lib/utils/api-service';
	import type { AutocompleteItem, PlaceGeolocationDetails } from '$lib';

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
			fetchForecast($latitude, $longitude);
		}
		isInputFocused = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!(event.target as Element).closest('.autocomplete')) {
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
</script>

<div class="autocomplete">
	<AutocompleteInput
		bind:searchInput={$searchInput}
		bind:isInputFocused
		hasResults={$hasResults}
		on:inputChange={debounce(searchLocations)}
		on:reset={resetSearchInput}
		on:focus={() => (isInputFocused = true)}
	/>

	{#if isInputFocused}
		<AutocompleteResults
			results={$autoCompleteResults}
			on:selectLocation={(location) => onSelectLocation(location.detail)}
		/>
	{/if}
</div>

<style>
	.autocomplete {
		position: relative;
		width: 100%;
		max-width: 394px;
		display: inline-block;
	}
</style>
