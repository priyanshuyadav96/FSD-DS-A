import React,{useState} from 'react'
import './ImageApp.css'
import pic from "../images/friede.jpg"
const ImageApp = () => {
    const [width,setwidth] = useState(300);
    const [height,setheight] = useState(500);
    const [rotation,setrotation]=useState(0);
    return (
      <div className='disp'>
        <div className='img'>
        <img src={pic} style={{ width :`${width}px`, height:`${height}px`,transform:`rotate(${rotation}deg)`}} />
        </div>
        <div className='panel'>
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
        
        <button onClick={()=>{
            setrotation(rotation+10)
        }}>Rotate ClkWise</button>

        <button onClick={()=>{
            setrotation(rotation-10)
        }}>Rotate AntiClkWise</button>

        </div>
      </div>
    )
}

export default ImageApp