import React from 'react';

const BackButton = () => {
    const refer = () => {
        window.location.href = '/';
    }
    return (
        <div onClick={refer} style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            height: '35px',
            width: '35px',
            borderRadius: '50%',
            fontSize: '30px',
            cursor: "pointer",
        }}
            className="hover:bg-gray-100 transition-all">
            ←
        </div>
    );
};

export default BackButton;
