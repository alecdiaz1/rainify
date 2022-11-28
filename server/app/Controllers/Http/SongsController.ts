import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import StreamEvent from 'App/Models/StreamEvent'

export default class SongsController {
  public async index() {
    // prettier-ignore
    const allSongs = await Database
      .from('user_song')
      .select(
        'songs.id',
        'songs.title',
        'songs.song_url',
        'songs.album_art_url',
        Database.raw('jsonb_object_agg(users.id, users.name) AS artists'),
        Database.raw(
          '(SELECT COUNT(*) \n' +
          'FROM stream_events\n' +
          'WHERE songs.id = stream_events.songId\t\n' +
          ') AS plays')
      )
      .join('songs', 'songs.id', '=', 'user_song.songId')
      .join('users', 'users.id', '=', 'user_song.userId')
      .groupBy('songs.id')
      .orderBy('songs.id')

    return { songs: allSongs }
  }

  public async show({ request }: HttpContextContract) {
    const songId = request.param('id')
    return this.getSong(songId)
  }

  public async addPlay({ request }: HttpContextContract) {
    const songId = request.param('id')

    const streamEvent = new StreamEvent()
    streamEvent.songId = songId
    await streamEvent.save()

    return this.getSong(songId)
  }

  private async getSong(songId: number) {
    return Database.from('user_song')
      .select(
        'songs.id',
        'songs.title',
        'songs.song_url',
        'songs.album_art_url',
        Database.raw('jsonb_object_agg(users.id, users.name) AS artists'),
        Database.raw(
          '(SELECT COUNT(*) \n' +
            'FROM stream_events\n' +
            'WHERE songs.id = stream_events.songId\t\n' +
            ') AS plays'
        )
      )
      .join('songs', 'songs.id', '=', 'user_song.songId')
      .join('users', 'users.id', '=', 'user_song.userId')
      .where('songs.id', '=', songId)
      .groupBy('songs.id')
      .orderBy('songs.id')
  }
}
