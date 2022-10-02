import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Intro from "./Component/intro/Intro";
import Service from "./Component/Service/Service";
import './App.css'
import About from "./Component/About/about";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import {themeContext} from "./Context"
import {useContext} from  "react";
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode?'black':'',
      color:darkMode?'white':'',
    }}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Project/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
