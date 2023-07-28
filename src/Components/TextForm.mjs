import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked");
        setText("clicked on handleUpClick");
    }
    const handleOnChange = (event)=>{
        console.log("onchange");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
            <textarea className="form-control" id="myBox" rows="8" onClick={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
