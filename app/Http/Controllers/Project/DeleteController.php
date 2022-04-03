<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeleteController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $deleted = DB::table('projects')
            ->where('id', $id)
            ->delete();
        return response()->json($deleted);
    }
}
