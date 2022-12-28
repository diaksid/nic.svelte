<script lang="ts">
  import {
    ImagePlaceholder,
    Skeleton,
    TestimonialPlaceholder,
    TextPlaceholder
  } from 'flowbite-svelte';
  import { YandexMetrikaHit } from '$lib/seo/yandex';

  const title = 'НИЦ СЭ • Портфолио';
  const description = 'Портфолио АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <div class="placeholders content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
      <ImagePlaceholder />
      <ImagePlaceholder class="-scale-x-100" />
      <ImagePlaceholder />
      <ImagePlaceholder class="-scale-x-100" />
      <ImagePlaceholder />
      <ImagePlaceholder class="-scale-x-100" />
      <Skeleton class="lg:-scale-x-100 lg:mr-auto" />
      <TextPlaceholder />
    </div>
    <TestimonialPlaceholder />
  </div>
</main>
