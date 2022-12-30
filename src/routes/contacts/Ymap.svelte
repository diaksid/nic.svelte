<script lang="ts">
  import { onMount } from 'svelte';

  let className: string = '';
  export { className as class };

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

  const upload = () =>
    typeof ymaps !== 'undefined' && ymaps?.Map && ymaps?.Placemark;

  const mountMap = () => {
    const interval = setInterval(() => {
      if (upload()) {
        const points = new ymaps.Map('ymap', data.state).geoObjects;
        data.locations.forEach((location) => {
          points.add(
            new ymaps.Placemark(
              location.geometry,
              location.properties,
              location.options
            )
          );
        });
        clearInterval(interval);
      }
    }, 100);
  };

  onMount(() => {
    if (upload()) mountMap();
    else {
      const script = document.createElement('script');
      script.src =
        'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=cf1b8beb-bb0c-4563-9d28-c603002dd2ad';
      document.body.appendChild(script);
      script.addEventListener('load', mountMap);
    }
  });
</script>

<section
  id="ymap"
  class="w-full h-[45vh]
        bg-no-repeat bg-center bg-loading bg-1/5 lg:bg-1/10
        bg-gray-300 dark:bg-gray-500
        border-t-4 border-slate-200 dark:border-slate-800
        {className}"
  aria-hidden="true" />
