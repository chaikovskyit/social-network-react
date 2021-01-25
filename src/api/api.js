import * as axios from 'axios'
import { follow } from '../redux/usersReducer'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {"API-KEY": "9fa573b4-bf7a-4f8d-94cd-6ac32f07c7f9"}
})


export const usersAPI = {

  getUsers(currentPage, pageSize) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
    )
  },

  follow(userId) {
    return (
      instance.post(`follow/${userId}`)
    )
  },

  unfollow(userId) {
    return (
      instance.delete(`follow/${userId}`)
    )
  },

  getProfile(userId) {
    return (
      instance.get(`profile/${userId}`)
    )
  }
}

export const authAPI = {
  me() {
    return (
      instance.get(`auth/me`)
    )
  }

}





