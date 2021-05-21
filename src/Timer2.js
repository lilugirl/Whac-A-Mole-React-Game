import { useEffect, useRef, useState } from "react";

const Time=({interval})=>{
    const [time,setTime]=useState(Date.now());
    const timer=useRef(null);
    useEffect(()=>{
      timer.current=setInterval(()=>{
        setTime(Date.now());
     },interval);
    
     return ()=>{
       clearInterval(timer.current);
     }
    },[interval])
    return (<h1>{`Time: ${time}`}</h1>)
  }
const Timer=()=>{
    const [interval,setInterval]=useState(1000);
    return (
      <>
      <Time interval={interval}/>
      <h2>{`Interval:${interval}`}</h2>
      <input type="range" min="1" value={interval} max="10000" onChange={(e)=>{
         setInterval(e.target.value);
      }} />
      </>
    );
}

export default Timer;