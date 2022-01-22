<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Hash;

class AuthController extends Controller
{
    function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $fields = $request->only('email', 'password');
        if (! Auth::attempt($fields)) {
            return response()->json([
                'message' => 'failed'
            ]);
        }

        $user = User::where('email', $request->get('email'))->first();
        $token = $user->createToken('auth-token')->plainTextToken;
        return response()->json([
            'message' => 'success',
            'user' => $user,
            'token' => $token
        ]);
    }

    function register(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed'
        ]);

        $user = new User;
        $user->first_name = $request->get('firstname');
        $user->last_name = $request->get('lastname');
        $user->email = $request->get('email');
        $user->password = Hash::make($request->get('password'));
        $user->save();

        return response()->json([
            'message' => 'registered'
        ]);
    }

    function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'logged out'
        ]);
    }
}
