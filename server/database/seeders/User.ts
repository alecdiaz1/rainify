import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'niko rain',
      },
      {
        name: 'saint noelle',
      },
      {
        name: 'Mia Beyern',
      },
      {
        name: 'BIMBOS',
      },
    ])
  }
}
