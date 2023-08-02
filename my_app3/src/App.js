import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  // dark mode of the whole page will be controlled by the state variable in the app.js 
  //by default the mode is light 
  const [Mode, setMode]=  useState('light');

  const togglemode = () =>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
            {/* we have made the component for navbar so that the app.js file does not get too mixed up  */}
            {/* i can use this component for other projects  */}
            {/* taking props for the title  */}
      <Navbar title="Fabcode" AboutText="About content" Mode ={Mode} togglemode = {togglemode}/>
      <div className="container my-3" >

        <Textform heading="Enter your details " Mode= {Mode}/>
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
