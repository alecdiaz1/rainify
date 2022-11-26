import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import StreamEvent from 'App/Models/StreamEvent'

export default class Song extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column({ serializeAs: 'fileUrl' })
  public song_url: string

  @column({ serializeAs: 'coverUrl' })
  public album_art_url: string

  @manyToMany(() => User, {
    pivotTable: 'user_song',
  })
  public artists: ManyToMany<typeof User>

  @hasMany(() => StreamEvent)
  public streamEvents: HasMany<typeof StreamEvent>
}
