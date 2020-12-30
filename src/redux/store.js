import friendsListReducer from "./friendsListReducer"
import profileReducer from "./profileReducer"
import dialogsReducer from './dialogsReducer'

let store = {

  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 6},
        {id: 2, message: "Its my first post", likesCount: 20}
      ],
      newPostText: 'Mandalorian'
    },
  
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Yoda"},
        {id: 2, name: "DarthWaider"},
        {id: 3, name: "R2D2"}
      ],
      messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "Yo"}
      ],
      newMessageBody: '',
    },
    

    friendsList: {
      friends: [
        {id: 1, name: "Yoda", ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZDXIMcKgVVJu7CyqaiGnzVqpmWG24iEyrA&usqp=CAU'},
        {id: 2, name: "DW", ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZDXIMcKgVVJu7CyqaiGnzVqpmWG24iEyrA&usqp=CAU'},
        {id: 3, name: "R2D2", ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZDXIMcKgVVJu7CyqaiGnzVqpmWG24iEyrA&usqp=CAU'}
      ]
    }
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.friendsList = friendsListReducer(this._state.friendsList, action)

    this._callSubscriber(this._state)

  }

  
}

export default store
window.store = store;


 


