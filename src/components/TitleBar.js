import React from "react";

const TitleBar = (props) => {
    return (
        <div className="title-bar justify-content-center" style={{ alignItems: "center", textAlign: "center" }}>
            <div
                style={{
                    alignItems: "center",
                    textAlign: "center",
                    margin: 0,
                    padding: "1em 2em",
                    borderRadius: "20px",
                    background: "#808080",
                    display: "inline-block",
                }}
            >
                <h1>{props.title}</h1>
            </div>
        </div>
    );
};

export default TitleBar;
