import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Header from './Header';
import Projects from './Projects';
import Contact from "./Contact"
import Home from './Home';
import Terminal from "./Terminal";
import "../style/App.css";

function App() {

  const [terminal, setTerminal] = React.useState(false);

  function displayTerminal(){  
    setTerminal(true)
  }

  function closeTerminal(){
    setTerminal(false)
  }

  return (
    <div>
      <Header sendFunc={displayTerminal}/>
      {terminal && <Terminal closeTerminal={closeTerminal}/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>  
    </div>
  );
}

export default App
