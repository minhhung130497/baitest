import React, { useState } from 'react'
import ChildComponent from './child/ChildComponent'
import { useCallback } from 'react'

const Callback = () => {
  const [users, setUsers] = useState([])


  //Dùng useCallback

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`)
  }, [])

  //Khong dùng useCallback

  // const getData = (type) => {  
  //   return fetch(`https://reqres.in/api/${type}`)
  //   }

  const handleClick = () => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users)
      })
  }


  return (
    <div>

      <p>Data</p>
      <button onClick={handleClick}>Get User</button>
      <div>{users.map((i) => {
        var key = Object.keys(i)
        var value = Object.values(i)
        return (
          <ul>
            <li>{key[0] + ': ' + value[0]}</li>
            <li>{key[1] + ': ' + value[1]}</li>
            <li>{key[2] + ': ' + value[2]}</li>
            <li>{key[3] + ': ' + value[3]}</li>
            <li>{key[4] + ': ' + value[4]}</li>
          </ul>


        )
      })}</div>
      <div><ChildComponent getData={getData} handleClick={handleClick} /></div>
    </div>
  )
}

export default Callback
