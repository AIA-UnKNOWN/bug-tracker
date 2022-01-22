<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfilePicture;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login'])
    ->name('login');
Route::post('/register', [AuthController::class, 'register'])
    ->name('register');
Route::get('/logout', [AuthController::class, 'logout'])
    ->middleware('auth:sanctum')
    ->name('logout');
    
Route::prefix('/user')->group(function () {
    Route::get('/', [AuthController::class, 'getCurrentUser'])
        ->middleware('auth:sanctum')
        ->name('user');
    Route::put('/profile-picture/update', ProfilePicture\UpdateController::class)
        ->middleware('auth:sanctum')
        ->name('profile-picture-update');
});