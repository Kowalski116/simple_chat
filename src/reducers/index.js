import { combineReducers } from 'redux';
import activeThreadIdReducer from './activeThreadIdReducer';
import threadsReducer from './threadsReducer';

export default combineReducers({
    activeThreadId: activeThreadIdReducer,
    threads: threadsReducer,
});