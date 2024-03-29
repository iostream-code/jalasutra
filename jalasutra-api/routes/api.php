<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ServiceTypeController;
use App\Http\Controllers\Api\VillageController;
use App\Http\Controllers\Api\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', LoginController::class)->name('login');
Route::post('/logout', LogoutController::class)->middleware('auth:api');

Route::apiResource('/users', UserController::class);
Route::apiResource('/services', ServiceController::class);
Route::apiResource('/service-types', ServiceTypeController::class);
Route::apiResource('/villages', VillageController::class);
// Route::apiResource('/mails', MailController::class)->middleware('auth:api');
Route::apiResource('/mails', MailController::class);
