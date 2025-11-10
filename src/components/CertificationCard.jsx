import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function CertificationCard(props){
    return(
        <div className="cert-card">
            <p>{props.name}</p>
            <a className="cert-link" target="_blank" href={props.link}><FaExternalLinkAlt/></a>
            <div className="img-cert-container">
                {props.img}
            </div>
        </div>
    );
}

export default CertificationCard;