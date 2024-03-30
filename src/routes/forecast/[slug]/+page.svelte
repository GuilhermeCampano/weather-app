<script lang="ts">
	import Forecast from "$lib/components/Forecast/Forecast.svelte";
  import LocationSearch from "$lib/components/LocationSearch/LocationSearch.svelte";
	import { lastSelectedSearchInput, latitude, longitude, pageTitleLastSearch, searchInput } from "$lib/stores/search-location.store.js";
	import ApiService from "$lib/utils/api-service.js";
	import { onMount } from "svelte";
 
  export let data;

  onMount(async () => {
    searchInput.set(data.props.slug);
    await fetchInitialData(data.props.slug);
  });

  async function fetchInitialData(address: string){
    const placeDetails = await ApiService.getGeolocationFromAddress(address);
    if(!placeDetails){
      window.location.href = '/';
      return;
    }
    searchInput.set(placeDetails.formattedAddress);
    latitude.set(placeDetails.latitude);
    longitude.set(placeDetails.longitude);
  }

</script>

<svelte:head>
  <title>{$pageTitleLastSearch}</title>
</svelte:head>
<LocationSearch />
<Forecast/>
