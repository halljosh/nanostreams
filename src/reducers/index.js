import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // changes the name of the default Redux Form reducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer 
});