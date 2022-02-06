<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    function __invoke(Request $request)
    {
        $results = DB::select(
            "SELECT
                u.id,
                CONCAT(u.first_name, ' ', u.last_name) as name,
                pp.profile_picture,
                CASE
                    WHEN EXISTS (
                        SELECT
                            *
                        FROM friends f
                        WHERE f.user_id = ?
                        AND f.friend_user_id = u.id
                    ) THEN 1
                    ELSE 0
                END as is_friend
            FROM users u
            JOIN profile_pictures pp ON pp.user_id = u.id
            WHERE CONCAT(u.first_name, ' ', u.last_name) LIKE '%" .$request->get('developer'). "%' " .
            "AND u.id != ?",
            [
                auth()->user()->id,
                auth()->user()->id
            ]
        );

        return response()->json($results);
    }
}
