import { axiosClient } from 'lib/axios';

export const userPlaylistsQuery = (userId: string) => ({
  queryKey: ['userPlaylists', userId],
  queryFn: async () => {
    return await axiosClient
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}/playlists`)
      .then((res) => res.data);
  },
});
