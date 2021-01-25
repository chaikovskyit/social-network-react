import React from 'react'
import {connect} from 'react-redux'
import { 
  follow, 
  unfollow, 
  setUsers,
  setCurrentPage, 
  setTotalUsersCount, 
  toggleIsFetching
} from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {
 
  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  } 

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(false)
    
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
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
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)

