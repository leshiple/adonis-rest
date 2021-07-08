import Category from 'App/Models/Category'
import responseCodes, { ResonseCode } from './responseCodes'

export default class CategoriesController {
  public async index({ request }) {
    const { page = 1, rowsPerPage = 10, sortBy = 'id', descending = false } = request.qs()

    const order = descending === 'true' ? 'desc' : 'asc'
    const limit = rowsPerPage ? rowsPerPage : Infinity
    const categories = await Category.query()
      .preload('products')
      .orderBy(sortBy, order)
      .paginate(page, limit)
    const categoriesJson = categories.serialize()

    const { code, message } = responseCodes.CATEGORIES_SUCCESS_FIND as unknown as ResonseCode

    return {
      code,
      message,
      body: categoriesJson,
    }
  }
  public async show({ params }) {
    const { id } = params

    const category = await Category.find(id)

    const { code, message } = responseCodes.CATEGORY_SUCCESS_FIND as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: category,
      },
    }
  }
}
