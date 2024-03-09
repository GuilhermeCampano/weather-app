<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let searchInput = '';
	export let isInputFocused = false;
	export let hasResults = false;

	const dispatch = createEventDispatcher();

	function handleFocus() {
		dispatch('focus');
	}

	function handleInputChange() {
		dispatch('inputChange', searchInput);
	}

	function handleClearButtonClick() {
		dispatch('reset');
	}
</script>

<input
	type="text"
	bind:value={searchInput}
	on:input={handleInputChange}
	on:focus={handleFocus}
	class="autocomplete__input"
	class:autocomplete__input--open={isInputFocused && hasResults}
	placeholder="Search for a location"
/>

{#if searchInput.length > 1}
	<button class="autocomplete__clear" on:click={handleClearButtonClick}>
		<i class="material-symbols-outlined">close</i>
	</button>
{/if}

<style>
  
	.autocomplete__input {
		background-color: var(--color-off-white-transparent);
		box-shadow: var(--box-shadow);
		width: 100%;
		padding: 20px;
		border-radius: 20px;
		font-weight: 400;
		font-size: var(--font-lg);
		border: none;
		margin: 0px;
		padding-right: 4rem;
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
		right: 5px;
		top: 30%;
		cursor: pointer;
		font-size: var(--font-lg);
	}
</style>
