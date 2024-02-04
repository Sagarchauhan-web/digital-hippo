export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      { name: 'Editor picks', href: '#', imageSrc: '/nav/ui-kits/mixed.jgp' },
      { name: 'New arrivals', href: '#', imageSrc: '/nav/ui-kits/blue.jgp' },
      { name: 'Best sellers', href: '#', imageSrc: '/nav/ui-kits/purple.jgp' },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite icon picks',
        href: '#',
        imageSrc: '/nav/icons/picks.jgp',
      },
      { name: 'New arrivals', href: '#', imageSrc: '/nav/icons/new.jgp' },
      {
        name: 'Best sellers icons',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jgp',
      },
    ],
  },
];
