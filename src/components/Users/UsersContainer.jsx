import React from 'react'
import {connect} from 'react-redux'
import { 
  follow, 
  unfollow, 
  setCurrentPage, 
  toggleFollowingProgress,
  getUsers
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
 
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize); // викликю колбек(діспачу)
  } 

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize) // викликю колбек(діспачу)
  }

  render() {

    return(
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users, 
    pageSize: state.usersPage.pageSize, // прокидуємо з редюсера розмір сторіночки
    totalUsersCount: state.usersPage.totalUsersCount, // прокидуємо з редюсера загальну кількість юз
    currentPage: state.usersPage.currentPage, // прокидуємо з редюсера поточну сторінку
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress, 
  getUsers, // thunk creator
})(UsersContainer)

