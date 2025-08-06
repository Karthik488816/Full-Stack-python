import React from 'react'
import Grandchild from './Grandchild'

const Child = ({name}) => {
    console.log("Child got name",name);
  return (
    <div>
      {<Grandchild name={name}/>}
    </div>
  )
}

export default Child
