import React, { useState, useMemo } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const test = () => {
        setCount(count + 1)
    }
    var a = 5
    var b = 6
    var c = 7
   var all = a + b + c
    const Memo = useMemo(()=>(

       console.log('Memo',all)
       
    ),[])
    useEffect(()=>{
        console.log('effect',a + b + c)
    },[])
    console.log('ongoai', Memo)
    return (

        <div>
            <h1>{count}</h1>
            <button onClick={test}>Click</button>
        </div>
    )
}

export default UseMemo
