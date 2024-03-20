<script lang="ts">
	import type { AutocompleteItem } from '$lib';
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	export let results: AutocompleteItem[] = [];

	let selectedOptionIndex = -1;
	let optionElements: HTMLElement[] = [];

	const dispatch = createEventDispatcher();

	function selectLocation(result: AutocompleteItem) {
		dispatch('selectLocation', result);
	}

	function browseOptions(direction: 'ArrowUp' | 'ArrowDown') {
		if (direction === 'ArrowUp') {
			selectedOptionIndex = Math.max(0, selectedOptionIndex - 1);
		} else if (direction === 'ArrowDown') {
			selectedOptionIndex = Math.min(results.length - 1, selectedOptionIndex + 1);
		}
		optionElements[selectedOptionIndex].focus();
	}

	function handleKeydown(event: KeyboardEvent, location: AutocompleteItem) {
		event.preventDefault();
		event.stopPropagation();
		if (event.key === 'Enter') {
			return selectLocation(location);
		}
		if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
			return browseOptions(event.key);
		}
	}
</script>

<div
	class="autocomplete__results"
	role="listbox"
	in:slide={{ duration: 400, axis: 'y' }}
	out:slide={{ duration: 300 }}
>
	{#each results as result, index (result.placeId)}
		<div
			bind:this={optionElements[index]}
			tabindex={index}
			class="autocomplete__result"
			on:click={() => selectLocation(result)}
			on:keydown={(event) => handleKeydown(event, result)}
			aria-selected={selectedOptionIndex === index ? 'true' : 'false'}
			role="option"
		>
			{result.description}
		</div>
	{/each}
</div>

<style>
	.autocomplete__results {
		background-color: var(--color-background-off-white);
		border-radius: 20px;
		box-shadow: var(--box-shadow);
		margin-top: 0px;
		max-height: 250px;
		overflow-y: auto;
		position: absolute;
		z-index: 10;
		top: 55px;
		border-top-right-radius: 0px;
		border-top-left-radius: 0px;
		width: 100%;
	}

	.autocomplete__result {
		padding: 10px;
		cursor: pointer;
	}

	.autocomplete__result:hover {
		background: var(--color-background-light);
	}
</style>
