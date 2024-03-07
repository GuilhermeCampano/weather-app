<script lang="ts">
	import { latitude, longitude, fetchForecast } from "$lib/stores/forecast.store";
  
  function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude.set(position.coords.latitude);
        longitude.set(position.coords.longitude);
        fetchForecast();
      });
    } catch (error) {
      console.error(error);
    }
  }
</script>

<button on:click={getLocation} class="precise-location">
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