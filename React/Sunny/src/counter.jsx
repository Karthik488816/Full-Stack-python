import React, { useEffect } from "react";
import { useState} from "react";
import { preconnect } from "react-dom";
const Counter=()=>{
    let [count,setCounter]=useState(0);
    const incrementEvent=()=>{
        setCounter(count+1); 
        console.log(count+1);  
    };  
    const decrementEvent=()=>{
        setCounter((prevState)=>prevState-1);
        console.log(count-1);
    }
    useEffect(()=>{
        console.log("useEffect");        
    },[]);
    return (
        <React.Fragment>
            <button onClick={incrementEvent}>+</button>
            <div id="result" >{count} </div>
            <button onClick={decrementEvent}>-</button>
        </React.Fragment>
    )
};
export default Counter;