import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
            {/* we have made the component for navbar so that the app.js file does not get too mixed up  */}
            {/* i can use this component for other projects  */}
            {/* taking props for the title  */}
      <Navbar title="Fabcode" AboutText="About content"/>
      <div className="container my-3" >

        {/* <Textform heading="Enter your details "/> */}
        <About/>

      </div>
    </>
  );
}

export default App;
