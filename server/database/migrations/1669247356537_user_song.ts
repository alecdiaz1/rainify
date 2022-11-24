import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_song'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('users.id')
      table.integer('song_id').unsigned().references('songs.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
