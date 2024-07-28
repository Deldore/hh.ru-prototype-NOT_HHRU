import React, {useEffect, useState} from 'react';
import {Link, Head, router} from '@inertiajs/react';
import Logout from "@/Components/Logout.jsx";
import logo from '@/../images/logo.png';
import '@/Styles/style.css'
import '@/Styles/header/header.css'
import Dropdown from '@/Components/Dropdown.jsx'
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

const Header = (props) => {
    return (
        <header>
            <div>
                <img src={logo}/>
                <h1 className={"lg:block"}>NOT HH.RU</h1>
            </div>
            <nav>
                <div className="userInfo">
                    {props.auth.user ? (
                        <Authenticated user={props.auth.user}></Authenticated>
                    ) : (
                        <div>
                            <Link href={route('login')}>Авторизация</Link>
                            <Link href={route('register')}>Регистрация</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
