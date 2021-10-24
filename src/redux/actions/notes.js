import NotesResource from '../resources/NotesResource';

import {
    CREATE_NOTES_INITIATED, CREATE_NOTES_FAILED, CREATE_NOTES_SUCCESS, GET_NOTES_FAILED,
    GET_NOTES_INITIATED, GET_NOTES_SUCCESS
} from './types';

function getErrorMessage(err) {
    return err.response ? err.response.data.error : err.message ? err.message : "Unknown error";
}

function internalCreateNote(text, date, dispatch) {
    new NotesResource().createNotes(text, date)
        .then(res => {
            dispatch({
                type: CREATE_NOTES_SUCCESS
            })
        })
        .catch(err => {
            dispatch({
                type: CREATE_NOTES_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}


function internalGetNotes(id, text, date, dispatch) {
    new NotesResource().getNotes(id, text, date)
        .then((res) => {
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_NOTES_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true,
                },
            });
            console.log(err.response);
        });
}

export const createNotes = (text, date) => (dispatch) => {
    dispatch({
        type: CREATE_NOTES_INITIATED,
    });
    internalCreateNote(text, date, dispatch);
}

export const getNotes = (id, text, date) => (dispatch) => {
    dispatch({
        type: GET_NOTES_INITIATED,
    });
    internalGetNotes(dispatch, id, text, date);
};