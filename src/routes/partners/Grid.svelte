<script lang="ts">
  import { onMount } from 'svelte';
  import placeholder from '$lib/assets/icons/placeholder';

  export let partners: {
    image: any;
    text: string;
  }[];

  onMount(() => document?.lazyloadInstance?.update());
</script>

<div
  class="content
         grid grid-cols-none lg:grid-cols-2 gap-x-8 gap-y-12">
  {#each partners as partner}
    <figure
      class="flex flex-col items-center
                   hover:scale-110 transition-transform duration-500 ease-in-out">
      <img
        class="lazy
               bg-no-repeat bg-center bg-1/5 bg-loading bg-gray-300
               shadow-lg shadow-slate-700 dark:shadow-slate-400
               hover:shadow-md hover:shadow-slate-800"
        src={placeholder}
        data-src={partner.image.src}
        width={partner.image.width}
        height={partner.image.height}
        alt={partner.text.toLowerCase()}
        loading="lazy" />
      {#if partner.text}
        <figcaption
          class="mt-2
                 text-center text-lg text-slate-700 dark:text-slate-400">
          {partner.text}
        </figcaption>
      {/if}
    </figure>
    <link
      rel="image"
      href={partner.image.src} />
  {/each}
</div>
