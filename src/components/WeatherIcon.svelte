<script lang="ts">
  import { WeatherCode, WeatherEmojis } from "$lib/models";

  export let code: WeatherCode;

  export let size: "small" | "medium" | "large" = "small";
</script>

<span class={`weather-icon weather-icon--${size}`}>
  {WeatherEmojis[code]}
</span>

<style>
  .weather-icon--small {
    font-size: 1rem;
  }

  .weather-icon--medium {
    font-size: 2rem;
  }

  .weather-icon--large {
    font-size: 3rem;
  }
</style>