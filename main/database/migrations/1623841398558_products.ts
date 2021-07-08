import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('iiko_id', 255).notNullable()
      table.string('code', 255).notNullable()
      table.boolean('active')
      table.string('name', 255).notNullable()
      table.string('slug', 255).notNullable()
      table.text('composition')
      table.text('description')
      table.float('energy_amount')
      table.float('energy_full_amount')
      table.float('fiber_amount')
      table.float('fiber_full_amount')
      table.float('fat_amount')
      table.float('fat_full_amount')
      table.float('carbohydrate_amount')
      table.float('carbohydrate_full_amount')
      table.float('weight')
      table.string('measure_unit', 50).notNullable()
      table.float('price')
      table.integer('category_id').unsigned().references('categories.id')
      table.integer('image_id').unsigned().references('images.id')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
