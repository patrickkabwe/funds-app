import routes from 'resources/routes.json';

export const profileData = [
  {
    title: 'Home Search',
    data: [
      {
        title: 'Recently viewed',
        icon: 'eye-outline',
        route: routes.recentViewed,
      },
      {
        title: 'Past Tour',
        icon: 'calendar-outline',
        route: routes.pastTour,
      },
      { title: 'My Listings', icon: 'home-outline', route: routes.myListings },
    ],
  },
  {
    title: 'General',
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
