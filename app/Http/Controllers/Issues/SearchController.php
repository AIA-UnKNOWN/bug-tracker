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
                issues.*
            FROM issues
            JOIN users ON users.id = issues.assignee_id
            WHERE issues.project_id = ?
                AND issues.name LIKE '%". $request->get('issueName') ."%' ".
                "AND issues.status = '". $request->get('issueStatus') ."' ".
                "AND CONCAT(users.first_name, \" \", users.last_name) LIKE '%". $request->get('developer') ."%'",
            [$projectId]
        );

        return response()->json($results);
    }
}
