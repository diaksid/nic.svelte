<script lang="ts">
  import { ImagePlaceholder, Skeleton, TextPlaceholder, TestimonialPlaceholder } from 'flowbite-svelte';
  import { YandexMetrikaHit } from '$lib/seo/yandex';

  export let title: string;
  export let description: string;
  export let name = title;
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">{name}</h1>
  </header>

  <div class="placeholders content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <ImagePlaceholder />
      <TextPlaceholder class="" />
      <Skeleton />
      <ImagePlaceholder class="-scale-x-100" />
      <TextPlaceholder class="" />
      <Skeleton />
      <TextPlaceholder class="lg:-scale-x-100 lg:order-last" />
      <Skeleton class="lg:-scale-x-100 lg:mr-auto" />
    </div>
    <TestimonialPlaceholder />
  </div>
</main>
