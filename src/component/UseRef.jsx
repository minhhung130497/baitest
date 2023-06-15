import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    
    const ref = useRef(null)
    const [count, setCount] = useState(5)
   var btnRe = document.getElementById('btnRe')
   var btnRe2 = document.getElementById('btnRe2')

   if(count == 10){
    btnRe.style.opacity = '1'
    btnRe.style.transition = '2s'
    console.log(2)
    }
    
    if(btnRe2){
        console.log(3)
       }
    useEffect(()=>{
        if(count == 9){
            ref.current.id = 'btnRe2'
            console.log(ref)
        }
       
        if(ref.current.id == 'btnRe2'){
            ref.current.onClick = {handleClick2}
        }
        console.log(ref)
        
    },[count])
    const handleClick = ()  =>{
        setCount(prev=> prev + 1)
    }
    const handleClick2 = ()  =>{
        setCount(prev=> prev - 1)
    }
    const handleReset = ()  =>{
        document.querySelector('input').value= setCount(5)
    }
  return (
    <div>
        <form>

        <h1>{count}</h1>
        <input type="text" value={count} />
        <input type="button" onClick={handleClick} value="Click" ref={ref} id="input"/>
        <input type="button" onClick={handleClick2} value="PREV" />
        <input  onClick={handleReset} id="btnRe" style={{opacity: 0}} value="Reset" type="button"/>
        <button  onClick={handleReset}>reset</button>
        </form>
        
    </div>
  )
}

export default UseRef
