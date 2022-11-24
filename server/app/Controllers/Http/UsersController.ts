import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SongsController {
  public async show({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.find(userId)

    // TODO: Fix returning only one artist
    const userSongs = await Database.rawQuery(
      'SELECT\n' +
        '\ts.id,\n' +
        '\ts.title,\n' +
        '\ts.plays,\n' +
        '\ts.song_url,\n' +
        '\ts.album_art_url,\n' +
        '\tjsonb_object_agg(u.id, u.name) AS artists\n' +
        'FROM songs s\n' +
        'LEFT JOIN user_song artistsong\n' +
        '\tON s.id = artistsong.song_id\n' +
        'LEFT JOIN users u\n' +
        '\tON artistsong.user_id = u.id\n' +
        'WHERE\n' +
        `\tartistsong.user_id = ${userId}\n` +
        'GROUP BY s.id\n' +
        'ORDER BY s.id'
    )

    return { songs: userSongs.rows, artistName: user?.name }
  }
}
