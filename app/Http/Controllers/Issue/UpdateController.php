<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Issue;

class UpdateController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $issue = Issue::find($id);
        $issue->name = $request->get('issueName');
        $issue->assignee_id = $request->get('assigneeId');
        $issue->status = $request->get('issueStatus');
        $issue->save();

        return response()->json(['message' => 'updated']);
    }
}
