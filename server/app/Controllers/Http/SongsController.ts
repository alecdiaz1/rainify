import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Song from 'App/Models/Song'
import Database from '@ioc:Adonis/Lucid/Database'

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
        'songs.plays',
        Database.raw('jsonb_object_agg(users.id, users.name) AS artists')
      )
      .join('songs', 'songs.id', '=', 'user_song.song_id')
      .join('users', 'users.id', '=', 'user_song.user_id')
      .groupBy('songs.id')
      .orderBy('songs.id')

    return { songs: allSongs }
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
