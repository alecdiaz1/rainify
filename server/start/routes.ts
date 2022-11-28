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

Route.group(() => {
  Route.group(() => {
    Route.get('/', 'SongsController.index')
    Route.get('/:id', 'SongsController.show')
    Route.patch('/:id/add-play', 'SongsController.addPlay')
  }).prefix('/songs')

  Route.group(() => {
    Route.get('/:id', 'UsersController.show')
    Route.get('/:id/playlists', 'PlaylistsController.index')
  }).prefix('/users')

  Route.group(() => {
    Route.get('/:id', 'PlaylistsController.show')
  }).prefix('/playlists')
}).prefix('/api')
