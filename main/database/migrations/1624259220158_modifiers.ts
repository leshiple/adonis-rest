import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Modifiers extends BaseSchema {
  protected tableName = 'modifiers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('iiko_id', 255)
      table.string('name', 255)
      table.float('energy_full_amount')
      table.float('fiber_full_amount')
      table.float('fat_full_amount')
      table.float('carbohydrate_full_amount')
      table.float('weight')
      table.float('price')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
