<script lang="ts">
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Chevron, DarkMode } from 'flowbite-svelte';
  import { Home as IconHome } from 'svelte-heros-v2';
  import Dropdown from './NavDropdown.svelte';

  export let menu: NavLink[];

  /*const darkmodebtn = `p-2.5 rounded-lg text-lg text-gray-500 dark:text-gray-400
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700`;*/

  //const color: any = 'primary';

  $: activeUrl = $page.url.pathname;
</script>

<Navbar
  let:hidden
  let:toggle
  class="fixed z-40 top-0 left-0 shadow-md dark:bg-primary-700"
  color="form">
  {@const close = () => hidden || toggle()}
  <NavBrand href="/">
    <img
      src="/images/logo.small.webp"
      class="border-transparent ml-1.5 mr-3 h-6 sm:h-9"
      alt="логотип АО Научно-Исследовательский Центр «Строительная экспертиза»" />
    <!--span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Строй Эксп
    </span-->
  </NavBrand>

  <DarkMode class="ml-auto md:ml-0 md:order-last md:translate-x-1/4" />

  <NavHamburger
    on:click={toggle}
    class="ml-4" />

  <NavUl
    class="md:mx-auto dark:bg-gray-700"
    {hidden}>
    {#each menu as link}
      {@const active = activeUrl === link.href || activeUrl.indexOf(`${link.href}/`) === 0}
      <!--NavLi
        class={`cursor-pointer${active && ' !text-white' || ''}`}>
        {#if link.links}
          <Chevron  aligned>{@html link.label}</Chevron>
          {:else}
        {@html link.label}
        {/if}
      </NavLi-->
      {#if link.links}
        <Dropdown
          on:close={close}
          {link}
          {active}
          offset={32} />
      {:else}
        <NavLi
          on:click={close}
          class="cursor-pointer"
          href={link.href}
          {active}>
          {#if link.href === '/'}
            <IconHome
              class="-mt-0.5"
              size="24"
              variation={activeUrl === link.href ? 'solid' : 'outline'} />
          {:else}
            {@html link.label}
          {/if}
        </NavLi>
      {/if}
    {/each}
  </NavUl>
</Navbar>
