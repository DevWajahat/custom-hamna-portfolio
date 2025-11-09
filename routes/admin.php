<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\HomeController;
use App\Livewire\Auth\Login;
use Illuminate\Support\Facades\Route;

Route::post('login', Login::class);

Route::get('logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth');

Route::middleware(['CheckAdminAuth','preventBack'])->group(function () {


    Route::get('/', [HomeController::class, 'index'])->name('index');

});
