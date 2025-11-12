import React from "react";
import {Routes, Route, Link} from "react-router-dom";

function Header(props){

    const [name, setName] = React.useState("{~ %}");

    function changeName(event){
        setName(event.target.dataset.name)
    }

    function toParent(){
        props.sendFunc()
    }

    return (
        <div>
            <div className="header">
                <h1 onClick={toParent}>{name}</h1>
                <ul className="routes">
                    <Link to='/Home'><li onClick={changeName} data-name="{~ %}">Home</li></Link>
                    <Link to='/Projects'><li onClick={changeName} data-name="{~/projects %}">Projects</li></Link>
                    <Link to='/Contact'><li onClick={changeName} data-name="{~/contact %}">Contact</li></Link>
                </ul>
            </div>

            <hr />
        </div>
    );
}

export default Header;