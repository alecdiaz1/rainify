import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SongsController {
  public async show({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.find(userId)

    // prettier-ignore
    const userSongs = await Database
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
      .whereIn(
        'songs.id',
        Database
          .from('user_song')
          .select('user_song.songId')
          .where('user_song.userId', '=', userId)
      )
      .groupBy('songs.id')
      .orderBy('songs.id')

    return { songs: userSongs, artistName: user?.name }
  }
}
