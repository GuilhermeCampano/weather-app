<script lang="ts">
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
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

	const getAnimation = (order: number = 1) => {
		return {
			y: 50,
			delay: order * 200,
			duration: 400,
			easing: sineInOut
		};
	};
</script>

<div class="options">
	<!--Temperature-->
	<div class="options__group" in:fly="{getAnimation(1)}">
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
	<div class="options__group" in:fly="{getAnimation(2)}">
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
	<div class="options__group" in:fly="{getAnimation(3)}">
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
	.options {
		display: flex;
		flex-direction: column;
	}
	.options__group {
		display: flex;
		flex-flow: column;
		gap: var(--spacing-sm);
		justify-content: space-between;
		margin-bottom: var(--spacing-md);
	}
</style>
