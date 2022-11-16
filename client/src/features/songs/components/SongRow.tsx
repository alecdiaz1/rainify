import { Song } from '../types'

export const SongRow = (song: Song) => {
  return (
    <div className="rounded-md border-2 flex cursor-pointer">
      <img className="aspect-square w-16 object-cover" src={song.coverUrl} alt={song.title + " album art"} />
      <div className="ml-4 mt-2">
        <p className="">{song.title}</p>
        <p className="text-sm text-slate-400">{song.artist.join(", ")}</p>
      </div>
    </div>
  )
}
