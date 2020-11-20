import { BUY_CAKE, BUY_CAKE_QTY } from '../types/cakeTypes';

const inititalState = {
    numOfCakes: 20
};

const cakeReducer = (state = inititalState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        case BUY_CAKE_QTY:
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state;
    }
};

export default cakeReducer;
