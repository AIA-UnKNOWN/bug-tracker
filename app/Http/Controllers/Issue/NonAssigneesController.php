<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NonAssigneesController extends Controller
{
    function __invoke(Request $request, $issueId)
    {
        $nonAssignees = DB::select(
            "SELECT
                u.id,
                CONCAT(u.first_name, ' ', u.last_name) AS name
            FROM users u
            JOIN issues i ON i.id = ?
            JOIN friends f ON f.friend_user_id = u.id
            WHERE NOT EXISTS (
                SELECT
                    *
                FROM issue_assignees ia
                WHERE ia.user_id = u.id
            ) AND u.id != ?",
            [$issueId, $request->user()->id]
        );

        return response()->json($nonAssignees);
    }
}
