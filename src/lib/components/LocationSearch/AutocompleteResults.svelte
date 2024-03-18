<script lang="ts">
	import type { AutocompleteItem } from "$lib";
	import { createEventDispatcher } from "svelte";
	import { slide } from "svelte/transition";

  export let results: AutocompleteItem[] = [];

  const dispatch = createEventDispatcher();

  function selectLocation(result: AutocompleteItem) {
    dispatch('selectLocation', result);
  }
  
	function handleKeydown(event: KeyboardEvent, location: AutocompleteItem) {
		if (event.key === 'Enter') {
			selectLocation(location);
		}
	}  
</script>

<div class="autocomplete__results" transition:slide={{ delay: 100, duration: 300 }}>
  {#each results as result, index (result.placeId)}
    <div
      tabindex={index}
      class="autocomplete__result"
      on:click={() => selectLocation(result)}
      on:keydown={(event) => handleKeydown(event, result)}
      role="button"
    >
      {result.description}
    </div>
  {/each}
</div>

<style>
  .autocomplete__results {
		background-color: var(--color-off-white);
		border-radius: 20px;
		box-shadow: var(--box-shadow);
		margin-top: 0px;
		max-height: 200px;
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
		background: var(--color-light-gray);
	}
</style>