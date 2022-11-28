import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Playlist from 'App/Models/Playlist'

export default class extends BaseSeeder {
  public async run() {
    await Playlist.createMany([
      {
        title: 'Playlist 1 private',
        userId: 1,
        isPublic: false,
      },
      {
        title: 'Playlist 2 private',
        userId: 2,
        isPublic: false,
      },
      {
        title: 'Playlist 3 public',
        userId: 3,
        isPublic: true,
      },
    ])
  }
}
