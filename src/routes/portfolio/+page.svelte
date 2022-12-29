<script lang="ts">
  import { YandexMetrikaHit } from '$lib/seo/yandex';
  import Grid from './Grid.svelte';
  import { sources, squares } from '$lib/assets/images/content/portfolio';

  const data = async () => ({
    images: await sources(),
    thumbnails: await squares()
  });

  const title = 'НИЦ СЭ • Проекты';
  const description = 'Проекты предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <Grid {data} />
</main>
