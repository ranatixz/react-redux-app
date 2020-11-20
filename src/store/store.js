import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [logger, thunk];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
