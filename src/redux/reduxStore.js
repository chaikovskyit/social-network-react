import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import friendsListReducer from './friendsListReducer'
import usersReducer from './usersReducer'
import authReducer from "./authReducer";

let reducers = combineReducers({
      dialogsPage: dialogsReducer, 
      profilePage: profileReducer, 
      friendsList: friendsListReducer,
      usersPage: usersReducer,
      auth: authReducer,
})

let store = createStore(reducers);

export default store