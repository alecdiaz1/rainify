import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User_Song extends BaseModel {
  public static table = 'user_song'

  @column({ isPrimary: true })
  public userId: number

  @column()
  public songId: number
}
