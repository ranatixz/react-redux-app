import { combineReducers } from "redux";
import iceCreamReducer from "./iceCreamReducer";
import cakeReducer from "./cakeReducer";
import userReducer from "./userReducer";
import todoReducer from "./todoReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    todo: todoReducer
});

export default rootReducer;
