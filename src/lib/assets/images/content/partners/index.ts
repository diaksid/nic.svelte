export default async () => [
  {
    image: (
      await import(`$lib/assets/images/content/partners/00.png?w=480&h=250&webp`)
    ).default,
    text: 'Строительное Управление № 363'
  },
  {
    image: (
      await import(`$lib/assets/images/content/partners/01.png?w=480&h=250&webp`)
    ).default,
    text: 'Научно-Исследовательский Центр «Строительная экспертиза»'
  },
  {
    image: (
      await import(`$lib/assets/images/content/partners/02.png?w=480&h=250&webp`)
    ).default,
    text: 'Группа Компаний «ССК»'
  },
  {
    image: (
      await import(`$lib/assets/images/content/partners/03.png?w=480&h=250&webp`)
    ).default,
    text: 'Транспортная компания «УМ-77»'
  },
  {
    image: (
      await import(`$lib/assets/images/content/partners/04.png?w=480&h=250&webp`)
    ).default,
    text: '«ST»'
  }
];
