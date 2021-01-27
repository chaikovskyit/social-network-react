import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }
}

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect
)(Dialogs)

