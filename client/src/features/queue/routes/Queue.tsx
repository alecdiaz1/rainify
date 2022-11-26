import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { QueueSongList } from 'features/queue/routes/components/QueueSongList';
import { QueueSongRow } from 'features/queue/routes/components/QueueSongRow';

export const Queue = () => {
  const queue = useAppSelector((state: RootState) => state.player.queue);
  const currentSongInfo = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );

  return (
    <>
      <h2 className="text-xl mb-4 font-bold text-white">Queue</h2>
      <h3 className="text-lg font-semibold text-white">Now playing:</h3>
      <QueueSongRow className="mt-2" song={currentSongInfo} />
      <h3 className="text-lg font-semibold mt-8 text-white">Up next:</h3>
      <QueueSongList className="mt-2" songs={queue.slice(1)} />
    </>
  );
};
