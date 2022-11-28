import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Playlist_Song extends BaseModel {
  public static table = 'playlist_song'

  @column({ isPrimary: true })
  public playlist_id: number

  @column()
  public songId: number

  @column()
  public location: number
}
