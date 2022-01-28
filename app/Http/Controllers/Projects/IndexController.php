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
                projects.id,
                projects.name,
                (SELECT count(*) FROM issues
                WHERE issues.project_id = projects.id) AS issues
            FROM projects WHERE projects.user_id = ?",
            [$userId]
        );

        return response()->json($projects);
    }
}
