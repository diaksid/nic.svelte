<script lang="ts">
  import LazyLoad from 'vanilla-lazyload';
  import { RouteTransition, ScreenBlock, YandexMetrikaInit } from 'daks-svelte';
  import { Drawer, Footer, Navbar } from '$lib/components';

  import '../app.css';

  import type { PageData } from './$types';
  export let data: PageData;

  import app from '$lib/configs/app';
  import navigation from '$lib/configs/navigation';

  if (!import.meta.env.SSR) {
    if (!('color-theme' in localStorage)) {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (!document.lazyloadInstance)
      document.lazyloadInstance = new LazyLoad({
        // use_native: true,
        threshold: 0
      });
  }
</script>

<svelte:head>
  <meta
    name="theme-color"
    content={app.themeColor} />
  <meta
    name="msapplication-TileColor"
    content={app.tileColor} />
  <meta
    name="application-name"
    content={app.shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={app.shortName} />
</svelte:head>

<RouteTransition
  referesh={data.referesh}
  mode={1}
  class="grow">
  <slot />
</RouteTransition>

<Footer menu={navigation.footer} />

<Navbar menu={navigation.navbar} />

<Drawer menu={navigation.draver} />

<ScreenBlock class="bg-neutral-200 dark:bg-slate-800" />

<YandexMetrikaInit />
