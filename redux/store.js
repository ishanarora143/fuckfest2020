import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import login from '../src/authentication/LoginState.js';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            login
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}