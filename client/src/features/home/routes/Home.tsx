import { SongList } from 'features/songs/components/SongList';
import { SONGS } from 'songs';

export const Home = () => {
  return (
    <>
      <h2 className="text-3xl text-center my-4">rainify</h2>
      <SongList songs={SONGS} />
    </>
  )
}
