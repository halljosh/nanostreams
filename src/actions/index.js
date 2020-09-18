import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, SIGN_IN, SIGN_OUT } from './types';
import history from '../history';
import streamsAPI from '../streamsAPI';

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streamsAPI.post('/streams', { ...formValues, userId }); //posts the formValues to the streams endpoint in our API

    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/list'); //navigates user to StreamList on succesful stream creation
};

export const deleteStream = (id) => async dispatch => {
    await streamsAPI.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/list'); //navigates user to StreamList on succesful deletion
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streamsAPI.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/list'); //navigates user to StreamList on succesful edit
};

export const fetchStream = (id) => async dispatch => { //specific GET request
    const response = await streamsAPI.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data })
};

export const fetchStreams = () => async dispatch => { //generic GET request
    const response = await streamsAPI.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId 
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};