<script lang="ts">
  import { YandexMetrikaHit, YandexMap } from 'daks-svelte';
  //import { Icon } from '$ui/iconfy';
  import {
    MapPin as IconMap,
    PhoneArrowUpRight as IconPhone,
    Envelope as IconMail
  } from 'svelte-heros-v2';

  const data = {
    locations: [
      {
        geometry: [55.771174, 37.60589],
        properties: {
          iconContent: '<strong class="tracking-wider">НИЦ «Строительная экспертиза»</strong>',
          balloonContentHeader: 'НИЦ «Строительная экспертиза»',
          balloonContentBody:
            '<img class=mx-auto src=/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.771174, 37.60589],
      zoom: 17,
      behaviors: [
        'drag',
        'dblClickZoom',
        'rightMouseButtonMagnifier',
        'multiTouch'
      ],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };

  const title = 'НИЦ СЭ • Контакты ';
  const description = 'Контакты АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between min-h-screen"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <div
    class="content py-4
           flex flex-col justify-between gap-7
           text-base md:text-lg lg:text-xl text-sky-800 dark:text-sky-200 align-middle">
    <a
      rel="nofollow noreferrer"
      class="hover:text-sky-500"
      href="//clck.ru/9uRC6"
      target="_blank">
      <IconMap
        class="inline mr-2"
        size="30" />
      <!--Icon
        icon="material-symbols:location-on-outline"
        class="inline"
        width="24"
        height="24" /-->
      127006, г.&nbsp;Москва, ул.&nbsp;Малая Дмитровка, д.&nbsp;18а, стр.&nbsp;3
    </a>
    <a
      class="hover:text-sky-500"
      href="tel://+74953239923">
      <IconPhone
        class="inline mr-2"
        size="32" />
      <!--Icon
        icon="material-symbols:phone-in-talk-outline"
        class="inline"
        width="24"
        height="24" /-->
      +7 (495) 323-99-23
    </a>
    <a
      class="hover:text-sky-500"
      href="mailto:mail@stroyexp.info">
      <IconMail
        class="inline mr-2"
        size="30" />
      <!--Icon
        icon="material-symbols:mail-outline"
        class="inline"
        width="24"
        height="24" /-->
      mail@stroyexp.info
    </a>
  </div>

  <YandexMap {data} />
</main>
