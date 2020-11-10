import {FETCH_IMAGES } from '../Actions/ActionCreator';

const initialState = {};

const fetchImageState = (state = initialState, action) =>{
    if(action.type === FETCH_IMAGES){
        return{
            ...state,
            imageData:action.payLoad
        };
    }
    return state;
}

export default fetchImageState;