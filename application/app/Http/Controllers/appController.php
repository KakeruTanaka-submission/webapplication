<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class appController extends Controller
{
    public function before(){
        return view('app.app-1');
    }
    
    public function post(Request $request){
        $abl = $request->all();//チェックボックスname
        return view('app.app-2',$abl);
    }
    
}
