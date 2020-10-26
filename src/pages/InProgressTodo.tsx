 import React from 'react'
 import {FaTrash, FaCircle} from 'react-icons/fa'
 import '../styles/todoList.css'

function InProgressTodo(props: any) {

    return props.progressTodo.map((e: any) => (
        <div className="todo-list-in-progress-content task-color" key={e.id}>
            <p>
                <input 
                type="text"
                defaultValue={e.text}
                onChange={(event) => props.update(event.target.value, e.id, props.progressTodo)}
                />
            </p>
            <div className="trash-more">
            <FaTrash fontSize={15} color="#000000" onClick={() => props.deleteTodo(e.id)} />
            <FaCircle  fontSize={15} className="next-completed" color=" #76bd5e" onClick={() => props.completed(e, props.progressTodo)} />
            </div>
        </div>
    ))
}

export default InProgressTodo
