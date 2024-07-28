<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Resumes;
use App\Models\Skills;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ResumeController extends Controller
{
    public function create(Request $request)
    {
        return Inertia::render('Resume/Create', [
            'status' => session('status'),
            'all_skills' => Skills::all(),
        ]);
    }
    public function store(Request $request)
    {
        $resume = Resumes::firstOrCreate([
            'skills' => json_encode($request['skills']),
            'min_salary' => $request['min_salary'],
            'max_salary' => $request['max_salary'],
        ], ['creator_id' => $request['creator_id']]);
        Auth::user()->update(['resume_id' => $resume->id]);
    }
    public function edit(Request $request): Response
    {
        return Inertia::render('Resume/Edit', [
            'status' => session('status'),
            'resume' => Resumes::where('creator_id', Auth::user()->id)->first(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {
        Resumes::where('creator_id', Auth::user()->id)->first()->update([
            'min_salary' => $request['min_salary'],
            'max_salary' => $request['max_salary'],
        ]);
        return print_r("Resume updated successfully");
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
