import React from "react";

function About(){
    return(
        <div className="front-stack">
            <h2>About Me</h2>
            <div className="about">
                <p className="fade info">
                    Hello! My name is Lorenzo Faccio and I’m a computer science student. I’ve always been
                    fascinated by both the hardware and software aspects of technology. <br /><br />

                    I always liked technology and how it manages to solve everyday problems in an elegant and comprehensive
                    manner, till I started exploring code myself. I do programming in multiple languages and technologies, and 
                    I’m always open to new challenges. I do especially like the process of defining a problem and decomposing it 
                    into multiple pieces to find a solution. Currently, I’m focused on Web & Backend development, but I’ve also 
                    collected experience in Frontend to have a 360° view and a more comprehensive idea of what surrounds me.
                </p>

                <img className="image" src="../../public/Immagine_lorenzo.jpeg" alt="image of lorenzp" />
            </div>
            
        </div>
    );
}

export default About;