<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', 'min:8', 'max:32'],
        ],
        [
            'name.required' => 'Поле "Имя" не должно быть пустым',
            'name.max' => 'Имя не должно превышать длину 255 символов',
            'email.required' => 'Поле "Почта" не должно быть пустым',
            'email.max' => 'Почта не должно превышать длину 255 символов',
            'email.email' => 'Почта должна быть настоящей :)',
            'password.required' => 'Поле "Пароль" не должно быть пустым',
            'password.confirmed' => 'Пароли не совпадают',
            'password.min' => 'Пароль должен быть от 8 до 32х символов',
            'password.max' => 'Пароль должен быть от 8 до 32х символов',
        ]
    );

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
