import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import friendsListReducer from './friendsListReducer'
import usersReducer from './usersReducer'
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
      dialogsPage: dialogsReducer, 
      profilePage: profileReducer, 
      friendsList: friendsListReducer,
      usersPage: usersReducer,
      auth: authReducer,
      form: formReducer,
      app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store