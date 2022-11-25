import { SongList } from 'features/songs/components/SongList';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';

export const Queue = () => {
  const queue = useAppSelector((state: RootState) => state.player.queue);

  return (
    <>
      <h2 className="text-xl mb-4">Queue</h2>
      <SongList songs={queue} showRemovePlaylist />
    </>
  );
};
