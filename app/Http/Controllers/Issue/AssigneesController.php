<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AssigneesController extends Controller
{
    function __invoke(Request $request, $issueId)
    {
        $assignees = DB::select(
            "SELECT
                u.id,
                CONCAT(u.first_name, ' ', u.last_name) AS name
            FROM issue_assignees ia
                JOIN users u ON u.id = ia.user_id
            WHERE ia.issue_id = ?",
            [$issueId]
        );
        return response()->json($assignees);
    }
}
