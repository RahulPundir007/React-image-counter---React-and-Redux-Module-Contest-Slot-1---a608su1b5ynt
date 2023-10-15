import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  const [val, setVal] = useState(300);

  function handleIncrease(){
    setVal(()=>val+2)
    
  }

  return (
    <div id="main">
      <img src={star}  height={`${val} + px`} width={`${val} + px`} onClick={handleIncrease} />
    </div>
  )
}


export default App;
