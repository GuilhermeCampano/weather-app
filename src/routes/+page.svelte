<script lang="ts">
  let latitude = 40.7128;
  let longitude = 74.0060;
  let forecastPromise: Promise<any>;

  $: {
    forecastPromise = fetchForecast();
  }

  async function fetchForecast() {
    console.log('fetching forecast');
    const res = await fetch(`/forecast?latitude=${latitude.toFixed(4)}&longitude=${longitude.toFixed(4)}`);
    const data = await res.json();
    return data;
  }
</script>

<h1>Home page</h1>

<input type="number" bind:value={latitude} />
<input type="number" bind:value={longitude} />
<button on:click={() => { forecastPromise = fetchForecast(); }}>Fetch Forecast</button>

{#await forecastPromise then response}
  <h4>Current Weather on {response.latitude} | {response.longitude}</h4>
  <pre>
    {@html JSON.stringify(response.current, null, 2)}
</pre>
{:catch error}
  <p>Error: {error.message}</p>
{/await}