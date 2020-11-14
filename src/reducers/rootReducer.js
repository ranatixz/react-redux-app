import { combineReducers } from 'redux';
import iceCreamReducer from './iceCreamReducer';
import cakeReducer from './cakeReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;