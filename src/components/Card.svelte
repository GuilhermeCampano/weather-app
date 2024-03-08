<script lang="ts">
  export let size: 'small' | 'large' = 'small';
  export let isCompact: boolean = false;

  const cardClasses = `card card--${size} ${isCompact ? 'card--compact' : ''}`
</script>

<div class={cardClasses}>
  <slot></slot>
</div>

<style>
  .card {
    display: flex;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 20px;
    border: 1px solid var(--color-light-grey);
    box-shadow: var(--box-shadow);
    background-color: var(--color-off-white-transparent);
  }

  .card--small {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 100px;
    gap: 0 0.5rem;
    padding: 1rem 0px;
  }

  .card--large {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    position: relative;
    right: auto;
    width: calc(100vw - 1rem);
    min-height: 200px;
    margin: 0 auto;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  @media screen and (min-width: 768px) {
    .card--large {
      width: auto;
      margin-right: auto;
      padding-right: 1rem;
      border-radius: 20px;
      right: 0;
    }
  }

  .card--compact {
    min-height: fit-content;
  }

</style>