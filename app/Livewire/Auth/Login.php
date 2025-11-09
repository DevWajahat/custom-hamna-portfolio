<?php

namespace App\Livewire\Auth;

use Illuminate\Support\Facades\Auth as Authentication ;
use Livewire\Component;

class Login extends Component
{


    public $email;
    public $password;

    public function render()
    {
        return view('livewire.auth.login');
    }

   public function login()
   {
    $validated = $this->validate([
        'email'=> 'required|email|max:255',
        'password' => 'required|min:8|max:8'
    ]);


        if(Authentication::attempt($validated)) {

            return $this->redirectRoute('admin.index',navigate:true);

        }
        else {

            $this->addError('email', 'The email or password is incorrect.');
        
        }
    }
}
