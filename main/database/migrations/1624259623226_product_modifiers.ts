import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductModifiers extends BaseSchema {
  protected tableName = 'product_modifiers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('modifier_id').unsigned().references('modifiers.id')
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
