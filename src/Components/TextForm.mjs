import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        setText(text.toUpperCase());
    }
    const handleLoClick = () =>{
        setText(text.toLowerCase());
    }
    const handleClClick = () =>{
        setText("");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
       alert("Copied to Clipboard!", "success");
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>

        <button className='btn btn-primary ' onClick={handleClClick}>Clear Text</button>

        <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>

        <button className='btn btn-primary ' onClick={handleExtraSpace}>Remove extra Space</button>
        
    </div>
    <div className='container my-3'>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
