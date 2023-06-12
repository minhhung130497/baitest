<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Users\LoginController;
use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\Admin\TodoController;


Route::get('admin/users/login',[LoginController::class ,'index']);
Route::post('admin/users/login/todo',[LoginController::class ,'todo']);

Route::get('admin/main',[MainController::class ,'index'])->name('admin');


Route::middleware(['auth'])->group(function () {

    Route::prefix('admin')->group(function() {
        Route::get('/', [MainController:: class, 'index']) ->name('admin');
        Route::get('main', [MainController:: class, 'index']);


         #todo
     Route::prefix('todos')->group(function() {
        Route::get('add',[TodoController::class , 'create']);
        // Route::post('add',[TodoController:: class , 'store']);
        // Route::get('list',[TodoController:: class , 'index']);
        // Route::get('edit/{menu}',[TodoController:: class , 'show']);
        // Route::post('edit/{menu}',[TodoController:: class , 'update']);
        // Route::DELETE('destroy',[TodoController:: class , 'destroy']);
    });
    });



});
