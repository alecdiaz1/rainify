import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User_Song from 'App/Models/User_Song'

export default class extends BaseSeeder {
  public async run() {
    await User_Song.createMany([
      {
        userId: 1,
        songId: 1,
      },
      {
        userId: 3,
        songId: 2,
      },
      {
        userId: 4,
        songId: 3,
      },
      {
        userId: 1,
        songId: 4,
      },
      {
        userId: 2,
        songId: 4,
      },
      {
        userId: 2,
        songId: 5,
      },
    ])
  }
}
