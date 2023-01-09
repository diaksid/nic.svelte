<script lang="ts">
  import { Lightboxes, LightboxModal, LightboxThumbnail } from 'daks-svelte';
  import placeholder from 'daks-svelte/assets/icons/placeholder';

  export let data;

  const promise = data();

  const loader = () =>
    document?.lazyloadInstance && document.lazyloadInstance.update();
</script>

<div class="content">
  {#await promise}
    <div
      class="w-56 aspect-A4 mx-auto
             bg-no-repeat bg-center bg-loading-data bg-1/3" />
  {:then { images, thumbnails }}
    <Lightboxes
      class="flex flex-wrap gap-8 justify-center"
      fullscreen={false}
      css={{ overlay: 'overflow-offset' }}
      options={{ behaviour: 'loop' }}
      {loader}>
      <svelte:fragment slot="thumbnail">
        {#each thumbnails as thumbnail, idx}
          <LightboxThumbnail>
            <img
              class="lazy rounded-md
                     bg-no-repeat bg-center bg-1/5 bg-loading bg-gray-300 shadow-lg shadow-slate-700
                     dark:shadow-slate-500 dark:hover:shadow-slate-300
                     hover:shadow-slate-900"
              src={placeholder}
              data-src={thumbnail.src}
              width={thumbnail.width}
              height={thumbnail.height}
              alt="skm: thumbnail {idx}"
              loading="lazy" />
            <link rel="image" href={images[idx].src} />
            <link rel="thumbnailUrl" href={thumbnail.src} />
          </LightboxThumbnail>
        {/each}
      </svelte:fragment>
      {#each images as image, idx}
        <LightboxModal>
          <img
            class="bg-no-repeat bg-center bg-1/10 bg-loading"
            src={image.src}
            width={image.width}
            height={image.height}
            alt="skm: image {idx}"
            loading="lazy" />
        </LightboxModal>
      {/each}
    </Lightboxes>
  {:catch error}
    <div
      class="error
             w-56 aspect-A4 mx-auto">
      {error.message}
    </div>
    {@debug error}
  {/await}
</div>
