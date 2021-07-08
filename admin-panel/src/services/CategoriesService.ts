import { IUIPagination } from 'src/types/Pagination.d';
import ApiService, { CategoryResponseBody, CategoriesResponseBody } from 'src/services/ApiService';

export default {
  async index(pagination: IUIPagination): Promise<CategoriesResponseBody> {
    const response = await ApiService.categories(pagination);
    return response.data.body;
  },
  async all(): Promise<CategoriesResponseBody> {
    const response = await ApiService.categories({
      page: 1,
      rowsPerPage: 100000000000,
      sortBy: 'name',
      descending: false,
    });
    return response.data.body;
  },
  async show(id: string): Promise<CategoryResponseBody> {
    const response = await ApiService.category(id);
    return response.data.body;
  },
};
