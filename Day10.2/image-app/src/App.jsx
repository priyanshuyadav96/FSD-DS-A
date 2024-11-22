import { useState } from 'react';
import pic from './Images/friede.jpg';
import './App.css';
const App = () => {
  const [width,setwidth] = useState(300);
  const [height,setheight] = useState(500);

  return (
    <div>
      <img src={pic} style={{ width :`${width}px`, height:`${height}px`}} />
      <button onClick={()=>{
        setwidth(width+10);
      }}>Width++</button>
      <button onClick={()=>{
        setwidth(width-10);
      }}>Width--</button>
      <button onClick={()=>{
        setheight(height+10);
      }}>Height++</button>
      <button onClick={()=>{
        setheight(height-10);
      }}>Height--</button>

    </div>
  )
}

export default App