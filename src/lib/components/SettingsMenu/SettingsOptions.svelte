<script lang="ts">
	import Icon from '../UI/Icon.svelte';

	let temperatureMetric = 'Celsius';
	let fontStyle = 'Open Sans';
	let theme = 'light';

	function handleTemperatureChange(event: Event) {
		temperatureMetric = (event.target as HTMLInputElement)?.value;
	}

	function handleFontChange(event: Event) {
		fontStyle = (event.target as HTMLInputElement)?.value;
	}

	function handleThemeChange(event: Event) {
		theme = (event.target as HTMLInputElement)?.value;
	}
</script>

<div class="settings__options">
	<!--Temperature-->
	<div class="settings__group">
		<label for="temperature">
			<Icon name="thermostat" color="blue" , size="default" label="temperature" /> Temperature Units
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
	<!--Fonts-->
	<div class="settings__group">
		<label for="font">
			<Icon name="font" color="blue" , size="default" label="font" /> Font Style
		</label>
		<label>
			<input
				type="radio"
				name="font"
				value="Open Sans"
				bind:group={fontStyle}
				on:change={handleFontChange}
			/>
			Open Sans
		</label>
		<label>
			<input
				type="radio"
				name="font"
				value="Open Dyslexic"
				bind:group={fontStyle}
				on:change={handleFontChange}
			/>
			Open Dyslexic
		</label>
	</div>
	<!--Theme-->
	<div class="settings__group">
		<label for="theme">
			<Icon name="theme" color="blue" , size="default" label="theme" /> Theme
		</label>
		<label>
			<input
				type="radio"
				name="theme"
				value="light"
				bind:group={theme}
				on:change={handleThemeChange}
			/>
			Light
		</label>
		<label>
			<input
				type="radio"
				name="theme"
				value="dark"
				bind:group={theme}
				on:change={handleThemeChange}
			/>
			Dark
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
		margin-bottom: var(--spacing-md);
	}
</style>
