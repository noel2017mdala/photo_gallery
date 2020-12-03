import {FETCH_USER} from '../Actions/ActionCreator';

const initialState = {};

const FetchUser = (state = initialState, action) =>{

    if(action.type === FETCH_USER){
        return{
            ...state,
            data: action.payLoad
        }
    }
    return state;
}

export default FetchUser;