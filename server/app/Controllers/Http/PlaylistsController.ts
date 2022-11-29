import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaylistsController {
  public async index({ request }: HttpContextContract) {
    const userId = request.param('id')

    // prettier-ignore
    const userPlaylists = await Database.from('playlists')
      .select(
        'playlists.id',
        'playlists.title',
        'playlists.user_id',
        'playlists.is_public')
      .where('playlists.is_public', '=', true)
      .orWhere('playlists.user_id', '=', userId)

    return { playlists: userPlaylists }
  }

  public async show({ request }: HttpContextContract) {
    const playlistId = request.param('id')

    // prettier-ignore
    const playlistSongs = await Database
      .from('playlist_song')
      .select(
        'playlist_song.song_id AS id',
        'playlist_song.location',
        'songs.title',
        'songs.song_url',
        'songs.album_art_url',
        Database
          .rawQuery('\t(\n' +
            'SELECT jsonb_object_agg(users.id, users.name) AS artists\n' +
            'FROM user_song\n' +
            'JOIN songs ON songs.id = user_song.song_id\n' +
            'JOIN users on users.id = user_song.user_id\n' +
            'WHERE playlist_song.song_id = songs.id\n' +
          ')')
      )
      .join('playlists', 'playlists.id', '=', 'playlist_song.playlist_id')
      .join('songs', 'playlist_song.song_id', '=', 'songs.id')
      .where('playlists.id', '=', playlistId)
      .orderBy('playlist_song.location')

    return { playlistSongs: playlistSongs }
  }
}
