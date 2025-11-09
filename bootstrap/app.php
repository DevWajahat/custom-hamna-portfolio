<?php

use App\Http\Middleware\CheckAdminAuthentication;
use App\Http\Middleware\PreventBackHistory;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            Route::middleware(['web'])
                ->prefix('admin')
                ->name('admin.')
                ->group(base_path('routes/admin.php'));
        }

    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
        $middleware->alias([
            'CheckAdminAuth' => CheckAdminAuthentication::class,
            'preventBack' => PreventBackHistory::class,
            // 'AssignmentCheckAcceptance' =>  AssignmentAccept::class,
        ]);

        $middleware->redirectUsersTo(function (Request $request) {
            $user = $request->user();

            return route('admin.login');
        });
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
