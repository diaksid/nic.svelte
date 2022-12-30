<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '$lib/seo/yandex';

  const title = 'НИЦ СЭ • Регламент';
  const description =
    'Регламент АО НИЦ «Строительная экспертиза» по организации и проведения негосударственной экспертизы проектной документации и результатов инженерных изысканий';

  let node: HTMLElement;
  const onload = () => node.classList.remove('opacity-0');

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content sr-only">
    <h1 class="title">Регламент</h1>
  </header>

  <div
    class="container
           bg-loading bg-center bg-no-repeat bg-1/4 sm:bg-1/5 lg:bg-1/10">
    <iframe
      bind:this={node}
      on:load={onload}
      class="lazy
             w-inherit h-screen max-h-screen--navbar md:pt-3
             shadow-lg shadow-slate-500
             opacity-0 transition-opacity duration-500"
      loading="lazy"
      data-src="/docs/regulation.pdf"
      title="регламент АО НИЦ «Строительная экспертиза»"
      frameborder="0"
      allowfullscreen />
    <link href="/docs/regulation.pdf" />
  </div>
</main>
