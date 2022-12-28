<script lang="ts">
  import {
    Button,
    ImagePlaceholder,
    Skeleton,
    TestimonialPlaceholder,
    TextPlaceholder,
    VideoPlaceholder
  } from 'flowbite-svelte';
  import { PhoneArrowUpRight as IconPhone, Envelope as IconMail } from 'svelte-heros-v2';
  import { YandexMetrikaHit } from '$lib/seo/yandex';

  const title = 'НИЦ СЭ • Строительная экспертиза';
  const description = 'АО НИЦ «Строительная экспертиза», Москва';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="container">
    <div class="grid lg:grid-cols-12 gap-8 w-full pt-8">
      <div class="mr-auto place-self-center lg:col-span-7 2xl:col-span-8">
        <div class="contents">
          <h1
            class="mb-4 font-extrabold leading-tight text-slate-800 dark:text-slate-200 dark:text-shadow"
            style:--text-shadow-val="3px">
            АО&nbsp;НИЦ Строительная экспертиза
          </h1>
          <p
            class="mb-6 font-light text-gray-500 lg:mb-8 text-sm xs:text-md lg:text-lg dark:text-gray-400 uppercase">
            один из лидеров на строительном рынке в области консалтинга, лабораторного сопровождения
            строительства, обследования зданий и сооружений
          </p>
          <div class="flex gap-8">
            <Button
              href="tel://+74953239923"
              size="xl">
              <IconPhone size="32" />
            </Button>
            <Button
              href="mailto:mail@stroyexp.info"
              size="xl">
              <IconMail size="32" />
            </Button>
          </div>
        </div>
      </div>
      <div class="placeholders hidden lg:flex lg:col-span-5 2xl:col-span-4 lg:mt-0">
        <VideoPlaceholder
          class="h-auto w-auto max-w-full aspect-video"
          size="48" />
      </div>
    </div>
  </header>

  <div class="placeholders content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
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
