<script lang="ts">
	import { latitude, longitude, resetSearchInput } from "$lib/stores/search-location.store";
	import { debounce } from "$lib/utils/debounce";
  
  function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude.set(position.coords.latitude);
        longitude.set(position.coords.longitude);
        resetSearchInput();
      });
    } catch (error) {
      console.error(error);
    }
  }
</script>

<button on:click={debounce(getLocation)} class="precise-location" tabindex="0">
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
    margin-top: var(--spacing-md);
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