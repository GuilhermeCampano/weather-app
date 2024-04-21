<script lang="ts">
	import { onMount } from 'svelte';
	import { selectPlaceResult } from '$lib/stores/search-location.store';
	import { LocalStorage } from '$lib/utils/localstorage';
	import { DEFAULT_SEARCH } from '$lib/constants';
	import LocationSearch from '$lib/components/LocationSearch/LocationSearch.svelte';
	import Forecast from '$lib/components/Forecast/Forecast.svelte';

	onMount(async () => {
		preFillSearch();
	});

	function preFillSearch() {
		let lastSearch = LocalStorage.lastSearch.retrieve();
		if (!lastSearch) {
			LocalStorage.lastSearch.save(DEFAULT_SEARCH);
			lastSearch = LocalStorage.lastSearch.retrieve();
		}
		if (lastSearch) {
			selectPlaceResult(lastSearch.placeDetails, lastSearch.autocompleteItem.description);
		}
	}
	
</script>

<LocationSearch />
<Forecast />