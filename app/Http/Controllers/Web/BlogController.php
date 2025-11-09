<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    public function index()
    {
        return view('screens.web.blog.index');
    }

    public function detail()
    {
        return view('screens.web.blog.detail');
    }
}
