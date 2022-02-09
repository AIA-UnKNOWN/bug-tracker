<?php

namespace App\Http\Controllers\Issues;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    function __invoke(Request $request, $projectId)
    {
        $results = DB::select(
            "SELECT
                i.*
            FROM issues i
            WHERE i.project_id = ?
            AND i.name LIKE ?
            AND EXISTS (
                SELECT * FROM issue_assignees ia
                JOIN users u ON u.id = ia.user_id
                WHERE ia.issue_id = i.id
                AND CONCAT(u.first_name, ' ', u.last_name) LIKE ?
            )
            AND i.status = ?",
            [
                $projectId,
                "%{$request->get('issueName')}%",
                "%{$request->get('developer')}%",
                $request->get('issueStatus')
            ]
        );

        return response()->json($results);
    }
}
 