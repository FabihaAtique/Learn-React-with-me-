import React, {useState} from "react";


export default function Textform(props) {
    
    const handleUpclick = () => {
        console.log("uppercase button was clicked " + text);
        //as text is state variable, it will re render in the page without a need to reload the page 
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleclearclick = () =>{
      let newtext = ' ';
      settext(newtext);
    }
    //by default we get an event object 
    const handleOnChange = (event) => {
        console.log("changed");
        //we change the text to the new text that the user will write in the box 
        settext(event.target.value);
    }
    //creating a state variable with the help of ustate hook 
    //text is a variable and settext is the function we use to change it 
    const [text, settext] = useState("enter text here");
    //text = {"new text"}; this is a wrong way to change the state 
    //settext("new tect"); //correct method
    return ( 
    <> 
      <div className="container" style= {{color: props.Mode ==="dark" ? "white" : "#042749"}}> 
        <h1>{props.heading}</h1>
        <div className="container mt-5">
          <form>
            <div className="form-group">
              <textarea className="form-control"  style= {{backgroundColor: props.Mode ==="dark" ? "grey" : "white", color: props.Mode==="dark" ? "white": "black"}} value={text} onChange={handleOnChange} id="textArea" rows="10"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mx-2">Submit</button>
            <button type="submit" className="btn btn-primary my-3 mx-2"  onClick={handleUpclick} >Convert to UpperCase </button>
            <button type="submit" className="btn btn-primary my-3 mx-2"  onClick={handleclearclick} >Clear text </button>
          </form>
        </div>
      </div>
      <div className="container my-2" style= {{color: props.Mode ==="dark" ? "white" : "black"}} >
        <h1>your text summary </h1>
        <p> {text.split(" ").length} words {text.length} characters  </p>
        <p>{0.05 + text.split(" ").length }  minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

    
  );
}
