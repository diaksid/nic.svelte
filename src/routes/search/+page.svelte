<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';
  //import { Form, Serp } from '$lib/seo/yandex/search';

  const robots = 'noindex, follow';
  const title = 'НИЦ СЭ • Поиск';
  const description = 'Поиск на сайте предпрятия АО НИЦ «Строительная экспертиза»';
  const canonical = '';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {robots}
  {title}
  {description}
  {canonical} />

<main
  class="dark:bg-transparent"
  itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Результаты поиска</h1>
  </header>

  <!--Form class="content mb-8 px-8 xs:pr-[44px] sm:pr-[52px] md:pr-[55px] lg:pr-[142px]" reload={true} /-->

  <!--Serp class="content mb-16 pr-8 lg:pr-4" /-->
</main>
