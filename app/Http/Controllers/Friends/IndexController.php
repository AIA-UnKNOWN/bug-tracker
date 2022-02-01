<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    function __invoke(Request $request)
    {
        $friends = DB::select(
            "SELECT 
                friends.id,
                CONCAT(users.first_name, ' ', users.last_name) AS name
            FROM friends
            JOIN users ON users.id = friends.friend_user_id
            WHERE friends.user_id = ?
            AND friends.status = 'friend'",
            [$request->user()->id]
        );

        return response()->json($friends);
    }
}
