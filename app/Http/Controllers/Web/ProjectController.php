<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index()
    {
        return view('screens.web.projects.index');
    }

    public function detail()
    {
        return view('screens.web.projects.detail');
    }
}
