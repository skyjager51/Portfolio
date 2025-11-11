import React from "react";

function ProjectDetailedElement(props){
    return(
        <div className="project-element">
            <div className="project-image">
                <img src={props.img} alt="" />
            </div>
            <h1>{props.title}</h1>

            <p>{props.objective}</p>

            <div className="stack-class-holder">
                    {props.stack.map(x => <p className="stackName fade">{x}</p>)}
            </div>

            <p>{props.role}</p>

            <p>{props.techHilights}</p>

            <p>{props.outcome}</p>

            <a href={props.link}>Visit the GitHub repo here</a>

        </div>
    );
}

export default ProjectDetailedElement;