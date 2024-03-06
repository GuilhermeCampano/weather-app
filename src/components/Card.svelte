<script lang="ts">
  export let size: 'small' | 'large' = 'small';
</script>

<div class={`card card--${size}`}>
  <slot></slot>
</div>

<style>
  .card {
    background-color: var(--color-off-white);
    border: 1px solid var(--color-light-grey);
    border-radius: 20px;
    padding: 16px;
    margin: 1rem 0rem;
    box-shadow: 0px 4px 4px 0px var(--color-shadow);
  }

  .card--small{
    width: auto;
    height: 168px;
  }

  .card--large{
    min-height: 200px;
    margin: 0 auto;
    position: relative;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    width: calc(100vw - 1rem);
    right: auto;
  }

  @media screen and (min-width: 768px) {
    .card--large {
      width: auto;
      border-radius: 20px;
      margin-right: auto;
      padding-right: 1rem;
      right: 0;
    }
	}

</style>