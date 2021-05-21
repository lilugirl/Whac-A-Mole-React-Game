import React, { useState } from "react"
import Moles from "./Moles"
import Mole from './Mole';
import Score from "./Score"
import Timer from "./Timer"
import './Game.css';

const Game=()=>{
    const TIME_LIMIT = 4000;
    const [playing,setPlaying]=useState(false);
    return <>
    {!playing && <h1>打鼹鼠 Whac a Mole</h1>}
    <button onClick={()=>setPlaying(!playing)}>{playing?'停 Stop':'开始 Start'}</button>
    {playing && <><Score/>
    <Timer time={TIME_LIMIT} onEnd={()=>setPlaying(false)}/>
    <Moles>
        <Mole/>
        <Mole/>
        <Mole/>
        <Mole/>
        <Mole/>
    </Moles></>}
    </>
}

export default Game;