<script lang="ts">
	import { page } from '$app/stores';
	import Error from '$lib/components/Error.svelte';
</script>

<Error status={$page.status} message={$page.error?.message}/>