<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    function __invoke(Request $request, $projectId)
    {
        $project = DB::select(
            "SELECT
                projects.*,
                (SELECT count(*) FROM issues WHERE issues.project_id = projects.id) AS issues_count
            FROM projects
            WHERE projects.id = ?",
            [$projectId]
        );
        
        return response()->json($project);
    }
}
