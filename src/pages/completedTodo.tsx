import React from 'react'
import {FaTrash} from 'react-icons/fa'
import '../styles/todoList.css'

function completedTodo(props: any) {
    return props.completedTodo.map((e: any) => (
        <div className="todo-list-completed-content task-color" key={e.id}>
        <p>
            <input 
            type="text"
            defaultValue={e.text}
            onChange={(event) => props.update(event.target.value, e.id, props.completedTodo)}
            />
        </p>
        <FaTrash fontSize={15} color="#000000" onClick={() => props.deleteTodo(e.id)} />
    </div>
    ))
}

export default completedTodo
