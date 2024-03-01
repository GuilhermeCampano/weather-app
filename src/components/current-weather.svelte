<script lang="ts">
  import { latitude, longitude, forecast, isLoading } from '../stores/forecast.store';
</script>

<h4>Current Weather on {$latitude} | {$longitude}</h4>
{#if $isLoading}
  <p>Loading...</p>
{/if}

{#if $forecast}
  <pre>
    {@html JSON.stringify($forecast.current, null, 2)}
  </pre>
{/if}

{#if $forecast === null}
  <p>No data available</p>
{/if}