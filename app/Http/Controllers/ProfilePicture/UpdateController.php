<?php

namespace App\Http\Controllers\ProfilePicture;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProfilePicture;

class UpdateController extends Controller
{
    function __invoke(Request $request)
    {
        $profilePicture = ProfilePicture::updateOrCreate(
            ['user_id' => $request->get('userId')],
            ['profile_picture' => $request->get('profilePicture')]
        );

        return response()->json([
            'message' => 'saved'
        ]);
    }
}
