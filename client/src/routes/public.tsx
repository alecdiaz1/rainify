import { Home } from 'features/home/routes';
import { Profile } from 'features/profile/routes';
import { Queue } from 'features/queue/routes';
import { Playlists } from 'features/playlists/routes';
import { Playlist } from 'features/playlists/routes/Playlist';

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
  {
    path: '/playlists',
    element: <Playlists />,
  },
  {
    path: '/playlists/:id',
    element: <Playlist />,
  },
];
