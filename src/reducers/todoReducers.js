import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODO
} from "../types/todoTypes";

const initialState = {
    todos: [
        {
            _id: 1,
            todo: "Making Love"
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};

export default todoReducer;
