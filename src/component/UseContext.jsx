import React, { createContext, useState } from 'react'
import ChildContext from './child/ChildContext'
import  '../App.css'

export const conText =   createContext()
const UseContext = () => {

    const [color, setColor] = useState('red')

  
    console.log(conText)
  const changeColor = ()=>{
    
  }
  const changeColor2 = () =>{
    setColor(color === 'red' ? 'light' : 'red')
  }
  return (
    <div>
      <conText.Provider value={color}>
      
      <button onClick={changeColor2}>Click</button>
      <ChildContext/>
      </conText.Provider>
    </div>
  )
}

export default UseContext
