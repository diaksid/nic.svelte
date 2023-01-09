<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import Grid from './Grid.svelte';
  import data from '$lib/assets/images/content/permissions';

  const title = 'НИЦ СЭ • Допуски';
  const description = 'Допуски предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Допуски</h1>
  </header>

  <Grid {data} />
</main>
