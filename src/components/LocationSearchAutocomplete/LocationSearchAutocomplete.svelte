<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fetchForecast } from '$lib/stores/forecast.store';
	import { latitude, longitude, searchInput, autoCompleteResults, resetSearchInput, hasResults, fetchAutoCompleteResults } from '$lib/stores/location.store';
	import AutocompleteResults from './AutocompleteResults.svelte';
	import AutocompleteInput from './AutocompleteInput.svelte';
	import { debounce } from '$lib/utils/debounce';
	import ApiService from '$lib/utils/api-service';
	
	let isInputFocused = false;

	async function searchLocations()  {
		if ($searchInput.length < 1) {
			autoCompleteResults.set([]);
			return;
		}

		fetchAutoCompleteResults($searchInput);
	}

	async function onSelectLocation(location: google.maps.places.AutocompletePrediction) {
		const placeResult = await ApiService.getGeolocation(location.place_id);
		processLocation(placeResult);
		isInputFocused = false;
	}

	function processLocation(place: google.maps.places.PlaceResult | undefined) {
		if (place?.geometry) {
			searchInput.set(place.formatted_address || '');
			latitude.set(place.geometry.location.lat.toString());
			longitude.set(place.geometry.location.lng.toString());
			fetchForecast($latitude, $longitude);
		}
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
		bind:isInputFocused={isInputFocused}
		hasResults={$hasResults}
		on:inputChange={debounce(searchLocations)}
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
