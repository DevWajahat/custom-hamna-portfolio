<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PasswordResetToken;
use App\Models\User;
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

    public function forgotPassword()
    {
        return view('auth.admin.forgot-password');
    }

    public function resetPassword($token)
    {
        $instance = PasswordResetToken::where('token',$token)->first();

        $user = User::where('email',$instance->email)->first();

        if(!$instance){

            return abort('404');
        }

        return view('auth.admin.reset-password',get_defined_vars());
    }
}
