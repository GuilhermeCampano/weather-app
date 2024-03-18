<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import ForecastNextDays from '../components/ForecastNextDays.svelte';
	import ForecastHourly from '../components/ForecastHourly.svelte';
	import LocationSearchAutocomplete from '../components/LocationSearchAutocomplete/LocationSearchAutocomplete.svelte';
	import { onMount } from 'svelte';
	import ApiService from '$lib/utils/api-service';
	import { pageTitleLastSearch, selectPlaceResult } from '$lib/stores/search-location.store';
	import { LocalStorage } from '$lib/utils/localstorage';
	import { fetchForecast } from '$lib/stores/forecast.store';
	import { DEFAULT_SEARCH } from '$lib/constants';
	import { isMobile } from '$lib/stores/screen-detection.store';

	export let data;

	onMount(() => {
		saveToken(data.props.token);
		preFillSearch();
	});

	function saveToken(token: string) {
		ApiService.token = token;
	}

	function preFillSearch() {
		let lastSearch = LocalStorage.lastSearch.retrieve();
		if (!lastSearch) {
			LocalStorage.lastSearch.save(DEFAULT_SEARCH);
			lastSearch = LocalStorage.lastSearch.retrieve();
		}
		if (lastSearch) {
			selectPlaceResult(lastSearch.placeDetails, lastSearch.autocompleteItem);
			fetchForecast(
				lastSearch.placeDetails.latitude.toString(),
				lastSearch.placeDetails.longitude.toString()
			);
		}
	}
</script>

<svelte:head>
  <title>{$pageTitleLastSearch}</title>
</svelte:head>

<LocationSearchAutocomplete />
<PreciseLocationButton />

{#if $isMobile}
	<CurrentWeather />
	<ForecastHourly />
{:else}
	<CurrentWeather>
		<ForecastHourly />
	</CurrentWeather>
{/if}
<ForecastNextDays />
