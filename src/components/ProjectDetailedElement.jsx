import React from "react";
import { FaGripLinesVertical } from "react-icons/fa";

function ProjectDetailedElement(props){
    return(
        <div className="project-element">
            <div className="project-image-container">
                <img className="project-image" src={props.img} alt="" /> 
            </div>
            <div className="project-text">
                <h1>{props.title}</h1>

                <hr />

                <p><FaGripLinesVertical color="#a9a8ff"/> Objective</p>
                <p className="fade">{props.objective}</p>

                <p><FaGripLinesVertical color="#a9a8ff"/> Tech Stack</p> 
                <div className="stack-class-holder">
                        {props.stack.map(x => <p className="stackName fade">{x}</p>)}
                </div>

                <p><FaGripLinesVertical color="#a9a8ff"/> My Role</p>
                <p className="fade">{props.role}</p>

                <p><FaGripLinesVertical color="#a9a8ff"/> Technical Hilights</p>
                <p className="fade">{props.techHilights}</p>

                <p><FaGripLinesVertical color="#a9a8ff"/> Outcome</p> 
                <p className="fade">{props.outcome}</p>

                <p><FaGripLinesVertical color="#a9a8ff"/> Link</p> 
                <a target="_blank" className="project-link" href={props.link}>Visit the GitHub repo here</a>
            </div>

        </div>
    );
}

export default ProjectDetailedElement;