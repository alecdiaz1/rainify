import { SongList } from 'features/songs/components/SongList'
import { Song } from 'features/songs'

const EX_SONGS: Song[] = [
  {
    id: 1,
    title: "better without u",
    artist: ["niko rain"],
    fileUrl: "client/public/better without u 10-12-2022-2.mp3",
    coverUrl: "https://image.petmd.com/files/styles/863x625/public/2022-06/rat.blanket.jpg",
  },
  {
    id: 2,
    title: "goodbye",
    artist: ["niko rain", "saint noelle"],
    fileUrl: "client/public/goodbye 11-10-2022-3.mp3",
    coverUrl: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/25RXAHHFJEI6TMFGHUBXEG4F54.jpg",
  }
]

export const Home = () => {
  return (
    <>
      <h2 className="text-3xl text-center my-4">rainify</h2>
      <SongList songs={EX_SONGS} />
    </>
  )
}
