import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'
import { getAuthUserData } from './authReducer'
 
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case INITIALIZED_SUCCESS: 
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}
// Action creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//Thunk creator
export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
      .then(() => {
        dispatch(initializedSuccess())
    })
    
    
  }
}


export default appReducer