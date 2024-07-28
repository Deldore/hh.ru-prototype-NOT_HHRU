import { Head } from '@inertiajs/react';
import Logout from "@/Components/Logout.jsx";
import Header from "@/Components/Header.jsx";

export default function Dashboard({ auth }) {
    return (
        <>
            <Header auth={auth}></Header>
            {(auth.user) ? (
                <div>
                    <h1>You're logged in</h1>
                    <Logout></Logout>
                </div>
            ) : (
                <h1>U r not logged in</h1>
            )}
        </>
    );
}
