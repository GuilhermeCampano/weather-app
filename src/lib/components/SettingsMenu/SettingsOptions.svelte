<script lang="ts">
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import Icon from '../UI/Icon.svelte';
	import { LocalStorage } from '$lib/utils/localstorage';
	import type { UserPreferencesTheme, UserPreferencesUnit } from '$lib/models';

	const userPreferences = LocalStorage.userPreferences.retrieve();

	let units = userPreferences?.units ?? 'metric';
	let font = userPreferences?.font ?? 'Open Sans';
	let theme = userPreferences?.theme ?? 'light';

	function updatedPreferences() {
		LocalStorage.userPreferences.save({ ...userPreferences, units, font, theme });
	}

	function handleTemperatureChange(event: Event) {
		units = <UserPreferencesUnit>(event.target as HTMLInputElement)?.value;
		updatedPreferences();
	}

	function handleFontChange(event: Event) {
		font = (event.target as HTMLInputElement)?.value;
		updatedPreferences();
	}

	function handleThemeChange(event: Event) {
		theme = <UserPreferencesTheme>(event.target as HTMLInputElement)?.value;
		updatedPreferences();
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
	<div class="options__group" in:fly={getAnimation(1)}>
		<label for="temperature">
			<Icon name="thermostat" color="blue" , size="default" label="temperature" /> Temperature Units
		</label>
		<label>
			<input
				type="radio"
				name="temperature"
				value="metric"
				bind:group={units}
				on:change={handleTemperatureChange}
			/>
			Celsius
		</label>
		<label>
			<input
				type="radio"
				name="temperature"
				value="imperial"
				bind:group={units}
				on:change={handleTemperatureChange}
			/>
			Fahrenheit
		</label>
	</div>
	<!--Fonts-->
	<div class="options__group" in:fly={getAnimation(2)}>
		<label for="font">
			<Icon name="font" color="blue" , size="default" label="font" /> Font Style
		</label>
		<label>
			<input
				type="radio"
				name="font"
				value="Open Sans"
				bind:group={font}
				on:change={handleFontChange}
			/>
			Open Sans
		</label>
		<label>
			<input
				type="radio"
				name="font"
				value="Open Dyslexic"
				bind:group={font}
				on:change={handleFontChange}
			/>
			Open Dyslexic
		</label>
	</div>
	<!--Theme-->
	<div class="options__group" in:fly={getAnimation(3)}>
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
