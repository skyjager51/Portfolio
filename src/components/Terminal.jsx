import React from "react";

function Terminal(props){

    const description = "Thank you for having visited my Portfolio website! Don't hesitate to contact me for any queston or proposal!";
    const [descript, setDescript] = React.useState("");

    function closeTerminalFunc(){
        props.closeTerminal()
    }

    function createAnimaiton(){
        for(let i = 0; i < description.length; i++){
            setTimeout(() => {setDescript(x => x + description.charAt(i))}, 50 * i);
        }
    }

    return(
        <div className="terminal-container" onClick={createAnimaiton}>
            <button onClick={closeTerminalFunc}>x</button>
            <p>lorenzofaccio@portfolio ~ /project  nano Thank_You.txt </p>
            <p>{descript}</p>
        </div>
    );
}

export default Terminal;