<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Friend;

class AddController extends Controller
{
    function __invoke(Request $request)
    {
        $friend = new Friend;
        $friend->user_id = $request->get('userId');
        $friend->friend_user_id = auth()->user()->id;
        $friend->status = 'requesting';
        $friend->save();

        return response()->json(['message' => 'added']);
    }
}
