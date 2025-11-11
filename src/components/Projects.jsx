import React from "react";
import ProjectDetailedElement from "./ProjectDetailedElement";

function Projects(){
    return(
        <div className="front-stack">
            <ProjectDetailedElement
                img="../../public/Thirith iac scanner.png"
                title="Tirith IaC Security Scanner"
                stack={["Python", "React", "Postman", "Flask", "REST"]}
                objective="To create an automated Security Scanner for JSON-formatted Infrastructure-as-Code (IaC)
                 templates (specifically AWS CloudFormation) that provides users with a clean, graphical interface to
                 visualize potential security vulnerabilities and misconfigurations."

                role="As the dedicated Backend Developer, I was responsible for the entire server-side logic and API design. 
                 I developed the core scanning engine in Python using the Flask framework to handle incoming JSON templates. 
                 I designed and implemented the logic for both Quick Scan (basic vulnerability checks) and Deep Scan 
                 (comprehensive, layered security analysis)."

                techHilights="API Design: Engineered a robust RESTful API for seamless communication, defining all 
                 endpoints and parameters required to transmit the scanned security issues to the React/Vue frontend. 
                 Logic Implementation: Successfully created the algorithms to parse complex JSON structures and map 
                 vulnerabilities to specific code lines. Challenge Overcome: Navigated challenges with poorly documented 
                 external libraries, requiring extensive troubleshooting and reverse-engineering to ensure reliable and 
                 accurate threat reporting."

                outcome="Reinforced principles of team collaboration and version control within a professional development 
                 lifecycle. Gained a deeper understanding of practical API design principles and effective strategies for 
                 integrating with external, undocumented, or complex third-party tools."
                link="https://github.com/skyjager51/Tirith-IaC-Security-Scanner"
            />
        </div>
    );
}

export default Projects;