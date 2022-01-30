<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfilePicture;
use App\Http\Controllers\Projects;
use App\Http\Controllers\Project;
use App\Http\Controllers\Issues;
use App\Http\Controllers\Issue;

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
    
Route::prefix('/user')->group(function () {
    Route::get('/', [AuthController::class, 'getCurrentUser'])
        ->middleware('auth:sanctum')
        ->name('user');
    Route::post('/logout', [AuthController::class, 'logout'])
        ->middleware('auth:sanctum')
        ->name('logout');
    Route::put('/profile-picture/update', ProfilePicture\UpdateController::class)
        ->middleware('auth:sanctum')
        ->name('profile-picture-update');
});

Route::prefix('/projects')->group(function () {
    Route::get('/', Projects\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('projects');
    Route::post('add', Projects\UpdateController::class)
        ->middleware('auth:sanctum')
        ->name('add-project');
});

Route::prefix('/project')->group(function () {
    Route::get('/{id}', Project\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('project');
});

Route::prefix('/issues')->group(function () {
    Route::get('/{projectId}', Issues\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('issues');
});

Route::prefix('/issue')->group(function () {
    Route::get('/{issueId}', Issue\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('get-issue');
    Route::put('/{id}/update', Issue\UpdateController::class)
        ->middleware('auth:sanctum')
        ->name('update-issue');
    Route::get('/{id}/assignees', Issue\AssigneesController::class)
        ->middleware('auth:sanctum')
        ->name('issue-assignees');
});