import React, {useState} from 'react';
import { useDispatch } from "react-redux";

function NewTodoForm() {
    const INITIAL_STATE = {
        todo: ""
    }
    const dispatch = useDispatch();
    const addTodo = (formData) => dispatch({type : "ADD_TODO", todo : {...formData, id: Math.floor(Math.random() * 10000)}});

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Task to do: </label>
            <input onChange={handleChange} name="todo" type="text"></input><br/>
            <button>Add!</button>
        </form>
    )
}

export default NewTodoForm;