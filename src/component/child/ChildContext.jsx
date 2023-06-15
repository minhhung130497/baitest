import React, { useContext } from 'react'
import {conText} from '../UseContext'


const ChildContext = () => {
    const ChangeColor = useContext(conText)
  return (
    <div>
        <h1 className={ChangeColor}>Test</h1>
    </div>
  )
}

export default ChildContext
