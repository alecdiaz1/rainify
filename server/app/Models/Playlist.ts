import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Song from 'App/Models/Song'
import User from 'App/Models/User'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public userId: number

  @column()
  public isPublic: boolean

  @manyToMany(() => Song, {
    pivotTable: 'playlist_song',
  })
  public songs: ManyToMany<typeof Song>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
