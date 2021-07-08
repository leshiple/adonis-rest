import ApiService, { ProductResponseBody, ProductsResponseBody } from 'src/services/ApiService';
import { IUIPagination } from 'src/types/Pagination.d';

export default {
  async index(pagination: IUIPagination): Promise<ProductsResponseBody> {
    const response = await ApiService.products(pagination);
    return response.data.body;
  },
  async show(id: string): Promise<ProductResponseBody> {
    const response = await ApiService.product(id);
    return response.data.body;
  },
};
