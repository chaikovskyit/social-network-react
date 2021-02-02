import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_USER_DATA: 
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
// Action creator
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

//Thunk creator
export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me().then(response => {
      if (response.data.resultCode === 0){
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
  }
}

//Thunk creator
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0){
        dispatch(getAuthUserData())
      } else {
        let message = response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
      }
    })
  }
}

//Thunk creator
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0){
        dispatch(setAuthUserData( null, null, null, false))
      }
    })
  }
}

export default authReducer