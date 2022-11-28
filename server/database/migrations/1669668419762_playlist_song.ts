import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'playlist_song'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('playlist_id')
      table.integer('song_id').unsigned().references('songs.id')
      table.integer('location').unsigned()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
