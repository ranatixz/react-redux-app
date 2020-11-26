import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODO
} from "../types/todoTypes";

export const fetchTodo = () => {
    return {
        type: FETCH_TODO
    };
};

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const updateTodo = newTodo => {
    return {
        type: UPDATE_TODO,
        payload: newTodo
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    };
};
