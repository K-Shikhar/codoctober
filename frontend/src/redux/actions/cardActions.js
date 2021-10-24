import * as actionTypes from './types.js';
import axios from 'axios';


export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/tracks`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getTracksDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/tracks/${id}`);
        console.log(data);
        dispatch({ type: actionTypes.GET_TRACKS_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_TRACKS_DETAILS_FAIL, payload: error.response});

    }
};