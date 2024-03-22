<script lang="ts">
	import type { AutocompleteItem } from '$lib';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export let results: AutocompleteItem[] = [];

	let selectedOptionIndex = -1;
	let optionElements: HTMLElement[] = [];

	const dispatch = createEventDispatcher();

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
	});

	function selectLocation(result?: AutocompleteItem) {
		result ? dispatch('selectLocation', result) : dispatch('selectLocation', results[0]);
	}

	function browseOptions(keyPressed: string) {
		if (keyPressed === 'ArrowUp') {
			selectedOptionIndex = Math.max(selectedOptionIndex - 1, 0);
		} else if (keyPressed === 'ArrowDown') {
			selectedOptionIndex = Math.min(selectedOptionIndex + 1, results.length - 1);
		} else if (keyPressed === 'Home') {
			selectedOptionIndex = 0;
		} else if (keyPressed === 'End') {
			selectedOptionIndex = results.length - 1;
		}
		optionElements[selectedOptionIndex]?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			event.stopPropagation();

			return selectLocation(results[selectedOptionIndex]);
		}
		if(event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
			event.preventDefault();
			event.stopPropagation();
			return browseOptions(event.key);
		}
	}
</script>

<ul
	class="autocomplete__results"
	role="listbox"
	in:slide={{ duration: 400, axis: 'y' }}
	out:slide={{ duration: 300 }}
>
	{#each results as result, index (result.placeId)}
		<li
			bind:this={optionElements[index]}
			tabindex={index}
			class="autocomplete__item"
			on:click={() => selectLocation(result)}
			on:keydown={() => {}}
			aria-selected={selectedOptionIndex === index ? 'true' : 'false'}
			role="option"
		>
			{result.description}
		</li>
	{/each}
</ul>

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
		padding-inline: var(--spacing-sm);
	}

	.autocomplete__item {
		list-style: none;
		padding: var(--spacing-sm);
		cursor: pointer;
	}

	.autocomplete__item:hover {
		background: var(--color-background-light);
	}
</style>
