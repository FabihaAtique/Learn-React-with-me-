import "./App.css";
import NavBar_component from "./components/NavBar_component";


function App() {
  return (
    <>
            {/* we have made the component for navbar so that the app.js file does not get too mixed up  */}
            {/* i can use this component for other projects  */}
            {/* taking props for the title  */}
      <NavBar_component title= "FabCode" AboutText="About FabCode"/> 
    </>
  );
}

export default App;
