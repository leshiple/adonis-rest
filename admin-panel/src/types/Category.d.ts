import { IProduct } from './Product.d';

export interface ICategoryBase {
  id: number
  active: number
  order: number
  name: string
  slug: string

}

export interface ICategory extends ICategoryBase {
  products: IProduct[]
}
