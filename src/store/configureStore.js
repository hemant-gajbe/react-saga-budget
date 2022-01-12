import {createStore, combineReducers} from 'redux';
import entriesReducers from '../reducers/entries.reducers';

const configureStore = () => {
    const combinedReducers = combineReducers({
        entries: entriesReducers
    })
    
    return createStore(combinedReducers);
}

export default configureStore;
