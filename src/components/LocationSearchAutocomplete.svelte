<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fetchForecast } from '$lib/stores/forecast.store';
	import { latitude, longitude, searchInput, autoCompleteResults, resetSearchInput } from '$lib/stores/location.store';
	import {AutocompleteGeolocationService} from '$lib/services/autocomplete-geolocation.service';
	import AutocompleteResults from './AutocompleteResults.svelte';
	
	let isInputFocused = false;
	let autoCompleteService: AutocompleteGeolocationService;

	async function search()  {
		if ($searchInput.length < 1) {
			autoCompleteResults.set([]);
			return;
		}

		const results = await autoCompleteService.search($searchInput);
		autoCompleteResults.set(results);
	}

	async function onSelectLocation(location: google.maps.places.AutocompletePrediction) {
		const placeResult: google.maps.places.PlaceResult = await autoCompleteService.selectLocation(location.place_id);
		processLocation(placeResult);
		isInputFocused = false;
	}

	function processLocation(place: google.maps.places.PlaceResult | undefined) {
		if (place?.geometry) {
			latitude.set(place.geometry.location.lat());
			longitude.set(place.geometry.location.lng());
			fetchForecast();
			searchInput.set(place.formatted_address || '');
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
	<input
		type="text"
		bind:value={$searchInput}
		on:input={search}
		on:focus={() => (isInputFocused = true)}
		class="autocomplete__input"
		class:autocomplete__input--open={isInputFocused && $autoCompleteResults.length > 0}
		placeholder="Search for a location"
	/>

	{#if $searchInput.length > 1}
		<button class="autocomplete__clear" on:click={resetSearchInput}>
			<i class="material-symbols-outlined">close</i>
		</button>
	{/if}

	{#if isInputFocused}
		<AutocompleteResults results={$autoCompleteResults} on:selectLocation={(location) => onSelectLocation(location.detail)}/>
	{/if}
</div>

<style>
	.autocomplete {
		position: relative;
		width: 100%;
		max-width: 394px;
		display: inline-block;
	}

	
	.autocomplete__input {
		background-color: var(--color-off-white-transparent);
		box-shadow: var(--box-shadow);
		width: 100%;
		padding: 20px;
		border-radius: 20px;
		font-weight: 400;
		font-size: var(--font-lg);
		border: none;
		margin: 0px;
		padding-right: 4rem;
		text-overflow: ellipsis;
		transition: border-radius ease 0.8s;
	}

	.autocomplete__input:focus {
		outline: none;
	}

	.autocomplete__input--open {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	.autocomplete__clear {
		border: none;
		box-shadow: none;
		background-color: transparent;
		padding: 0px;
		margin: 0px;
		position: absolute;
		right: 5px;
		top: 30%;
		cursor: pointer;
		font-size: var(--font-lg);
	}
</style>
