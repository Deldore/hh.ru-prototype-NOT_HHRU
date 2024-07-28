import { Head, Link, useForm } from '@inertiajs/react';
import {useState} from "react";
import "@/Styles/login.css"
import Loader from "@/Components/Loader.jsx";
import BackButton from "@/Components/BackButton.jsx";

export default function Login({ status, canResetPassword }) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: null,
        password: null,
    })

    const [isLoaded, setIsLoaded] = useState(true);

    const login = (e) => {
        e.preventDefault();

        axios.post('/login', {
            headers: {
              Accept: 'aplication/json',
            },
            ...formData,
        })
            .then(response => {
                window.location.href = '/dashboard';
                setIsLoaded(true);
            })
            .catch(e => {
                setIsLoaded(true);
                setErrors(e.response.data.errors)
            });
        setIsLoaded(false)
    }

    return (
        <>
            <Head title="Авторизация" />
            <div>
                {isLoaded ? (
                    <div>
                        <form>
                            <div style={{height: "auto", justifyContent: "start"}}>
                                <BackButton />
                                <h1>Авторизация</h1>
                            </div>
                            <label htmlFor="email">Почта:</label>
                            <input type="text" name="email"
                                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                                   value={formData.email}/>
                            <span>{errors.email}</span>
                            <label htmlFor="email">Пароль:</label>
                            <input type="password" name="password"
                                   onChange={(e) => setFormData({...formData, password: e.target.value})}
                                   value={formData.password}/>
                            <span>{errors.password}</span>
                            <button onClick={login}>Войти</button>
                            <Link style={{textAlign: "center"}} href={route('register')}>Еще не зарегистрированы?</Link>
                        </form>
                    </div>
                ) : (
                    <Loader text={"Авторизация..."}></Loader>
                )}
            </div>
        </>
    );
}
