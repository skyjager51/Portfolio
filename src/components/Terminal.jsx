import React from "react";

function Terminal(props){

    const description = "Thank you for having visited my Portfolio website! Don't hesitate to contact me for any queston or proposal!";
    const [descript, setDescript] = React.useState("");
    const [write, setWrite] = React.useState(true);

    function closeTerminalFunc(){
        props.closeTerminal()
    }

    function createAnimaiton(){
        if(write){
            for(let i = 0; i < description.length; i++){
                setTimeout(() => {setDescript(x => x + description.charAt(i))}, 35 * i);
            }
            setWrite(false);
        }
    }

    return(
        <div className="terminal-container" onMouseOver={createAnimaiton}>
            <button className="terminal-button" onClick={closeTerminalFunc}>x</button>
            <hr />
            <p>lorenzofaccio@portfolio ~ /project  nano Thank_You.txt </p>
            <p className="nano-ui">UW PICO 5.09</p>
            <p>{descript}</p>
        </div>
    );
}

export default Terminal;