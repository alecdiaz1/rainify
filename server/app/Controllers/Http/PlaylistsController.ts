import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Playlist_Song from 'App/Models/Playlist_Song'
import Playlist from 'App/Models/Playlist'

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

    return { userPlaylists: userPlaylists }
  }

  public async create({ request }: HttpContextContract) {
    const { title, userId, isPublic, songId } = request.body()

    const newPlaylist = await Playlist.create({
      title,
      userId,
      isPublic,
    })

    if (songId) {
      await Playlist_Song.create({
        playlist_id: newPlaylist.id,
        songId: songId,
        location: 1,
      })
    }

    return {
      playlistInfo: newPlaylist,
      playlistSongs: await this.getPlaylistSongs(newPlaylist.id),
    }
  }

  public async show({ request }: HttpContextContract) {
    const playlistId = request.param('id')
    const playlistSongs = await this.getPlaylistSongs(playlistId)
    return { playlistSongs }
  }

  // TODO: Add remove from playlist functionality
  public async update({ request }: HttpContextContract) {
    const playlistId = request.param('id')
    const { songId, location } = request.body()

    await Playlist_Song.create({
      playlist_id: playlistId,
      songId,
      location,
    })

    return { playlistSongs: await this.getPlaylistSongs(playlistId) }
  }

  private async getPlaylistSongs(playlistId: number) {
    // prettier-ignore
    return Database
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
      .orderBy('playlist_song.location');
  }
}
