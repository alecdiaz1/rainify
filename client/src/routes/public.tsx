import { Home } from 'features/home/routes';
import { Profile } from 'features/profile/routes';

export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
];
