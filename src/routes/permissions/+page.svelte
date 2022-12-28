<script lang="ts">
  import {
    ImagePlaceholder,
    Skeleton,
    TestimonialPlaceholder,
    TextPlaceholder
  } from 'flowbite-svelte';
  import { YandexMetrikaHit } from '$lib/seo/yandex';

  const title = 'НИЦ СЭ • Допуски';
  const description = 'Допуски АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1  class="title">Допуски</h1>
  </header>

  <div class="placeholders content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
      <ImagePlaceholder />
      <Skeleton />
      <ImagePlaceholder />
      <Skeleton />
      <ImagePlaceholder />
      <Skeleton />
      <TextPlaceholder />
    </div>
    <TestimonialPlaceholder />
  </div>
</main>
