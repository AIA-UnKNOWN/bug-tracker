<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\IssueAssignee;

class AssignController extends Controller
{
    function __invoke(Request $request, $issueId)
    {
        $assignee = new IssueAssignee;
        $assignee->issue_id = $issueId;
        $assignee->user_id = $request->get('userId');
        $assignee->save();

        return response()->json(['message' => 'assigned']);
    }
}
