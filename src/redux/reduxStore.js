import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import friendsListReducer from './friendsListReducer'

let reducers = combineReducers({
      dialogsPage: dialogsReducer, 
      profilePage: profileReducer, 
      friendsList: friendsListReducer
})

let store = createStore(reducers);

export default store