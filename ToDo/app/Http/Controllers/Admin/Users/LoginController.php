<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function Spatie\Ignition\ErrorPage\title;

class LoginController extends Controller
{
    public function index()
    {
        return view('admin.users.login',[
            'title' => 'Đăng Nhập Hệ Thống'
        ]);
    }

    public function todo(Request $request)
    {
        $this->validate($request,[
            'email' => 'required|email:filter',
            'password' => 'required'
        ]);
        if(Auth::attempt([
            'email' =>$request ->input('email'),
            'password' => $request -> input('password')
       ], $request->input('remember'))) {

            return redirect()-> route('admin');
       }
       Session::flash('error','Email hoặc password ko đúng');
       return redirect() -> back();
    }

}
