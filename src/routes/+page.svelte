<script lang="ts">
	import { onMount } from 'svelte';
	import ApiService from '$lib/utils/api-service';
	import { selectPlaceResult } from '$lib/stores/search-location.store';
	import { LocalStorage } from '$lib/utils/localstorage';
	import { DEFAULT_SEARCH } from '$lib/constants';
	import LocationSearch from '$lib/components/LocationSearch/LocationSearch.svelte';
	import Forecast from '$lib/components/Forecast/Forecast.svelte';

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
		}
	}
</script>

<LocationSearch />
<Forecast />