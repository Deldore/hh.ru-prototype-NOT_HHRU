import React from 'react';
import Header from "@/Components/Header.jsx";
import {Head, Link} from "@inertiajs/react";

const Edit = ({ auth }) => {
    return (
        <>
            <Head title={auth.user.name} />
            <Header auth={auth}></Header>
            {!auth.user.resume_id ? (
                <Link href={route('resume.create')} as="button">Создать резюме</Link>
            ) : (
                <Link href={route('resume.edit')}>Редактировать своё резюме</Link>
            )}
        </>
    );
};

export default Edit;
