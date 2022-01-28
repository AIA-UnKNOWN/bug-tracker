<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class UpdateController extends Controller
{
    function __invoke(Request $request)
    {
        $userId = $request->user()->id;
        $project = new Project;
        $project->name = $request->get('projectName');
        $project->user_id = $userId;
        $project->save();

        return response()->json(['message' => 'project created']);
    }
}
