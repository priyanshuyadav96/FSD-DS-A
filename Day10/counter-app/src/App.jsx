import { useState } from "react";
import "./App.css";

const App = () => {
  const [count,setcount]=useState(0);
  return (
    <div className="count-app">Initial count: 
      <h1 className="count-disp">{count}</h1>
      <div className="count-body">
        <button className="count-btn i" onClick={()=>{
          setcount(count + 1)
        }
        }
        >Increment</button>
        <button className="count-btn d" onClick={()=>{
          setcount(count - 1)
        }
        }
        >Decrement</button>
        <button className="count-btn r" onClick={()=>{
          setcount(0)
        }
        }
        >Reset</button>
      </div>
    </div>
  );
};

export default App