<script lang="ts">
  export let size = '200px';
  export let top = '0px';
  export let left = '0px';
</script>

<div class="floating-circle" style="width: {size}; height: {size}; top: {top}; left: {left}"></div>

<style>
  .floating-circle {
    border-radius: 50%;
    background: linear-gradient(#F78A95, #F8B36F);
    animation: float 5s ease-in-out infinite;
    z-index: -1;
    position: absolute;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
</style>