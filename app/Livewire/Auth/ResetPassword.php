<?php

namespace App\Livewire\Auth;

use App\Models\PasswordResetToken;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;

class ResetPassword extends Component
{
    public $useremail;

    public $token;

    public $password;

    public $password_confirmation;

    public function render()
    {
        return view('livewire.auth.reset-password');
    }

    // Livewire best practice: Define rules in a dedicated method
    protected function rules()
    {
        return [
            'password' => [
                'required',
                'string',
                Password::min(8)
                    ->max(16)
                    ->mixedCase()
                    ->letters()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
            ],
            'password_confirmation' => [
                'required',
                'same:password',
            ],
        ];
    }

    protected function messages()
    {
        return [
            'password_confirmation.required' => 'Please confirm your new password.',
            'password_confirmation.same' => 'The new password and confirmation password must match exactly.',

            'password.required' => 'A new password is required to proceed.',
            'password.min' => 'The password must be at least 8 characters long.',
            'password.max' => 'The password must not exceed 16 characters in length.',
            'password.mixed' => 'The password must contain a mix of uppercase and lowercase letters.',
            'password.letters' => 'The password must include at least one letter.',
            'password.numbers' => 'The password must include at least one number.',
            'password.symbols' => 'The password must include at least one symbol (e.g., !@#$%).',
            'password.uncompromised' => 'This password is too common or has been compromised in a data breach. Please choose a more unique password.',
            'password.string' => 'The password value is invalid.',
        ];
    }

    public function resetPassword()
    {
        $this->validate();

        $updatePassword = PasswordResetToken::where('email', $this->useremail)->where('token', $this->token)->first();

        if (! $updatePassword) {
            return back()->withInput();
        }

        User::where('email', $this->useremail)->update(['password' => Hash::make($this->password)]);

        PasswordResetToken::find($this->useremail)->delete();

        $this->redirectRoute('admin.index');
    }
}
