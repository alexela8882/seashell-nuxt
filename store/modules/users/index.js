import actions from './actions'

const state = () => ({
  users: [],
  totalUsers: 0
})

const getters = {
  getUsers (state) {
    return state.users
  },
  getTotalUsers (state) {
    return state.totalUsers
  }
}

const mutations = {
  GET_USERS (state, payload) {
    state.users = payload
  },
  GET_TOTAL_USERS (state, payload) {
    state.totalUsers = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
