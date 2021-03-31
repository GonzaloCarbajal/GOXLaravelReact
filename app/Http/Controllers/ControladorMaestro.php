<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ControladorMaestro extends Controller{
    public function VistaHome() {
        return view('./Index/index');
    }
}
