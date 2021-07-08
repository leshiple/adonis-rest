import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupModifiers extends BaseSchema {
  protected tableName = 'group_modifiers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('iiko_id', 255)
      table.string('name', 255)
      table.integer('order')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
