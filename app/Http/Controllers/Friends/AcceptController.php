<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Friend;

class AcceptController extends Controller
{
    function __invoke(Request $request, $friendId)
    {
        /*
            Puts a record so my friend could see me as a friend when he/she accepted me
        */
        $friendOfMine = Friend::find($friendId);
        $friendOfMine->status = 'friend';
        $friendOfMine->save();

        /*
            Puts a record for me so that I can see him/her as a friend if he/she accepts me
        */
        $MeAsFriend = new Friend;
        $MeAsFriend->user_id = $friendOfMine->friend_user_id;
        $MeAsFriend->friend_user_id = $friendOfMine->user_id;
        $MeAsFriend->status = 'friend';
        $MeAsFriend->save();

        return response()->json(['message' => 'accepted']);
    }
}
