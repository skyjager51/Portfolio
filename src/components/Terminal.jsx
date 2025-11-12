import React from "react";

function Terminal(props){

    function closeTerminalFunc(){
        props.closeTerminal()
    }

    return(
        <div className="terminal-container">
            <button onClick={closeTerminalFunc}>x</button>
            <h1>This is a Terminal page</h1>
        </div>
    );
}

export default Terminal;