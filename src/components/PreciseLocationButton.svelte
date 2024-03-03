<script lang="ts">
  import { latitude, longitude, fetchForecast } from '../stores/forecast.store';
  
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

<button on:click={getLocation}>Precise location</button>