<script>
  export let width = "100%";
  export let height = "100%";

  export let withElevation = false;
</script>

<div class="skeleton" class:skeleton--shadow={withElevation} style="width: {width}; height: {height};" ></div>

<style>
  .skeleton--shadow {
    box-shadow: var(--box-shadow);
  }
</style>