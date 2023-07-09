import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text Here!')
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  return (
    <>
        <div className='container'> 
            <h1 className='heading heading-brand'>{props.heading}</h1> 
            <div className="mb-3">
            <textarea className="text text-brand form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className='container my-3'>
          <h4 className='summary summary-brand'>Your Text Summary</h4>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h5 className='summary summary-brand'>Preview</h5>
          <p>{text}</p>
        </div>
    </>
  )
}
