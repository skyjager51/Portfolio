import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Header from './Header';
import Projects from './Projects';
import Contact from "./Contact"
import Home from './Home';
import "../style/App.css";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>  
    </div>
  )
}

export default App
