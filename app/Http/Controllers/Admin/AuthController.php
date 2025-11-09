<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login_view()
    {
        return view('auth.admin.login');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('admin.login');
    }
}
