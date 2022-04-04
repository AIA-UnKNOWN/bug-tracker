<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Project;

class IndexController extends Controller
{
    function __invoke(Request $request)
    {
        $userId = $request->user()->id;
        $projects = DB::select(
            "SELECT
                p.id,
                p.name,
                (SELECT count(*) FROM issues i
                WHERE (i.project_id = p.id AND i.status = 'open')) AS issues
            FROM projects p
            WHERE p.user_id = ?
            OR EXISTS (
                SELECT * FROM issues i
                WHERE (i.project_id = p.id AND i.status = 'open')
                AND EXISTS (
                    SELECT * FROM issue_assignees ia
                    WHERE ia.issue_id = i.id
                    AND ia.user_id = ?
                )
            )",
            [
                $userId,
                $userId,
            ]
        );

        return response()->json($projects);
    }
}
