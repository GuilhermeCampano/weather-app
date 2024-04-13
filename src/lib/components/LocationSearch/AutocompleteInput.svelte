<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '../UI/Icon.svelte';
	import type { IconProperties } from '$lib';
	export let searchInput = '';
	export let isOpen = false;
	export let hasResults = false;

	const dispatch = createEventDispatcher();

	function handleFocus() {
		dispatch('focus');
	}

	function handleBlur(event: KeyboardEvent | FocusEvent) {
		(event.target as HTMLInputElement)?.blur();
		dispatch('blur');
	}

	function handleInputChange() {
		dispatch('inputChange', searchInput);
	}

	function handleClearButtonClick() {
		dispatch('reset');
	}

	function handleKeyPressed(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleClearButtonClick();
		}
		if (event.key === 'Enter') {
			handleBlur(event);
		}
	}
	const iconProperties: IconProperties = {
		name: 'close',
		label: 'Clear search input',
		size: 'default',
		color: 'default'
	};
</script>

<div class="autocomplete">
	<input
		type="text"
		aria-label="Search for a location"
		aria-haspopup="listbox"
		bind:value={searchInput}
		on:input={handleInputChange}
		on:focus={handleFocus}
		on:keydown={handleKeyPressed}
		class="autocomplete__input"
		class:autocomplete__input--open={isOpen && hasResults}
		placeholder="Search for a location"
	/>

	{#if searchInput.length > 1 && isOpen}
		<button class="autocomplete__clear" on:click={handleClearButtonClick}>
			<Icon {...iconProperties} />
		</button>
	{/if}

	<slot/>
</div>

<style>
	.autocomplete {
		position: relative;
	}
	.autocomplete__input {
		background-color: var(--color-background-off-white);
		box-shadow: var(--box-shadow);
		width: 100%;
		padding: var(--spacing-md);
		border-radius: 20px;
		font-weight: 400;
		font-size: var(--font-lg);
		font-family: inherit;
		border: none;
		margin: 0px;
		padding-right: calc(var(--spacing-md) * 2);
		text-overflow: ellipsis;
		transition: border-radius ease 0.8s;
	}

	.autocomplete__input:focus {
		outline: none;
	}

	.autocomplete__input--open {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	.autocomplete__clear {
		border: none;
		box-shadow: none;
		background-color: transparent;
		padding: 0px;
		margin: 0px;
		position: absolute;
		right: 1rem;
		top: 30%;
		cursor: pointer;
		font-size: var(--font-lg);
		min-width: max-content;
	}
</style>
