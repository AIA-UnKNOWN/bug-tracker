<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AssigneesController extends Controller
{
    function __invoke(Request $request, $issueId)
    {
        $assigneeIds = DB::select(
            "SELECT
                users.id,
                users.first_name,
                users.last_name
            FROM issues
            JOIN users ON users.id = issues.assignee_id
            WHERE issues.id = ?",
            [$issueId]
        );
        return response()->json($assigneeIds);
    }
}
