import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Song from 'App/Models/Song'

export default class StreamEvent extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public streamed_at: DateTime

  @column()
  public songId: number

  @belongsTo(() => Song)
  public song: BelongsTo<typeof Song>
}
