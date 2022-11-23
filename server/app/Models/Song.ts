import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
  public artist_id: number

  @column()
  public plays: number

  @column({ serializeAs: 'fileUrl' })
  public song_url: string

  @column({ serializeAs: 'coverUrl' })
  public album_art_url: string
}
