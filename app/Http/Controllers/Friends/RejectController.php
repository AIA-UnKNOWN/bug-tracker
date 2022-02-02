<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Friend;

class RejectController extends Controller
{
    function __invoke(Request $request, $friendId)
    {
        $friend = Friend::find($friendId);
        $friend->delete();

        return response()->json(['message' => 'rejected']);
    }
}
