import { Home } from 'features/home/routes';
import { Profile } from 'features/profile/routes';
import { Queue } from 'features/queue/routes';

export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
  {
    path: '/queue',
    element: <Queue />,
  },
];
