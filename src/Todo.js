import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({text, id}) => {
    console.log(text, id)
    const dispatch = useDispatch();
    const remove = () => dispatch({ type: "DELETE_TODO", id: id});
    return (
        <div>
            <h4>{text}</h4>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default Todo;