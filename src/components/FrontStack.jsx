import React from "react";
import ButtonSet from "./ButtonSet";

function FrontStack(){
    return(
        <div className="front-stack">
            <h1> 
                <span className="phrase">Hey there!, I'm-</span> <br />
                <span className="name">Lorenzo Faccio.</span>
            </h1>

            <h2 className="text">A Developer, <span className="fade">who loves building solutions and turinig idea into reality.</span></h2>

            <h3 className="passions text">Passionate about Backend, Cloud technologies, and Security</h3>

            <ButtonSet></ButtonSet>

        </div>
    );
}

export default FrontStack;