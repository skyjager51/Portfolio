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


            <ProjectDetailedElement
                img="../../public/url_shrtener.png"
                title="URL Shortener"
                stack={["Java", "SpringBoot", "MySQl", "Postman", "REST", "Js", "Html", "Hibernate", "Jpa"]}
                objective="To develop a service that takes a long, unwieldy URL and converts it into a significantly 
                 shorter, easy-to-share link, similar to commercial shortening services."

                role="Designed and implemented the complete application, from the core backend logic to the final user 
                 interface (personal project)."

                techHilights="Core Backend: Developed the application using Java and the Spring Boot framework, exposing
                 essential REST API endpoints for both URL submission and redirection. Database Integration: Successfully 
                 connected the application to a MySQL instance to persistently store the original URL and its 
                 corresponding short reference ID. Algorithm Implementation: Created and implemented the Base62 encoding 
                 algorithm to efficiently convert database IDs into a compact, alphanumeric short code. Frontend: Developed 
                 a functional frontend using HTML, CSS, and vanilla JavaScript to allow users to input URLs and asynchronously 
                 submit requests to the backend API."

                outcome="Provided critical, hands-on experience in building a complete application using Spring Boot, 
                 deepening my understanding of REST principles, data persistence via JPA/Hibernate, and establishing 
                 successful database connections."
                link="https://github.com/skyjager51/URL-Shortener"
            />


            <ProjectDetailedElement
                img="../../public/note app.png"
                title="Web Note Application"
                stack={["Java", "SpringBoot", "MySQl", "Postman", "REST", "Js", "Html", "Hibernate", "Jpa", "Spring Security"]}
                objective="To provide users with a fully functional, secure application where they can log in, create, view,
                 and manage their personal notes, ensuring data isolation between users."

                role="Designed the database schema, implemented all security features, and developed the business logic 
                for note creation and retrieval (personal project)."

                techHilights="Security Implementation: The most challenging component was successfully integrating Spring 
                 Security to protect all backend endpoints. This ensured that only authenticated users could access the 
                 application and, crucially, that users could only retrieve their own notes. Data Modeling: Gained a better 
                 understanding of complex bidirectional relationships and the One-to-One cardinality. 
                 Logic & Frontend: Developed controllers to manage user interaction and used 
                 plain JavaScript for frontend dynamics, enhancing proficiency outside of dedicated libraries/frameworks."

                outcome="Gained a comprehensive, practical understanding of user authentication and authorization using 
                 Spring Security. Significantly improved skills in database modeling and handling relationship interactions 
                 within the Spring/JPA ecosystem."
                link="https://github.com/skyjager51/Web-Note-Application"
            />


            <ProjectDetailedElement
                img="../../public/home_media_player.png"
                title="Home Media Player"
                stack={["Java", "SpringBoot", "Js", "Html", "CSS"]}
                objective="To create a lightweight, self-hosted application that allows users to stream MP4 video files
                 over their local home Wi-Fi network directly from a server."

                role="Designed and built the entire application structure, focusing purely on functional backend logic and 
                 secure data streaming."

                techHilights="Video Streaming: Engineered the backend using Java and Spring Boot to serve video content, 
                 implementing necessary HTTP headers and request handling to support robust streaming of MP4 files to a 
                 web client. Stateless Architecture: Designed the application with no database persistence, making it a 
                 stateless server focused exclusively on serving file resources and demonstrating an understanding of pure 
                 resource delivery. First Spring Boot Project: This project served as my fundamental introduction to the Spring 
                 Boot ecosystem, laying the groundwork for more complex projects like the URL Shortener and Web Note Application."

                outcome="Solidified foundational skills in Java web development, resource serving, and utilizing Spring 
                Boot to quickly deploy a fully functional server-side application. Provided essential learning on how to 
                manage media and large file resources over HTTP."
                link="https://github.com/skyjager51/Home-Media-Player"
            />


            <ProjectDetailedElement
                img="../../public/portfolio.png"
                title="PortFolio"
                stack={["React", "Js", "Html", "CSS"]}
                objective="To build a modern, responsive, and visually clean professional website to organize and present
                 project case studies, technical skills, and educational background in a single, accessible location."

                role="Designing the complete UI/UX and developing all frontend components from scratch."

                techHilights="Frontend Framework: Utilizing React to develop a component-based, demonstrating proficiency 
                 in modern JavaScript frameworks. Responsive Design: Implementing advanced CSS techniques to ensure the 
                 portfolio is fully responsive and provides a consistent user experience across all devices and screen sizes."

                outcome="Currently deepening knowledge of component lifecycle management, advanced React hooks, and building 
                user interfaces with a focus on accessibility and performance optimization."
                link="https://github.com/skyjager51/Portfolio"
            />


            <ProjectDetailedElement
                img="../../public/tetrafolio.png"
                title="PortFolio"
                stack={["Tailwind", "Js", "Html", "Python"]}
                objective="To build a portoflio website as an university project with 3 of my friends"

                role="Desinged the Flask routing and helped in completing the UI"

                techHilights="Frontend: better understanding of how the frontend works. Backend: better 
                 understanding of how routing for web applications works. (First coding project)"

                outcome="Strengthened the friendship between me and my friends and made me even more passionate
                 about the tech world! P.S. The project is on the GitHub of one of my friends; 
                 visit his other projects. He is a great dev!"
                link="https://github.com/terabvte/tetrafolio"
            />
        </div>
    );
}

export default Projects;