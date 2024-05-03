import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../store/todoActions";
// import './AddTodo.css'; // Import a separate CSS file for styling

const AddTodo = ({ todo, setTodo }) => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.authRequests.userInfo);
    const author = userInfo.firstName;
    const _id = userInfo._id;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo._id) {
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: todo.author,
                uid: todo.uid
            }

            dispatch(updateTodo(updatedTodo, id));

        } else {
            const newTodo = {
                ...todo,
                date: new Date(),
            };
            dispatch(addTodo(newTodo, author, _id));
        }


        setTodo({ name: "", isComplete: false });


    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    autoFocus
                    value={todo.name}
                    onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Enter task here"
                />
                <div className="input-group-append">
                    <button className="btn btn-info" type="submit">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddTodo;
