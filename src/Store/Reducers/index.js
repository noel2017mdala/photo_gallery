import {combineReducers} from 'redux';
import state from './fetchReducer';

const rootReducer = combineReducers({
    fetch: state,
});

export default rootReducer