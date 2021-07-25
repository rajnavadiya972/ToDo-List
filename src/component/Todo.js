import React from 'react';
import todoPhoto from "./2.png";
import './Todo.css';
import { useEffect, useState } from "react";
import photoTodo from './5.gif';

const localItemGet=()=>{
    let todo = localStorage.getItem('todos');
    if(todo){
        return JSON.parse(localStorage.getItem('todos'));
    }
    else{
        return [];
    }
}

const Todo = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(localItemGet());
    const [editNewItem, setEditNewItem] = useState(null);
    const [count, setCount] = useState(0);
    const [updateBtn, setUpdateBtn] = useState(true);


    const addItem = () => {
        if (!input) {
            alert("Enter the input");
        }
        else if (input && !updateBtn) {
            setTodos(
                todos.map((element) => {
                    if (element.id === editNewItem) {
                        return { ...element, name: input };
                    }
                    return element;
                })
            );
            setInput("");
            setUpdateBtn(true);
        }
        else {
            const yourTodo = { id: count, name: input };
            setTodos([...todos, yourTodo]);
            setInput("");
            setCount(count + 1);
        }
    }

    const deleteTodos = (index) => {
        const newItem = todos.filter((element) => {
            return index !== element.id;
        });
        setTodos(newItem);
    }
    const editTodos = (index) => {
        const newAddItem = todos.find((element) => {
            return element.id === index;
        });
        setUpdateBtn(false);
        setInput(newAddItem.name);
        setEditNewItem(newAddItem.id);
    }

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <div className="main-containar">
                <figure>
                    <img src={todoPhoto} alt="ToDo Image" />
                    <figcaption>ToDo List</figcaption>
                </figure>
                <div className="input-item">
                    <input type="text" placeholder="Add items..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)} />
                    {
                        updateBtn ?
                            <i class="fas fa-plus-circle" title="Add" onClick={addItem}></i> :
                            <i class="fas fa-pen-alt" title="Update" onClick={addItem}></i>
                    }
                </div>
                <div className="todo-item">
                    {
                        todos.map((element) => {
                            return (
                                <div className="one-item" key={element.id}>
                                    <h3>{element.name}</h3>
                                    <i class="fas fa-edit" type="Edit" onClick={() => editTodos(element.id)}></i>
                                    <i class="fas fa-trash-alt" type="Delete" onClick={() => deleteTodos(element.id)}></i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="photo_todo">
                <img src={photoTodo} alt="photo" />
            </div>
        </>
    )
}

export default Todo;
