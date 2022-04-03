<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $affected = DB::table('projects')
            ->where('id', $id)
            ->update(['name' => $request->get('name')]);
        
        return response()->json($affected);
    }
}
