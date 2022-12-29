// const rand = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
//`https://picsum.photos/seed/${rand(0,200)}/800/800`
/*
const loader = async (directives = '') => {
  directives = '?' + directives + (directives ? '&' : '') + 'webp';
  const images = [];
  for (let i = 0; i < 19; i++)
    images.push(
      (
        await import(
          `$lib/assets/images/content/portfolio/${(i < 10 ? '0' : '') + i}.jpg${directives}`
        )
      ).default
    );
  console.log(images);
  return images;
};
*/

export const sources = async () => [
  (await import(`$lib/assets/images/content/portfolio/00.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/01.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/02.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/03.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/04.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/05.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/06.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/07.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/08.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/09.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/10.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/11.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/12.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/13.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/14.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/15.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/16.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/17.jpg?webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/18.jpg?webp`)).default
];

export const screens = async () => [
  (await import(`$lib/assets/images/content/portfolio/00.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/01.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/02.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/03.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/04.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/05.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/06.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/07.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/08.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/09.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/10.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/11.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/12.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/13.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/14.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/15.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/16.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/17.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/18.jpg?w=320&h=180&webp`)).default
];

export const squares = async () => [
  (await import(`$lib/assets/images/content/portfolio/00.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/01.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/02.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/03.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/04.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/05.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/06.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/07.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/08.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/09.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/10.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/11.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/12.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/13.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/14.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/15.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/16.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/17.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/content/portfolio/18.jpg?w=320&h=320&webp`)).default
];
