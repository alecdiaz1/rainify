import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User_Song from 'App/Models/User_Song'

export default class extends BaseSeeder {
  public async run() {
    await User_Song.createMany([
      {
        user_id: 1,
        song_id: 1,
      },
      {
        user_id: 3,
        song_id: 2,
      },
      {
        user_id: 4,
        song_id: 3,
      },
      {
        user_id: 1,
        song_id: 4,
      },
      {
        user_id: 2,
        song_id: 4,
      },
      {
        user_id: 2,
        song_id: 5,
      },
    ])
  }
}
