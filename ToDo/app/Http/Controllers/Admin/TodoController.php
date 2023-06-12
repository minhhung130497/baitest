<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function create()
    {
        return view('admin.todo.add',[
            'title' => 'T O D O'
        ]);

    }
}
