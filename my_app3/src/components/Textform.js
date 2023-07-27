import React, {useState} from "react";


export default function Textform(props) {
    
    const handleUpclick = () => {
        console.log("uppercase button was clicked " + text);
        //as text is state variable, it will re render in the page without a need to reload the page 
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    //by default we get an event object 
    const handleOnChange = (event) => {
        console.log("changed");
        //we change the text to the new text that the user will write in the box 
        settext(event.target.value);
    }
    //creating a state variable 
    const [text, settext] = useState("enter text here");
    //text = {"new text"}; this is a wrong way to change the state 
    //settext("new tect"); //correct method
    return (
    
      <div>
        <h1>{props.heading}</h1>
        <div className="container mt-5">
          <form>
            <div className="form-group">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="10"></textarea>
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            <button type="submit" className="btn btn-primary" onClick={handleUpclick} >Convert to UpperCase </button>

          </form>
        </div>
      </div>
    
  );
}
