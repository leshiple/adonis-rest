/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

/* /api */
Route.group(() => {
  /* /api/v1 */
  Route.group(() => {
    /* /api/v1/auth */
    Route.group(() => {
      Route.post('/signup', 'AuthController.signup')
      Route.post('/login', 'AuthController.login')
      Route.post('/logout', 'AuthController.logout')
      Route.get('/me', 'AuthController.me')
    }).prefix('auth')

    Route.group(() => {
      Route.post('/sync', 'NomenclatureController.sync')
    }).prefix('nomenclature')

    /* /api/v1/categories */
    Route.group(() => {
      Route.get('', 'CategoriesController.index')
      Route.get('/:id', 'CategoriesController.show')
    })
      .middleware('auth:web')
      .prefix('categories')

    /* /api/v1/products */
    Route.group(() => {
      Route.get('', 'ProductsController.index')
      Route.get('/:id', 'ProductsController.show')
      Route.post('', 'ProductsController.store').middleware('validate:CreateProductValidator')
    })
      // .middleware('auth:web')
      .prefix('products')
  }).prefix('/v1')
}).prefix('/api')

Route.post('/api/v1/upload', 'FilesController.uploadProductImage').middleware(
  'validate:UploadProductImageValidator'
)
Route.get('/api/v1/files', 'FilesController.index')
