<script>
	import FloatingCircle from '../components/FloatingCircle.svelte';
</script>

<svelte:head>
  <title>Is It Sunny?</title>
</svelte:head>

<main>
	<FloatingCircle size="300px" top="15%" right="10%"></FloatingCircle>
	<FloatingCircle size="100px" top="80%" left="5%"></FloatingCircle>
	<FloatingCircle size="40px" top="90%" left="5%"></FloatingCircle>
	<slot />
</main>
