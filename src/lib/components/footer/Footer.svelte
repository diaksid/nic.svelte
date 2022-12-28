<script lang="ts">
  import { page } from '$app/stores';
  import { Footer, FooterLinkGroup, Label } from 'flowbite-svelte';
  import FooterCopyright from './FooterCopyright.svelte';
  import FooterLink from './FooterLink.svelte';

  export let menu: NavLink[];

  $: activeUrl = $page.url.pathname;
</script>

<Footer class="mt-auto text-sm">
  <FooterCopyright
    href="/"
    by="НИЦ «Строительная экспертиза»&trade;"
    year={2022} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    {#each menu as link}
      <FooterLink
        href={link.href}
        target={link.target}
        active={activeUrl === link.href || activeUrl.indexOf(`${link.href}/`) === 0}
        >{link.label}</FooterLink>
    {/each}
  </FooterLinkGroup>
</Footer>

<!--Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href="https://flowbite.com"
      src="https://flowbite.com/docs/images/logo.svg"
      alt="Flowbite Logo"
      name="Flowbite"
    />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright href="/" by="Flowbite™" />
</Footer-->
