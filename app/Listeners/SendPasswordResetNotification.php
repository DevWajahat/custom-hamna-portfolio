<?php

namespace App\Listeners;

use App\Events\PasswordResetRequested;
use App\Mail\PasswordReset;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendPasswordResetNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PasswordResetRequested $event): void
    {
        // dd($event,$event->record);

        Mail::to($event->record->email)->send(new PasswordReset($event->record));
        session()->flash('message', 'Email Send Successfully.');
    }
}
