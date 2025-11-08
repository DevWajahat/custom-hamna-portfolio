<?php

use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Web\AboutController;
use App\Http\Controllers\Web\ContactController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\ProjectController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get("/",[HomeController::class, 'index'])->name("home");

// Route About
Route::get('about',[AboutController::class,'index'])->name('about');

// Route Projects

// Route::get('projects',[ProjectController::class,'index'])->name('projects');
Route::prefix('projects')->controller(ProjectController::class)->name('projects.')->group(function () {
    Route::get('/','index')->name('index');
    Route::get('detail','detail')->name('details');
});
// Route Contacts

Route::get('contact', [ContactController::class,'index'])->name('contact');

Route::get('admin',[AdminHomeController::class,'index'])->name('admin.index');
