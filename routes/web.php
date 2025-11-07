<?php

use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Web\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get("/",[HomeController::class, 'index'])->name("home");

Route::get('admin',[AdminHomeController::class,'index'])->name('admin.index');
