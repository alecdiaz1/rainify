import { axiosClient } from 'lib/axios';

export const playlistQuery = (playlistId: string | undefined) => ({
  queryKey: ['playlist', playlistId],
  queryFn: async () => {
    return await axiosClient
      .get(`${process.env.REACT_APP_API_URL}/playlists/${playlistId}`)
      .then((res) => res.data);
  },
});
