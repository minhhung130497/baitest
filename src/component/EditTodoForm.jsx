import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value,setValue] = useState(task.task)

  const handleSubmit = e   =>{
    
      e.preventDefault()

      editTodo(value , task.id)

      setValue("")
  }
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Update task" onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className="todo-btn" type="submit" onClick={handleSubmit}>Update</button>
        
      </form>
    </div>
  ) 
}

export default EditTodoForm
