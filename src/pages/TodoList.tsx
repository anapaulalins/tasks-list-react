import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import InProgressTodo from './InProgressTodo'
import CompletedTodoList from './completedTodo'
import '../styles/todoList.css'

interface TodoInterface{
    id: number,
    text: string
}

function TodoList() {

    const [todos, setTodos] = useState([] as any)
    const [inProgressTodo, setInProgressTodo]  = useState([] as any)
    const [completedTodo, setCompletedTodo] =  useState([] as any)

    function addTodos(todo: TodoInterface){
        if(!todo.text){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    function inProgress(todo: TodoInterface,  newTodos: any ){

        const todosInProgress = [todo, ...inProgressTodo]
        const todoNow = newTodos.find((todoNow: TodoInterface) => todoNow.id === todo.id )
        const index = newTodos.indexOf(todoNow)
        newTodos.splice(index, 1)
        setInProgressTodo(todosInProgress)
    }

    function completed(todo: TodoInterface, newTodos: any){
        const completedTodos = [todo, ...completedTodo ]
        const todoNow = newTodos.find((todoNow: TodoInterface) => todoNow.id === todo.id )
        const index = newTodos.indexOf(todoNow)
        newTodos.splice(index, 1)
        setCompletedTodo(completedTodos)
    }

    function updateTodo(text: string, id: number, newTodos: any){
        const todo = newTodos.find((todo: TodoInterface) => todo.id === id)
        todo.text = text
    }

    function deleteTodo(id: number){
        const removeTask = [...todos].filter((todo: TodoInterface) => todo.id !== id)
        setTodos(removeTask)
        console.log(todos)
    
    }
    function deleteTodoProgress(id: number){
        const removeTask = [...inProgressTodo].filter((todo: TodoInterface) => todo.id !== id)
        setInProgressTodo(removeTask)
        console.log(inProgressTodo)
    }
    function deleteTodoCompleted(id: number){
        const removeTask = [...completedTodo].filter((todo: TodoInterface) => todo.id !== id)
        setCompletedTodo(removeTask)
        console.log(completedTodo)
    }

    function clearTodos(arr: any){
        arr = []
        setTodos(arr)
    }
    function clearInProgress(arr: any){
        arr = []
        setInProgressTodo(arr)
    }
    function clearTodosCompleted(arr: any){
        arr = []
        setCompletedTodo(arr)
    }


    return (
        <div className="todo-list-container">
            <div className="todo-container">
           <h1>Tasks List</h1>
           <TodoForm onSubmit={addTodos} />
           <div className="todo-content-element">
            <Todo 
            todos={todos} 
            update={updateTodo}
            progress={inProgress}
            deleteTodo={deleteTodo}
            />
           </div>
           <div className="clear">
                <button onClick={() => clearTodos(todos)}>clear all</button>
            </div>
            </div>
            <div className="in-progress-container">
            <h1>In-Progress</h1>
            <div className="todo-content-element-in-progress">
            <InProgressTodo 
            progressTodo={inProgressTodo}
            update={updateTodo}
            completed={completed}
            deleteTodo={deleteTodoProgress}
            />
            </div>
            <div className="clear">
                <button onClick={() => clearInProgress(inProgressTodo)}>clear all</button>
            </div>
            </div>
            <div className="completed-container">
            <h1>Completed</h1>
            <div className="todo-element-completed-content" >
            <CompletedTodoList 
            completedTodo={completedTodo}
            update={updateTodo}
            deleteTodo={deleteTodoCompleted}
            />
            </div>
            <div className="clear">
                <button onClick={() => clearTodosCompleted(completedTodo)}>clear all</button>
            </div>
            </div>
        </div>
    )
}

export default TodoList
