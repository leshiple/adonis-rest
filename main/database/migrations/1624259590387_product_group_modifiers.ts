import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductGroupModifiers extends BaseSchema {
  protected tableName = 'product_group_modifiers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('group_modifiers_id').unsigned().references('group_modifiers.id')
      table.integer('product_id').unsigned().references('products.id')
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
