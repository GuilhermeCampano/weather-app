<script lang="ts">
  import { onMount } from 'svelte';

  export let name: string;
  export let fill: string = 'currentColor';
  export let size: string = '20px';

  let svgContent = '';

  const ICON_PATH = '/icons/';
  const iconUrl = `${ICON_PATH}${name}.svg`;

  onMount(async () => {
    const response = await fetch(iconUrl);
    svgContent = await response.text();
  });
</script>

<span class="{$$restProps.class || ''}">
  {@html svgContent.replace('<svg ', `<svg style="width: ${size}; height: ${size}; fill: ${fill}" `)}
</span>