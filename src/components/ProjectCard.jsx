import React from "react";

function ProjectCard(props){
    return(
        <div className="project-card">
            <img className="image-p" src={props.imageUrl} alt="project image" />
            <div className="internal-projectcard-text">
                <h2>{props.name}</h2>
                <hr />
                <p className="fade">{props.description}</p>
                <div className="classHolder">
                    {props.stack.map(x => <p className="stackName fade">{x}</p>)}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;