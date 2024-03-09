<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fetchForecast } from '$lib/stores/forecast.store';
	import { latitude, longitude, searchInput, autoCompleteResults, resetSearchInput, hasResults } from '$lib/stores/location.store';
	import {AutocompleteGeolocationService} from '$lib/services/autocomplete-geolocation.service';
	import AutocompleteResults from './AutocompleteResults.svelte';
	import AutocompleteInput from './AutocompleteInput.svelte';
	
	let isInputFocused = false;
	let autoCompleteService: AutocompleteGeolocationService;

	async function searchLocations()  {
		if ($searchInput.length < 1) {
			autoCompleteResults.set([]);
			return;
		}

		const results = await autoCompleteService.searchLocations($searchInput);
		autoCompleteResults.set(results);
	}

	async function onSelectLocation(location: google.maps.places.AutocompletePrediction) {
		const placeResult: google.maps.places.PlaceResult = await autoCompleteService.selectLocation(location.place_id);
		processLocation(placeResult);
		isInputFocused = false;
	}

	function processLocation(place: google.maps.places.PlaceResult | undefined) {
		if (place?.geometry) {
			searchInput.set(place.formatted_address || '');
			latitude.set(place.geometry.location.lat());
			longitude.set(place.geometry.location.lng());
			fetchForecast();
		}
	}

	function handleClickOutside(event: MouseEvent) {
		if (!(event.target as Element).closest('.autocomplete')) {
			isInputFocused = false;
		}
	}

	onMount(() => {
		autoCompleteService = new AutocompleteGeolocationService();
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
		bind:isInputFocused={isInputFocused}
		bind:hasResults={$hasResults}
		on:inputChange={searchLocations}
		on:reset={resetSearchInput}
		on:focus={() => isInputFocused = true} 
	/>

	{#if isInputFocused}
		<AutocompleteResults 
			results={$autoCompleteResults} 
			on:selectLocation={(location) => onSelectLocation(location.detail)
		}/>
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
