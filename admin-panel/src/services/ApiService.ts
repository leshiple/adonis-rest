import { AxiosResponse } from 'axios';
import { api } from 'src/boot/axios';
import { IUser } from 'src/types/User.d';
import { IProduct } from 'src/types/Product.d';
import { ICategoryBase, ICategory } from 'src/types/Category.d';
import { IUIPagination, IPagination } from 'src/types/Pagination.d';

interface BaseResponseData {
  code: string,
  message: string,
  status: number,
}

export interface LoginResponseBody {
  data: IUser,
}

export interface LoginResponseData extends BaseResponseData {
  body: LoginResponseBody,
}

export type UserResponseBody = LoginResponseBody;

export interface UserResponseData extends BaseResponseData {
  body: UserResponseBody,
}

export interface ProductsResponseBody {
  data: IProduct[]
  meta: IPagination
}

export interface ProductsResponseData {
  body: ProductsResponseBody
}

export interface ProductResponseBody {
  data: IProduct
}

export interface ProductResponseData {
  body: ProductResponseBody
}

export interface CategoriesResponseBody {
  data: ICategoryBase[]
  meta: IPagination
}

export interface CategoriesResponseData {
  body: CategoriesResponseBody
}

export interface CategoryResponseBody {
  data: ICategory
}

export interface CategoryResponseData {
  body: CategoryResponseBody
}

export default {
  async health(): Promise<AxiosResponse<LoginResponseData>> {
    return api.get('/health');
  },

  async login(email: string, password: string): Promise<AxiosResponse<LoginResponseData>> {
    return api.post('/auth/login', { email, password });
  },
  async signup(email: string, password: string): Promise<AxiosResponse> {
    return api.post('/auth/signup', { email, password });
  },
  async logout(): Promise<AxiosResponse> {
    return api.post('/auth/logout');
  },
  async confirmEmail(emailVerificationToken: string): Promise<AxiosResponse<LoginResponseData>> {
    return api.post('/auth/email/verify', { emailVerificationToken });
  },
  async sendConfirmationEmail(email: string): Promise<AxiosResponse<BaseResponseData>> {
    return api.post('/auth/email/send-confirmation', { email });
  },
  async forgotPassword(email: string): Promise<AxiosResponse<BaseResponseData>> {
    return api.post('/auth/password/forgot', { email });
  },
  async resetPassword(password: string, passwordResetToken: string)
    : Promise<AxiosResponse<LoginResponseData>> {
    return api.post('/auth/password/reset', { password, passwordResetToken });
  },
  async fetchUser(id: string): Promise<AxiosResponse<UserResponseData>> {
    return api.get(`/user/${id}`);
  },
  async fetchMe(): Promise<AxiosResponse<UserResponseData>> {
    return api.get('/auth/me');
  },

  async categories(pagination: IUIPagination): Promise<AxiosResponse<CategoriesResponseData>> {
    return api.get('/categories', {
      params: {
        ...pagination,
      },
    });
  },
  async category(id: string): Promise<AxiosResponse<CategoryResponseData>> {
    return api.get(`/categories/${id}`);
  },

  async products(pagination: IUIPagination): Promise<AxiosResponse<ProductsResponseData>> {
    return api.get('/products', {
      params: {
        ...pagination,
      },
    });
  },
  async product(id: string): Promise<AxiosResponse<ProductResponseData>> {
    return api.get(`/products/${id}`);
  },
};
