import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Song from 'App/Models/Song'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SongsController {
  public async index() {
    const songs = await Database.rawQuery(
      'SELECT\n' +
        's.id,\n' +
        's.title,\n' +
        's.plays,\n' +
        's.song_url,\n' +
        's.album_art_url,\n' +
        'jsonb_object_agg(u.id, u.name) AS artists\n' +
        'FROM songs s\n' +
        'LEFT JOIN user_song artistsong\n' +
        'ON s.id = artistsong.song_id\n' +
        'LEFT JOIN users u\n' +
        'ON artistsong.user_id = u.id\n' +
        'GROUP BY s.id\n' +
        'ORDER BY s.id'
    )

    return { songs: songs.rows }
  }

  public async show({ request }: HttpContextContract) {
    const songId = request.param('id')
    const songInfo = await Song.find(songId)

    return { songInfo }
  }

  public async addPlay({ request }: HttpContextContract) {
    const songId = request.param('id')
    const song = await Song.find(songId)
    if (song) {
      song.plays = song.plays + 1
      await song.save()
      return song.plays
    }
  }
}
