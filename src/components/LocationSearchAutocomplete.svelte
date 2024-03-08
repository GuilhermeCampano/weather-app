<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import {fetchForecast, latitude, longitude} from '$lib/stores/forecast.store';

	type AutocompletePrediction = google.maps.places.AutocompletePrediction;

	let searchInput = '';
	let results = writable([] as AutocompletePrediction[]);
	let isInputFocused = false;

	let autocompleteService: google.maps.places.AutocompleteService;
	let placesService: google.maps.places.PlacesService;

	onMount(() => {
		autocompleteService = new google.maps.places.AutocompleteService();
		placesService = new google.maps.places.PlacesService(document.createElement('div'));
	});

	const search = () => {
		if (searchInput.length < 1) {
			results.set([]);
			return;
		}
		autocompleteService.getPlacePredictions({ input: searchInput }, (predictions) => {
			results.set(predictions);
		});
	};

	const handleKeydown = (event: KeyboardEvent, result: AutocompletePrediction) => {
		if (event.key === 'Enter' || event.key === ' ') {
			selectLocation(result);
			event.preventDefault();
		}
	};

	const selectLocation = (location: AutocompletePrediction) => {
		placesService.getDetails({ placeId: location.place_id }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
				latitude.set(place.geometry.location.lat());
				longitude.set(place.geometry.location.lng());
				fetchForecast();
				searchInput = location.description;
      }
    });
		isInputFocused = false;
	};
</script>

<div class="autocomplete">

	<input
		type="text"
		bind:value={searchInput}
		on:input={search}
		on:focus={() => (isInputFocused = true)}
		class="autocomplete__input"
		placeholder="Search for a location"
	/>
	
	{#if isInputFocused}
		<div class="autocomplete__results">
			{#each $results as result, index}
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
    background-color: var(--color-white);
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    margin-top: 0px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    z-index: 10;
    top: 43px;
  }

  .autocomplete__result {
    padding: 10px;
    cursor: pointer;
  }

  .autocomplete__result:hover {
    background: var(--color-light-gray);
  }

  .autocomplete__input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: none;
		margin: 0px;
  }
</style>