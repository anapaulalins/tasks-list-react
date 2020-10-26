import React , {useState} from 'react'
import {FaPlus} from 'react-icons/fa'
import '../styles/todoList.css'
function TodoForm(props: any) {

    const [inputValue, setInputValue] = useState('')

    function handleSubmit(event: any){
        event.preventDefault()

        props.onSubmit({
            id: Date.now(),
            text: inputValue
        })
        
        setInputValue('')
    }

    return (
        <div className="todo-form" onSubmit={handleSubmit} >
        <form action="">
            <input 
            type="text" 
            placeholder="Add a task"
            value={inputValue}
            className="input-todo"
            onChange={event => setInputValue(event.target.value)}
            />
        </form>
        <FaPlus size={18} color='#712d9e' />
        </div>
    )
}

export default TodoForm
