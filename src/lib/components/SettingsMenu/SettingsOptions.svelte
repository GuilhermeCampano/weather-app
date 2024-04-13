<script lang="ts">
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import Icon from '../UI/Icon.svelte';
	import type { UserPreferencesTheme } from '$lib/models';
	import { units, font, theme } from '$lib/stores/user-settings.store';

	function handleTemperatureChange(event: Event) {
		const newUnit = (event.target as HTMLInputElement)?.value;
		units.set(newUnit);
	}

	function handleFontChange(event: Event) {
		const newFont = (event.target as HTMLInputElement)?.value;
		font.set(newFont);
	}

	function handleThemeChange(event: Event) {
		const newTheme = <UserPreferencesTheme>(event.target as HTMLInputElement)?.value;
		theme.set(newTheme);
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
				bind:group={$units}
				on:change={handleTemperatureChange}
			/>
			Celsius
		</label>
		<label>
			<input
				type="radio"
				name="temperature"
				value="imperial"
				bind:group={$units}
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
		<label class="options__font--default">
			<input
				type="radio"
				name="font"
				value="system-ui"
				bind:group={$font}
				on:change={handleFontChange}
			/> Default
		</label>
		<label class="options__font--open-sans">
			<input
				type="radio"
				name="font"
				value="Open Sans"
				bind:group={$font}
				on:change={handleFontChange}
			/> Open Sans
		</label>
		<label class="options__font--dyslexic">
			<input
				type="radio"
				name="font"
				value="Open Dyslexic"
				bind:group={$font}
				on:change={handleFontChange}
			/> Open Dyslexic
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
				bind:group={$theme}
				on:change={handleThemeChange}
			/>
			Light
		</label>
		<label>
			<input
				type="radio"
				name="theme"
				value="dark"
				bind:group={$theme}
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

	.options__font--dyslexic {
		font-family: 'Open Dyslexic';
		word-spacing: -4px;
    line-height:var(--font-md);
	}

	.options__font--default {
		font-family: 'system-ui';
	}

	.options__font--open-sans {
		font-family: 'Open Sans';
	}
</style>
