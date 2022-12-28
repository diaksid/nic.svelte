<script lang="ts">
  import { onMount } from 'svelte';
  import icon from './default.svg';

  let className = '';
  export { className as class };

  export let duration = 1000;

  let node: HTMLElement;

  const close = () => {
    setTimeout(() => {
      node.style.transitionDuration = `${duration}ms`;
      node.style.pointerEvents = node.style.touchAction = 'none';
      node.style.opacity = '0';
    }, 50);
    setTimeout(() => node.remove(), duration + 50);
  };

  onMount(close);
</script>

<div
  bind:this={node}
  class="fixed z-50 top-0 left-0 flex flex-col justify-center items-center
         w-screen h-screen
         bg-no-repeat bg-center
         transition-opacity ease-out
         {className}"
  style:background-size="10vmax"
  style:background-image={`url(${icon})`}
  hidden />
