import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("")

  const handleSubmit = e   =>{
    
      e.preventDefault()

      addTodo(value)

      setValue("")
  }
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="enter something" onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className="todo-btn" type="submit" onClick={handleSubmit}>Enter</button>
        
      </form>
    </div>
  ) 
}

export default TodoForm
