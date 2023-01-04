export const draver = {
  header: [
    {
      href: '/about',
      label: 'О предприятии'
    },
    {
      href: '/partners',
      label: 'Партнёры'
    }
  ],
  activity: [
    {
      href: '/inspection',
      label: 'Обследование зданий и сооружений'
    },
    {
      href: '/technical-supervision',
      label: 'Технический надзор'
    },
    {
      href: '/laboratory-control',
      label: 'Лабораторный контроль',
      links: [
        {
          href: '/electric-heating',
          label: 'Электропрогрев'
        },
        {
          href: '/field-tests',
          label: 'Натурные испытания'
        }
      ]
    },
    {
      href: '/geodesy-monitoring',
      label: 'Геодезия и мониторинг'
    },
    {
      href: '/forensic-examination',
      label: 'Судебная экспертиза'
    },
    {
      href: '/energy-audit',
      label: 'Энергоаудит'
    },
    {
      href: '/certification-accreditation',
      label: 'Сертификация и аккредитация'
    }
  ],
  footer: [
    {
      href: '/feedback',
      label: 'Отзывы'
    },
    {
      href: '/privacy',
      label: 'Политика конфиденциальности'
    }
  ]
};

export const navbar = [
  /*{
    href: '/',
    label: 'Главная'
  },*/
  {
    href: '/activity',
    label: 'Деятельность',
    links: draver.activity
  },
  {
    href: '/portfolio',
    label: 'Проекты'
  },
  {
    href: '/permissions',
    label: 'Допуски'
  },
  {
    href: '/regulation',
    label: 'Регламент'
  },
  {
    href: '/contacts',
    label: 'Контакты'
  }
];

export const footer = [
  {
    href: '/permissions',
    label: 'Допуски'
  },
  {
    href: '/regulation',
    label: 'Регламент'
  },
  {
    href: '/contacts',
    label: 'Контакты'
  }
];

export default { navbar, draver, footer };
