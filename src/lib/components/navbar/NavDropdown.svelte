<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import { page } from '$app/stores';
  import { clickOutside } from 'flowbite-svelte/utils/clickOutside';

  export let liButtonClass = 'flex items-center justify-between w-full';
  //export let name;
  //export let child = [];

  export let dropdownDiv = `
    md:absolute z-10
    w-full md:w-max md:max-w-xs mt-2 md:mt-12
    text-gray-700 dark:text-gray-400
    bg-white dark:bg-gray-700
    rounded border-gray-100 dark:border-gray-700
    outline-none
    divide-y divide-gray-100 dark:divide-gray-600`;

  export let dropdownLinkClassWithChild = `
    block py-2 px-4
    font-medium md:text-sm
    hover:bg-gray-100 dark:hover:bg-gray-600`;

  export let rel: undefined | string = undefined;

  export let link!: NavLink;

  export let offset: undefined | number = undefined;
  export let active: boolean;

  const dispatch = createEventDispatcher();

  let hidden = !active;
  let block = false;

  const handleDropdown = () => {
    hidden = !hidden;
    block = !block;
  };
  const handleClick = () => {
    handleDropdown();
    dispatch('close');
  };

  let liClass = `flex flex-col items-center py-2 pr-4 pl-3 md:p-0
     text-gray-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white
     border-b border-gray-100 md:border-0 dark:border-gray-700
     hover:bg-gray-50 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent
     md:hover:text-blue-700`;

  $: activeUrl = $page.url.pathname;
</script>

<li
  use:clickOutside={() => !hidden && handleDropdown()}
  class={liClass}>
  <button
    on:click={handleDropdown}
    class={classNames(liButtonClass, active ? 'text-blue-700 dark:text-gray-200' : null)}>
    {link.label}
    <svg
      class="ml-1 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </button>

  {#if link.links}
    <!-- Dropdown menu -->
    <div
      class:hidden
      class={classNames(dropdownDiv, $$restProps.class)}
      style:top={offset && `${offset}px`}>
      <slot>
        <ul
          class="py-1"
          aria-labelledby="dropdownLargeButton">
          {#each link.links as item}
            {@const href = link.href + item.href}
            {#if activeUrl === href || activeUrl.indexOf(`${href}/`) === 0}
              <li class="text-blue-700 dark:text-gray-200">
                <span
                  on:blur
                  on:focus
                  on:mouseleave
                  on:mouseover
                  class={dropdownLinkClassWithChild}>
                  {@html item.label}
                </span>
              </li>
            {:else}
              <li>
                <a
                  {href}
                  {rel}
                  on:blur
                  on:change
                  on:click={handleClick}
                  on:focus
                  on:keydown
                  on:keypress
                  on:keyup
                  on:mouseenter
                  on:mouseleave
                  on:mouseover
                  class={dropdownLinkClassWithChild}>
                  {item.label}
                </a>
              </li>
            {/if}
          {/each}
        </ul>
      </slot>
    </div>
  {/if}
</li>
