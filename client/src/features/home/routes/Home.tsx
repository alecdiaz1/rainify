import { SongList } from 'features/songs/components/SongList';
import { useQuery } from '@tanstack/react-query';
import { homeQuery } from 'features/home/api/homeQuery';

export const Home = () => {
  const { isLoading, data } = useQuery(homeQuery());

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <SongList songs={data.songs} />
    </>
  );
};
