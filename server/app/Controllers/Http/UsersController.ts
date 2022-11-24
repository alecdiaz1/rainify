import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SongsController {
  public async show({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.find(userId)

    const userSongIdsQuery = await Database.from('user_song')
      .select('user_song.song_id')
      .where('user_song.user_id', '=', userId)

    const userSongIds = userSongIdsQuery.map(({ song_id }) => song_id)

    const userSongsQuery = await Database.rawQuery(
      'SELECT\n' +
        '\tsongs.id,\n' +
        '\tsongs.title,\n' +
        '\tsongs.song_url,\n' +
        '\tsongs.album_art_url,\n' +
        '\tsongs.plays,\n' +
        '\tjsonb_object_agg(users.id, users.name) as artists\n' +
        'FROM\n' +
        '\tuser_song\n' +
        'JOIN songs on songs.id = user_song.song_id\n' +
        'JOIN users on users.id = user_song.user_id\n' +
        `WHERE songs.id IN (${userSongIds})\n` +
        'GROUP BY songs.id\n' +
        'ORDER BY songs.id'
    )

    return { songs: userSongsQuery.rows, artistName: user?.name }
  }
}
