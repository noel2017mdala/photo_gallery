import {FETCH_ACTIONS} from '../Actions/ActionCreator';
const initialState = {};

const state = (state = initialState, action) =>{
    
    switch(action.type){
        case FETCH_ACTIONS:
            return {
                ...state,
                data:action.payLoad
            }
            default: return state
    }
}

export default state;