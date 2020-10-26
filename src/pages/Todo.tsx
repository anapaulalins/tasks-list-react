import React from 'react'
import {FaCircle, FaTrash} from 'react-icons/fa'
import '../styles/todoList.css'

function Todo(props: any ){

    return props.todos.map((e: any) => (
        <div className="todo-content task-color" key={e.id}>
            <p>
            <input 
            type="text"
            defaultValue={e.text}
            onChange={event => props.update(event.target.value, e.id, props.todos) }
            />
            </p>
            <div className="trash-more">
            <FaTrash fontSize={15} color="#000000" onClick={() => props.deleteTodo(e.id)} />
            <FaCircle className="next-progress" fontSize={15} color="#f03c6f" onClick={() => props.progress(e, props.todos)} />
            </div>
        </div>
    ))
}

export default Todo
