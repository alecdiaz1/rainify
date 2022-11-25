import { axiosClient } from 'lib/axios';

export const homeQuery = () => ({
  queryKey: ['home'],
  queryFn: async () => {
    return await axiosClient
      .get(`${process.env.REACT_APP_API_URL}/songs`)
      .then((res) => res.data);
  },
});
