import React from 'react';

const Logout = () => {
    const logout = (e) => {
        e.preventDefault();

        axios.post(route('logout'))
            .then(() => {
                window.location.href = '/'
            })
            .catch()
    }

    return (
        <a onClick={logout} href="#">
            Выйти из аккаунта
        </a>
    );
};

export default Logout;
