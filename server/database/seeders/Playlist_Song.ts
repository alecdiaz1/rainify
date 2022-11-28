import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Playlist_Song from 'App/Models/Playlist_Song'

export default class extends BaseSeeder {
  public async run() {
    await Playlist_Song.createMany([
      {
        playlist_id: 1,
        songId: 1,
        location: 1,
      },
      {
        playlist_id: 1,
        songId: 2,
        location: 2,
      },
      {
        playlist_id: 2,
        songId: 3,
        location: 1,
      },
      {
        playlist_id: 2,
        songId: 4,
        location: 2,
      },
      {
        playlist_id: 3,
        songId: 2,
        location: 2,
      },
      {
        playlist_id: 3,
        songId: 5,
        location: 1,
      },
    ])
  }
}
