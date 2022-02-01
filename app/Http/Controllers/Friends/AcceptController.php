<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Friend;

class AcceptController extends Controller
{
    function __invoke(Request $request, $friendId)
    {
        $friend = Friend::find($friendId);
        $friend->status = 'friend';
        $friend->save();

        return response()->json(['message' => 'accepted']);
    }
}
