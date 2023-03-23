import React from "react";

const Todo = ({text, todo, id, todos, setTodos}) => {

    // Handlers

    const deleteHandler = () =>{ 
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () =>{
        setTodos(todos.map( el => {
            if(el.id === todo.id){
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el;
        }));
    }

    // Content

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler} >
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;