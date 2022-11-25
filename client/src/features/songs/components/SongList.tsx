import { Song } from 'features/songs/types';
import { SongRow } from 'features/songs/components/SongRow';

type SongListProps = {
  songs: Song[];
  showRemovePlaylist?: boolean;
};

export const SongList = ({
  songs,
  showRemovePlaylist = false,
}: SongListProps) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {songs.map((song) => (
        <SongRow song={song} showRemovePlaylist={showRemovePlaylist} />
      ))}
    </div>
  );
};
