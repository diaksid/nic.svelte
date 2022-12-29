// A4 dpi 75 : 620 × 877 px
export default async () => ({
  images: [
    (await import(`$lib/assets/images/content/permissions/00.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/01.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/02.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/03.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/04.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/05.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/06.png?webp`)).default,
    (await import(`$lib/assets/images/content/permissions/07.png?webp`)).default
  ],
  thumbnails: [
    (await import(`$lib/assets/images/content/permissions/00.png?w=224&h=320&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/01.png?w=224&h=320&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/02.png?w=224&h=320&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/03.png?w=224&h=320&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/04.png?w=224&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/05.png?w=224&h=320&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/06.png?w=224&webp`))
      .default,
    (await import(`$lib/assets/images/content/permissions/07.png?w=224&h=320&webp`))
      .default
  ]
});
