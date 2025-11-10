import React from "react";
import ProjectCard from "./ProjectCard";
import {Routes, Route, Link} from "react-router-dom";

function HomeProjects(){
    return(
        <div className="front-stack">
            <h2>My Projects</h2>
            <p className="fade">Here some of the <span className="phrase">projects</span> i've worked on.</p>
            <Link to='/Projects'><button className="button">Explore more</button></Link>
            <div className="project-space">
                <ProjectCard 
                    imageUrl="../../public/Thirith iac scanner.png" 
                    name="Tirith IaC Security Scanner"
                    description="This is the project my team and I designed for the Amazon University Engagement programme. 
                    It’s an IaC scanner that analyses your JSON for threats using a user-friendly interface instead of a 
                    complex CLI. Simply drag and drop your files, and everything will be automatically done."
                    stack={["Python", "React", "Postman", "Flask"]}
                    />

                <ProjectCard 
                    imageUrl="../../public/note app.png"
                    name="Note Web App"
                    description="A lightweight and responsive full-stack note application built with Spring Boot and Thymeleaf. 
                    It allows users to create, view, and manage personal notes through a clean web interface."
                    stack={["Java", "SpringBoot", "MySQl", "Postman"]}
                />
            </div>
        </div>
    );
}

export default HomeProjects;