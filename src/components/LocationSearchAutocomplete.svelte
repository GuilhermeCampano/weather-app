<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { fetchForecast } from '$lib/stores/forecast.store';
	import { slide } from 'svelte/transition';
	import { latitude, longitude, searchInput } from '$lib/stores/location.store';

	type AutocompletePrediction = google.maps.places.AutocompletePrediction;
	type PlacesServiceStatus = google.maps.places.PlacesServiceStatus;
	type PlaceResult = google.maps.places.PlaceResult;

	let results = writable([] as AutocompletePrediction[]);
	let isInputFocused = false;
	let autocompleteService: google.maps.places.AutocompleteService;
	let placesService: google.maps.places.PlacesService;

	function initializeGoogleServices() {
		autocompleteService = new google.maps.places.AutocompleteService();
		placesService = new google.maps.places.PlacesService(document.createElement('div'));
	}

	function search() {
		if ($searchInput.length < 1) {
			results.set([]);
			return;
		}
		autocompleteService.getPlacePredictions({ input: $searchInput }, (predictions) => {
			results.set(predictions || []);
		});
	}

	function handleKeydown(event: KeyboardEvent, result: AutocompletePrediction) {
		if (event.key === 'Enter' || event.key === ' ') {
			selectLocation(result);
			event.preventDefault();
		}
	}

	function selectLocation(location: AutocompletePrediction) {
		placesService.getDetails({ placeId: location.place_id }, handlePlaceDetails);
		isInputFocused = false;
	}

	function handlePlaceDetails(place: PlaceResult, status: PlacesServiceStatus) {
		if (status === google.maps.places.PlacesServiceStatus.OK && place.geometry) {
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
		initializeGoogleServices();
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
		class:autocomplete__input--open={isInputFocused && $results.length > 0}
		placeholder="Search for a location"
	/>

	{#if isInputFocused}
		<div class="autocomplete__results" transition:slide={{ delay: 100, duration: 300 }}>
			{#each $results as result, index (result.place_id)}
				<div
					tabindex={index}
					class="autocomplete__result"
					on:click={() => selectLocation(result)}
					on:keydown={(event) => handleKeydown(event, result)}
					role="button"
				>
					{result.description}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.autocomplete {
		position: relative;
		width: 100%;
		max-width: 394px;
		display: inline-block;
	}

	.autocomplete__results {
		background-color: var(--color-off-white);
		border-radius: 20px;
		box-shadow: var(--box-shadow);
		margin-top: 0px;
		max-height: 200px;
		overflow-y: auto;
		position: absolute;
		z-index: 10;
		top: 55px;
		border-top-right-radius: 0px;
		border-top-left-radius: 0px;
		width: 100%;
	}

	.autocomplete__result {
		padding: 10px;
		cursor: pointer;
	}

	.autocomplete__result:hover {
		background: var(--color-light-gray);
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
		transition: border-radius ease 0.8s;
	}

	.autocomplete__input:focus {
		outline: none;
	}

	.autocomplete__input--open {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
</style>
