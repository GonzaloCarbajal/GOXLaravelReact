<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControladorMaestro;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
    |php artisan serve --> Levanta laravel
    |php artisan router:lis --> puedo ver el rout en una lista
    |php artisan make:controller ControllerTest4 --resource --> crea controller para resource
    |php artisan migrate --> crea las tablas en la base de datos configurado en .env
    |php artisan migrate:refresh --> Elimina todas las tablas, y las vuelve a crear
    |php artisan make:migration create_producto_table --create="producto" --> Crea archivo de migrations
    |php artisan rollback --> vuelve un paso hacia atras, seria con ctrl+z
    |php artisan make:model Productocategoria -m (con la primer letra en mayuscula y en singular crea modelo mas migracion (-m))
    |php artisan config:cache --> sirve para que la base deje de apuntar a laravel
    |php artisan make:controller wsPrueba -r (Crea modelo con recurso)
*/

//Route::get('/', function () {
//    return view('./Index/index');
//});

//Route::get( '/', 'ControladorMaestro@VistaHome' )->name('home');

Route::get("/", [ControladorMaestro::class, "VistaHome"]);

//
//Route::get( '/contacto', 'ControladorMaestro@VistaContacto' );
//
//Route::get( '/producto/{ProductoCategoriaId}/{ProductoCategoriaNom}/{SubCategoriaId}', 'ControladorMaestro@VistaProducto' );
//
//Route::get( '/test', 'ControladorMaestro@test' );


//Route::get('/producto', function () {
//    return view('./Producto/Producto');
//});
//
//Route::get('/home', function () {
//    return view('./Home/Home');
//});
