<?php

namespace App\Http\Controllers\Issue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Issue;

class IndexController extends Controller
{
    function __invoke(Request $request, $issueId)
    {
        $issue = Issue::find($issueId);
        
        return response()->json($issue);
    }
}
