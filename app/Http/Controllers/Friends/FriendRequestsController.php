<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FriendRequestsController extends Controller
{
    function __invoke(Request $request)
    {
        $friendRequests = DB::select(
            "SELECT 
                friends.id,
                CONCAT(users.first_name, ' ', users.last_name) as name,
                profile_pictures.profile_picture
            FROM friends
            JOIN users ON users.id = friends.friend_user_id
            JOIN profile_pictures ON profile_pictures.user_id = friends.friend_user_id
            WHERE friends.user_id = ?
            AND friends.status = 'requesting'",
            [$request->user()->id]
        );

        return response()->json($friendRequests);
    }
}
