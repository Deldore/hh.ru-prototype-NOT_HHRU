import React from 'react';
import "@/Styles/loader.css";

const Loader = (props) => {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            background: "#99999955",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center"
        }}>
            <h1 style={{}}>{props.text}</h1>
            <div className={"spinner"}>

            </div>
        </div>
    );
};

export default Loader;
