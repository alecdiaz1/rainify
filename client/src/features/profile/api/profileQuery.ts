import { axiosClient } from 'lib/axios';

export const profileQuery = (id: string | undefined) => ({
  queryKey: ['profile', id],
  queryFn: async () => {
    return await axiosClient
      .get(`${process.env.REACT_APP_API_URL}/users/${id}`)
      .then((res) => res.data);
  },
});
