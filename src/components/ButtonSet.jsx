import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function ButtonSet(){
    return(
        <div className="button-container">
            <a target="_blank" href="https://www.linkedin.com/in/lorenzo-faccio/"><button className="button"> <FaLinkedin color="#a9a8ff" size={15}/> LinkedIn</button></a>
            <a target="_blank" href="https://github.com/skyjager51"><button className="button"><IoLogoGithub color="#a9a8ff" size={15}/> GitHub</button></a>
            <a href="mailto:u9069514636@gmail.com"><button className="button"><IoIosMail color="#a9a8ff" size={15}/> Mail</button></a>
        </div>
    );
}

export default ButtonSet;