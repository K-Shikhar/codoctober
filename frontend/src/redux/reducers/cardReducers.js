import * as actionTypes from '../actions/types.js';

export const getTracksReducer = (state = {tracks: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_TRACKS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_TRACKS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getTRacksDetailsReducer = (state = { tracks: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_TRACKS_DETAILS_SUCCESS:
            return {product: action.payload }
        case actionTypes.GET_TRACKS_DETAILS_FAIL:
            return {
                error: action.payload
            }
        default:
            return state
    }
}