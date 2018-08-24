<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Welcome extends Mailable
{
    use Queueable, SerializesModels;

    public $password = null; 

    public function __construct($password)
    {
        $this->password = $password;
    }

    public function build()
    {

        return $this->from("wellcome@clinic.com")
                    ->view('mail.welcome');
    }
}
