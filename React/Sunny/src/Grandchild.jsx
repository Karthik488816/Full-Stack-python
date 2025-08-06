/*
import React from 'react'

const Grandchild = ({name}) => {
  return (
    <div>
        <h1>The grand child got data: {name} </h1>        
      <h1>Grand Child</h1>
    </div>
  )
}
export default Grandchild
*/

import { nameContext } from "./App";
import { useContext } from "react";
const Grandchild =()=>{
    const {name}=useContext(nameContext);
    return(
        <div>
            <h1>{name}</h1>
            {/* <p>{fav}</p> */}
        </div>
    )
}
export default Grandchild;