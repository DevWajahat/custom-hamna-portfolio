<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response; // Use the Auth facade for clarity

class CheckAdminAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isAuthenticatedAdmin = Auth::check() && Auth::user()->role === 'admin';

        if ($isAuthenticatedAdmin) {
            if ($request->routeIs('admin.login')) {
                return redirect()->route('admin.index');
            }

            return $next($request);
        }

        if (! $request->routeIs('admin.login')) {
            return redirect()->route('admin.login');
        }

        return $next($request);
    }
}
