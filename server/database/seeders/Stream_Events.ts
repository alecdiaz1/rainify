import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StreamEvent from 'App/Models/StreamEvent'
import { DateTime } from 'luxon'

const Chance = require('chance')

const chance = new Chance()

export default class extends BaseSeeder {
  private createRandomStreams(numberOfStreams, songId) {
    return [...Array(numberOfStreams).keys()].map(() => ({
      streamed_at: DateTime.fromJSDate(chance.date({ year: 2022 })),
      songId: songId,
    }))
  }

  public async run() {
    await StreamEvent.createMany([
      ...this.createRandomStreams(5, 1),
      ...this.createRandomStreams(3, 2),
      ...this.createRandomStreams(1, 3),
    ])
  }
}
