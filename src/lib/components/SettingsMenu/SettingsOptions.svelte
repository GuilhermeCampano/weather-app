<script lang="ts">
	import Icon from "../UI/Icon.svelte";

	let temperatureMetric = 'Celsius';

	function handleTemperatureChange(event: Event) {
    temperatureMetric = (event.target as HTMLInputElement)?.value;
	}
</script>

<div class="settings__options">
	<div class="settings__group">
    <label for="temperature">
      <Icon name="thermostat" color="blue", size="default" label="temperature" /> Temperature Units
    </label>
		<label>
			<input
				type="radio"
				name="temperature"
				value="Celsius"
				bind:group={temperatureMetric}
				on:change={handleTemperatureChange}
			/>
			Celsius
		</label>
		<label>
			<input
				type="radio"
				name="temperature"
				value="Fahrenheit"
				bind:group={temperatureMetric}
				on:change={handleTemperatureChange}
			/>
			Fahrenheit
		</label>
	</div>
</div>

<style>
	.settings__options {
		display: flex;
		flex-direction: column;
	}
	.settings__group {
		display: flex;
    flex-flow: column;
    gap: var(--spacing-sm);
		justify-content: space-between;
		align-items: left;
	}
</style>
