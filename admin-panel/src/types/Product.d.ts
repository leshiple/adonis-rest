import { IImage } from './Image.d';

export interface IProductBase {
  id: string
  iikoId: string
  code: string
  name: string
  slug: string
  price: number
}

export interface IProduct extends IProductBase {
  weight: number
  measureUnit: string
  energyAmount: number
  energyFullAmount: number
  fiberAmount: number
  fiberFullAmount: number
  fatAmount: number
  fatFullAmount: number
  carbohydrateAmount: number
  carbohydrateFullAmount: number
  image: IImage
}
