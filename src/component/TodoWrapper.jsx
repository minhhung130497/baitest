import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import { v4 as uuidv4 } from 'uuid';




const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const [ischecked,setIsChecked] = useState(true)
  
  const addTodo = todo =>{
    setTodos([...todos, {id: uuidv4(),task: todo,completed: false, isEdit: false}])
    
  }
  
  const toggleCompleted = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo , completed: !todo.completed} : todo))
    
    if(ischecked == true){
      
    }
    setIsChecked(ischecked === true ? false : true)
   
   
   
  }
  
  
  const deleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo , isEdit: !todo.isEdit} : todo))
  }

  const editTask = (task,id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,task , isEdit: !todo.isEdit} : todo))
  }
  return (
    <div className="todo-w">
      <h1>TODO</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index)=>(
        todo.isEdit ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} checked={ischecked}/>
        )
       
  ))}
      
    </div>
  )
}

export default TodoWrapper
