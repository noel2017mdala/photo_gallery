import {combineReducers} from 'redux';
import state from './fetchReducer';
import fetchImageState from './fetchImageReducer';
import FetchUser from './fetchUserReducer';

const rootReducer = combineReducers({
    fetch: state,
    image: fetchImageState,
    user: FetchUser,
});

export default rootReducer