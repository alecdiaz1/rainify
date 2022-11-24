import { Song } from 'features/songs/types';
import { SongRow } from 'features/songs/components/SongRow';

type SongListProps = {
  songs: Song[];
};

export const SongList = ({ songs }: SongListProps) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {songs.map((song) => (
        <SongRow
          id={song.id}
          key={song.id}
          title={song.title}
          artists={song.artists}
          songUrl={song.songUrl}
          albumArtUrl={song.albumArtUrl}
          plays={song.plays}
        />
      ))}
    </div>
  );
};
