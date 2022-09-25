import routes from 'resources/routes.json';

export const profileData = [
  {
    title: 'Application Settings',
    data: [
      {
        title: 'Notification',
      },
      {
        title: 'Dark Mode',
      },
    ],
  },
  {
    title: 'Support',
    data: [
      {
        title: 'Personal Data',
        icon: 'person-outline',
        route: routes.personalData,
      },
      {
        title: 'Sell my home',
        icon: 'file-tray-full-outline',
        route: routes.sellMyHome,
      },
      { title: 'Settings', icon: 'settings-outline', route: routes.settings },
    ],
  },
];
