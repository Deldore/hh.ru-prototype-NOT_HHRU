<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'min:8', 'max:32', 'confirmed'],
        ],
            [
                'email.required' => 'Поле "Почта" не должно быть пустым',
                'email.max' => 'Почта не должно превышать длину 255 символов',
                'email.email' => 'Почта должна быть настоящей :)',
                'password.required' => 'Поле "Пароль" не должно быть пустым',
                'password.min' => 'Пароль должен быть от 8 до 32х символов',
                'password.max' => 'Пароль должен быть от 8 до 32х символов',
            ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
