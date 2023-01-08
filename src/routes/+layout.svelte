<script lang="ts">
  import { browser } from '$app/environment';
  import LazyLoad from 'vanilla-lazyload';
  import { Drawer, Footer, Navbar } from '$lib/components';
  import { RouteTransition, ScreenBlock } from '$lib/ui';
  import { YandexMetrikaInit } from '$lib/seo/yandex/metrika';

  import '../app.css';

  import navigation from '$lib/configs/navigation';
  import app from '$lib/configs/app';
  import type { SvelteComponent } from 'svelte';
  const { shortName, themeColor, tileColor } = app;

  import type { PageData } from './$types';
  export let data: PageData;

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
    content={themeColor} />
  <meta
    name="msapplication-TileColor"
    content={tileColor} />
  <meta
    name="application-name"
    content={shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={shortName} />
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

<YandexMetrikaInit />

<ScreenBlock class="bg-neutral-200 dark:bg-slate-800" />
