import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";
import PropTypes from "prop-types";

function TodoContainer({ addTodo }) {
    const [newTodo, setNewTodo] = useState({ _id: null, todo: "" });

    const onChangeHandler = event => {
        setNewTodo({
            ...newTodo,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo({ _id: null, todo: "" });
    };

    const { _id, todo } = newTodo;
    return (
        <form onSubmit={onSubmit}>
            <input
                type="number"
                name="_id"
                placeholder="Enter your id"
                onChange={onChangeHandler}
                value={_id}
            />
            <input
                type="text"
                name="todo"
                placeholder="Enter your name"
                onChange={onChangeHandler}
                value={todo}
            />
            {newTodo._id && newTodo.todo && (
                <button type="submit">Submit</button>
            )}
        </form>
    );
}

TodoContainer.propTypes = {
    addTodo: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => {
    return {
        addTodo: payload => dispatch(addTodo(payload))
    };
};
export default connect(null, mapDispatchToProps)(TodoContainer);
