<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { sineInOut } from 'svelte/easing';
  import { XMark as IconClose } from 'svelte-heros-v2';
  import {
    Drawer,
    Sidebar,
    SidebarBrand,
    SidebarWrapper
  } from 'flowbite-svelte';
  import SidebarGroup from './SidebarGroup.svelte';
  export let menu: any;

  let hidden = true;
  export const open = () => (hidden = false);
  export const close = () => (hidden = true);

  let transitionParams = {
    x: -384,
    duration: 300,
    easing: sineInOut
  };

  let site = {
    name: '', //'Строй Эксп',
    href: '/',
    img: '/images/logo.small.webp'
  };

  afterNavigate(() => setTimeout(close, transitionParams.duration));
</script>

<button
  on:click={open}
  class="fixed z-20 top-1/2 h-[35vmin] pr-6 hover:pr-8 -translate-y-1/2 rounded-r-lg 
        bg-neutral-400/70 hover:bg-gray-400
        dark:bg-gray-700/70 dark:hover:bg-gray-400/70
        transition-all duration-100">
  <span
    class="max-w absolute right-2.5 top-1/2 w-1 h-1/2 sm:h-1/3 lg:1/4 -translate-y-1/2 rounded-lg animate-pulse
          bg-gray-100 dark:bg-gray-800" />
</button>

<Drawer
  bind:hidden
  width="w-80 md:w-96 overflow-x-hidden"
  transitionType="fly"
  {transitionParams}
  id="driver">
  <Sidebar asideClass="w-auto">
    <SidebarWrapper>
      <SidebarGroup
        class="flex justify-center space-y-0"
        on:click={close}>
        <SidebarBrand
          aClass="py-2"
          imgClass="h-24 lg:h-24"
          {site} />
      </SidebarGroup>
      <SidebarGroup
        links={menu.header}
        border />
      <SidebarGroup
        links={menu.activity}
        root="/activity"
        border />
      <SidebarGroup
        links={menu.footer}
        border />
    </SidebarWrapper>
  </Sidebar>
  <button
    on:click={close}
    class="absolute top-5 right-5 p-2
           hover:bg-gray-200 dark:hover:bg-gray-700
           rounded-full">
    <IconClose />
  </button>
</Drawer>
