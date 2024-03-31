<script lang="ts">
	import type { PlaceGeolocationDetails } from "$lib";
	import Forecast from "$lib/components/Forecast/Forecast.svelte";
  import LocationSearch from "$lib/components/LocationSearch/LocationSearch.svelte";
	import { lastSelectedSearchInput, latitude, longitude, pageTitleLastSearch, searchInput } from "$lib/stores/search-location.store.js";
	import { onMount } from "svelte";
 
  export let data;
  const placeDetails = data.props.placeDetails;
  const forecast = JSON.parse(data.props.forecast);

  onMount(() => {
    if(!placeDetails){
      window.location.href = '/';
      return;
    }
    setSearch(placeDetails);
  });

  async function setSearch(placeDetails: PlaceGeolocationDetails  ){
    searchInput.set(placeDetails.formattedAddress);
    lastSelectedSearchInput.set(placeDetails.formattedAddress);
    latitude.set(placeDetails.latitude);
    longitude.set(placeDetails.longitude);
  }

</script>

<svelte:head>
  <title>{$pageTitleLastSearch}</title>
</svelte:head>
<LocationSearch />
<Forecast initialForecast={forecast}/>
