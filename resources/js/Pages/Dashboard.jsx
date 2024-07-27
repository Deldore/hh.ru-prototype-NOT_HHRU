import { Head } from '@inertiajs/react';
import Logout from "@/Components/Logout.jsx";

export default function Dashboard({ auth }) {
    console.log(auth);
    return (
        <div>
            {(auth.user) ? (
                <div>
                    <h1>You're logged in</h1>
                    <Logout></Logout>
                </div>
            ) : (
                <h1>U r not logged in</h1>
            )}
        </div>
    );
}
