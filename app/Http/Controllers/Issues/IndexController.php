<?php

namespace App\Http\Controllers\Issues;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Issue;

class IndexController extends Controller
{
    function __invoke(Request $request, $projectId)
    {
        $issues = Issue::where('project_id', $projectId)
            ->latest()
            ->get();

        return response()->json($issues);
    }
}
