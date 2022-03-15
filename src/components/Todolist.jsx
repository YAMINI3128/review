import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos ,checkTodo ,deleteTodo }) => {
    return (
        <div>
            {todos.map((todo =>
            <Todo key={todo.id} 
            tittle={todo.tittle} 
            checkTodo = {checkTodo} 
            id={todo.id}
            isCompletes={todo.isCompleted}
            deleteTodo={deleteTodo}
            />
            ))}
        </div>
    )
}

export default Todolist;
