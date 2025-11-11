import React from "react";
import ButtonSet from "./ButtonSet";

function HomeKeepInTouch(){
    return(
        <div className="front-stack">
            <h2 id="keep-in-touch-title">Keep In Touch.</h2>
            <p className="fade">I'm currently deeping my knowledge in FrontEnd development and Node.js
             <br /> 
             But my main driver of interest is still <span className="phrase">BackEnd development with Java and Spring Boot</span>.
             <br /><br />
             I'm always open to discussions! feel free to get in touch and talk about your interests or questions.</p>

            <ButtonSet></ButtonSet>
        </div>
    );
}

export default HomeKeepInTouch;