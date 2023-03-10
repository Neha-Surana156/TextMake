import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText]= useState('');
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to Uppercase!","success");
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted to Lowercase!","success");
    }
    const handleClearClick = ()=>{
        let newText= '';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy = () =>{
        var text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!","success");
    }
    const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">            
            <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#042748', color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>       
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>       
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>  
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
                 
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
