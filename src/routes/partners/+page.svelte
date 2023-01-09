<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import Grid from './Grid.svelte';
  import data from '$lib/assets/images/content/partners';

  const title = 'НИЦ СЭ • Партнёры';
  const description = 'Партнёры АО НИЦ «Строительная экспертиза»';

  const promise = data();
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Наши партнеры</h1>
  </header>

  {#await promise}
    <div
      class="w-[30rem] aspect-video mx-auto
             bg-no-repeat bg-center bg-loading-data bg-1/3" />
  {:then partners}
    <Grid {partners} />
  {:catch error}
    <div
      class="error
             w-[30rem] aspect-video mx-auto">
      {error.message}
    </div>
    {@debug error}
  {/await}
</main>
