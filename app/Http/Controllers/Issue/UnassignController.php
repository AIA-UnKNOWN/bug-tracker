<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UnassignController extends Controller
{
    function __invoke(Request $request, $issueId, $userId)
    {
        $assignee = DB::delete(
            "DELETE FROM issue_assignees ia
            WHERE ia.issue_id = ?
            AND ia.user_id = ?",
            [$issueId, $userId]
        );

        return response()->json(['message' => 'unassigned']);
    }
}
