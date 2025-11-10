import React from "react";
import CertificationCard from "./CertificationCard";

function HomeCertifications(){
    return(
        <div className="front-stack">
            <h2>Here my current cerificaitons</h2>
            <div>
                <CertificationCard 
                    imgUrl="../../public/aws_pratictioner.png"
                    name="AWS Cloud Practitioner"
                />
            </div>
        </div>
    );
}

export default HomeCertifications;