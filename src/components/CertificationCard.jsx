import React from "react";

function CertificationCard(props){
    return(
        <div className="cert-card">
            <p>{props.name}</p>
            <hr />
            <div>
                <img className="cert-image" src={props.imgUrl} alt="certification image" />
            </div>
        </div>
    );
}

export default CertificationCard;