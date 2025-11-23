import React from "react";
import CertificationCard from "./CertificationCard";
import { FaAws, FaJava, FaPython, FaNode } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

function HomeCertifications(){
    return(
        <div className="front-stack">
            <h2>Here my current cerificaitons</h2>
            <div className="cert-stack">
                <CertificationCard 
                    img= <FaAws size={90} color="#a9a8ff"/>
                    name="AWS CCP"
                    link="https://www.credly.com/badges/5180104c-7364-4ef1-ac00-6717cb7590c1/public_url"
                />

                <CertificationCard 
                    img= <FaJava size={90} color="#a9a8ff"/>
                    name="Java"
                    link="https://www.udemy.com/certificate/UC-02aaef5a-3427-4a0b-aeb9-08127f4d3bfd/"
                />

                <CertificationCard 
                    img= <BiLogoSpringBoot size={90} color="#a9a8ff"/>
                    name="Spring Boot"
                    link="https://www.udemy.com/certificate/UC-01946ede-8e83-4e9c-a708-211d79520b8c/"
                />

                <CertificationCard 
                    img= <FaPython size={90} color="#a9a8ff"/>
                    name="Python"
                    link="https://www.udemy.com/certificate/UC-6dc6df64-f52b-49d4-8319-8cbccbbb88f5/"
                />

                <CertificationCard
                    img= <FaNode size={90} color="#a9a8ff"/>
                    name="Node & React"
                    link="https://www.udemy.com/certificate/UC-98f1c831-959d-4e06-8095-1bebdaeea5aa/"
                />
            </div>
        </div>
    );
}

export default HomeCertifications;