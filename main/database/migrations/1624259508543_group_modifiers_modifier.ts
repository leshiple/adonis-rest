import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupModifierModifiers extends BaseSchema {
  protected tableName = 'group_modifiers_modifier'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('group_modifiers_id').unsigned().references('group_modifiers.id')
      table.integer('modifier_id').unsigned().references('modifiers.id')
      table.integer('min_amount')
      table.integer('max_amount')
      table.boolean('required')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
