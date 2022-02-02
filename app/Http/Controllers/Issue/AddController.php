<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Issue;

class AddController extends Controller
{
    function __invoke(Request $request, $projectId)
    {
        $issue = new Issue;
        $issue->name = $request->get('issueName');
        $issue->status = 'open';
        $issue->project_id = $projectId;
        $issue->save();

        return response()->json(['message' => 'added']);
    }
}
