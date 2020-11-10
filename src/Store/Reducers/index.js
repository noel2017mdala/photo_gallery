import {combineReducers} from 'redux';
import state from './fetchReducer';
import fetchImageState from './fetchImageReducer';

const rootReducer = combineReducers({
    fetch: state,
    image: fetchImageState
});

export default rootReducer