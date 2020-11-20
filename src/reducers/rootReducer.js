import { combineReducers } from 'redux';
import iceCreamReducer from './iceCreamReducer';
import cakeReducer from './cakeReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer;