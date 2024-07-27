import { Head, Link, useForm } from '@inertiajs/react';
import "@/Styles/login.css";
import {useState, useEffect} from "react";
import Loader from "@/Components/Loader.jsx";

export default function Register() {
    const [formData, setFormData] = useState({

    })

    const [isLoaded, setIsLoaded] = useState(true)

    const [errors, setErrors] = useState({
        name: null,
        email: null,
        password: null,
        password_confirmation: null
    })

    const register = (e) => {
        e.preventDefault()
        axios.post('/register', {
            ...formData,
        })
            .then(() => {
                window.location.href = '/dashboard';
                setIsLoaded(true)
            })
            .catch(e => {
                setIsLoaded(true)
                setErrors(e.response.data.errors);
            })
        setIsLoaded(false)
    }
    useEffect(() => {
        if (errors.password && errors.password.length === 2) {
            setErrors({...errors, password: errors.password[1], password_confirmation: errors.password[0]})
        }
    }, [errors]);

    return (
        <>
            <Head title="Регистрация" />
            <div>
                {isLoaded ? (
                    <div>
                        <form>
                            <h1>Регистрация</h1>
                            <label htmlFor="name">Введите Ваше имя:</label>
                            <input type="text" name='name'
                                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                                   value={formData.name}/><br/>
                            <span>{errors.name}</span>
                            <label htmlFor="email">Введите Вашу почту:</label>
                            <input type="text" name='email'
                                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                                   value={formData.email}/><br/>
                            <span>{errors.email}</span>
                            <label htmlFor="password">Придумайте пароль:</label>
                            <input type="password" name='password'
                                   onChange={(e) => setFormData({...formData, password: e.target.value})}
                                   value={formData.password}/><br/>
                            <span>{errors.password}</span>
                            <label htmlFor="password_confirmation">Повторите свой пароль:</label>
                            <input type="password" name='password_confirmation'
                                   onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}
                                   value={formData.password_confirmation}/><br/>
                            <span>{errors.password_confirmation}</span>
                            <button onClick={register}>Зарегистрироваться</button>
                            <Link style={{textAlign: "center"}} href={route('login')}>Уже зарегистрированы?</Link>
                        </form>
                    </div>
                ) : (
                    <Loader text="Регистрация..."></Loader>
                )}
            </div>
        </>
    );
}
