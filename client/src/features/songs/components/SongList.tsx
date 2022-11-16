import { Song } from '../types'
import { SongRow } from './SongRow'

type SongListProps = {
  songs: Song[]
}

export const SongList = ({ songs }: SongListProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 mx-4">
      { songs.map((song) => (
        <SongRow
          id={song.id}
          title={song.title}
          artist={song.artist}
          fileUrl={song.fileUrl}
          coverUrl={song.coverUrl}
        />
      ))}
    </div>
  )
}
