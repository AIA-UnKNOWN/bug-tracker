<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfilePicture;
use App\Http\Controllers\Projects;
use App\Http\Controllers\Project;
use App\Http\Controllers\Issues;
use App\Http\Controllers\Issue;
use App\Http\Controllers\Friends;

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
    Route::get('{id}/profile-picture', ProfilePicture\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('profile-picture');
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
    Route::post('/{projectId}/add', Issue\AddController::class)
        ->middleware('auth:sanctum')
        ->name('add-issue');
});

Route::prefix('/issues')->group(function () {
    Route::get('/{projectId}', Issues\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('issues');
    Route::get('/{projectId}/search', Issues\SearchController::class)
        ->middleware('auth:sanctum')
        ->name('search-issues');
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
    Route::get('/{id}/non-assignees', Issue\NonAssigneesController::class)
        ->middleware('auth:sanctum')
        ->name('non-issue-assignees');
    Route::post('/{id}/assign', Issue\AssignController::class)
        ->middleware('auth:sanctum')
        ->name('assign');
    Route::delete('/{id}/assignee/{userId}/unassign', Issue\UnassignController::class)
        ->middleware('auth:sanctum')
        ->name('unassign');
});

Route::prefix('/friends')->group(function () {
    Route::get('/', Friends\IndexController::class)
        ->middleware('auth:sanctum')
        ->name('friends');
    Route::get('/search', Friends\SearchController::class)
        ->middleware('auth:sanctum')
        ->name('search-friend');
    Route::post('/add', Friends\AddController::class)
        ->middleware('auth:sanctum')
        ->name('add-friend');
    Route::get('/requesting', Friends\FriendRequestsController::class)
        ->middleware('auth:sanctum')
        ->name('friend-requests');
    Route::put('/{friendId}/accept', Friends\AcceptController::class)
        ->middleware('auth:sanctum')
        ->name('accept-friend-request');
    Route::delete('/{friendId}/reject', Friends\RejectController::class)
        ->middleware('auth:sanctum')
        ->name('reject-friend-request');
});