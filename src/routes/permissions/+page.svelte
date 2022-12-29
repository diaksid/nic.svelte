<script lang="ts">
  import { YandexMetrikaHit } from '$lib/seo/yandex';
  import Grid from './Grid.svelte';
  import data from '$lib/assets/images/content/permissions';

  const title = 'СКМ • Допуски';
  const description = 'Допуски предпрятия СКМ';
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
