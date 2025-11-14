<?php

namespace App\Livewire\Auth;

use     App\Events\PasswordResetRequested;
use App\Models\PasswordResetToken;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Livewire\Component;

class ForgotPassword extends Component
{
    public $email = '';

    public function render()
    {
        return view('livewire.auth.forgot-password');
    }

    public function sendResetLink()
    {

        $validated = $this->validate([
            'email' => 'required|email|exists:users,email|string|max:255',
        ]);

        $token = Str::random(64);

        $passwordInstance = PasswordResetToken::updateOrCreate(
            ['email' => $validated['email']],
            [
                'email' => $validated['email'],
                'token' => $token,
                'created_at' => Carbon::now(),
            ]);


            event(new PasswordResetRequested($passwordInstance));
            
            // dd($passwordInstance);
    }
}
