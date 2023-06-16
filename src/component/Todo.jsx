import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {

  return (

    <div className="todo-list">
      {/* <>
        {task.map((task) => {
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black'
            }}
            onClick={() => toggleCompleted(task.id)}
          >
            {task.task}
          </li>
        })}
      </> */}
      <p className={`${task.completed ? 'completed' : ''}`}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'gray' : 'black'
        }}
        onClick={() => toggleCompleted(task.id)} >
        {task.task}
      </p>
      <div className="list-icon">
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className="icon" />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="icon" />

      </div>
    </div>
  )
}

export default Todo
