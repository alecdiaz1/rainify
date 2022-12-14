import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Song from 'App/Models/Song'
import Playlist from 'App/Models/Playlist'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @manyToMany(() => Song, {
    pivotTable: 'user_song',
  })
  public songs: ManyToMany<typeof Song>

  @manyToMany(() => Playlist, {
    pivotTable: 'playlist_song',
  })
  public playlists: ManyToMany<typeof Playlist>
}
