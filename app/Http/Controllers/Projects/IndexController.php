<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class IndexController extends Controller
{
    function __invoke(Request $request)
    {
        $userId = $request->user()->id;
        $projects = Project::select('*')
            ->where('user_id', $userId)
            ->get();

        return response()->json($projects);
    }
}
