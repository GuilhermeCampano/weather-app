<script lang="ts">
	import { fetchForecast } from "$lib/stores/forecast.store";
	import { latitude, longitude, resetSearchInput } from "$lib/stores/location.store";
	import { debounce } from "$lib/utils/debounce";
  
  function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude.set(position.coords.latitude.toString());
        longitude.set(position.coords.longitude.toString());
        resetSearchInput();
        fetchForecast($latitude, $longitude);
      });
    } catch (error) {
      console.error(error);
    }
  }
</script>

<button on:click={debounce(getLocation)} class="precise-location">
  <i class="material-symbols-outlined precise-location__icon">my_location</i>
  <span class="precise-location__text">Use precise location</span>
</button>

<style>
  .precise-location {
    border: none;
    background-color: transparent;
    box-shadow: none;
    text-wrap: nowrap;
    align-items: center;
    display: inline-flex;
    vertical-align: middle;
    cursor: pointer;
    font-size: var(--font-md);
    font-weight: var(--font-weight-regular);
  }

  .precise-location:hover .precise-location__text {
    text-decoration: underline;
  }

  .precise-location__icon {
    font-size: var(--font-lg);
    margin-right: 0.25rem;
    padding-bottom: 2px;
  }

</style>