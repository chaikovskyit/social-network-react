import React from 'react'
import {connect} from 'react-redux'
import { 
  follow, 
  unfollow, 
  setCurrentPage, 
  toggleFollowingProgress,
  requestUsers
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { 
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
 
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize); // викликю колбек(діспачу)
  } 

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize) // викликю колбек(діспачу)
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
    users: getUsers(state), 
    pageSize: getPageSize(state), // прокидуємо з редюсера розмір сторіночки
    totalUsersCount: getTotalUsersCount(state), // прокидуємо з редюсера загальну кількість юз
    currentPage: getCurrentPage(state), // прокидуємо з редюсера поточну сторінку
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress, 
  requestUsers, // thunk creator
})(UsersContainer)

