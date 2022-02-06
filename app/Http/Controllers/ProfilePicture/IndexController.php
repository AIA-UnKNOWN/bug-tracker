<?php

namespace App\Http\Controllers\ProfilePicture;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProfilePicture;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    function __invoke(Request $request, $userId)
    {
        $profilePicture = ProfilePicture::select('profile_picture')
            ->where('user_id', $userId)
            ->first();

        return response()->json($profilePicture);
    }
}
