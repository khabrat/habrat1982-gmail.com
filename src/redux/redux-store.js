import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogs-reduser';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;

