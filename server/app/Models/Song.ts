import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Song extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public plays: number

  @column({ serializeAs: 'fileUrl' })
  public song_url: string

  @column({ serializeAs: 'coverUrl' })
  public album_art_url: string

  @manyToMany(() => User, {
    pivotTable: 'user_song',
  })
  public artists: ManyToMany<typeof User>
}
