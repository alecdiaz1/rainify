import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Song from 'App/Models/Song'

export default class SongsController {
  public async index() {
    const songs = await Database.from('songs')
      .join('users', 'songs.artist_id', '=', 'users.id')
      .select({
        id: 'users.id',
        title: 'title',
        artist: 'users.name',
        plays: 'plays',
        fileUrl: 'song_url',
        coverUrl: 'album_art_url',
      })

    return { songs }
  }

  public async show({ request }: HttpContextContract) {
    const songId = request.param('id')
    const songInfo = await Song.find(songId)

    return { songInfo }
  }

  public async incrementPlays({ request }: HttpContextContract) {
    const songId = request.param('id')
    const song = await Song.find(songId)
    if (song) {
      song.plays = song.plays + 1
      return song.plays
    }
  }
}
