import { SongList } from 'features/songs/components/SongList';
import { SONGS } from 'songs';

export const Home = () => {
  return (
    <>
      <SongList songs={SONGS} />
    </>
  );
};
