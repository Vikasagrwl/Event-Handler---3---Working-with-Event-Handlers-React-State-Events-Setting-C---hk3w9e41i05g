import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
    const val=event.target.value;
    console.log("Input in #text-input is "+val);
  }

  const handleNumInput = (event) =>{
    const val=event.target.value;
    console.log("Input in #num-input is "+val);
  }

  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleNumInput}/>
      <br/>
    </div>
  )
}


export default App;
