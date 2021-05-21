import { useEffect, useRef, useState } from "react";

const Timer=({time,interval=1000,onEnd})=>{
    const [internalTime,setInternalTime]=useState(time)
    const timerRef=useRef(time);
    console.log('timerRef',timerRef);
    useEffect(()=>{
        if(internalTime===0 && onEnd) onEnd()
    },[internalTime,onEnd])
    useEffect(()=>{
        timerRef.current=setInterval(()=>setInternalTime(internalTime-interval),interval);
        return ()=>{
            clearInterval(timerRef.current)
        }
    })
    return <div>Time: {internalTime}</div>
}

export default Timer;