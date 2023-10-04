import actions from './actions'

const state = () => ({
  roles: [],
  permissions: []
})

const getters = {
  getRoles (state) {
    return state.roles
  },

  getPermissions (state) {
    return state.permissions
  }
}

const mutations = {
  SET_ROLES (state, payload) {
    state.roles.unshift(payload)
  },
  GET_ROLES (state, payload) {
    state.roles = payload
  },
  GET_PERMISSIONS (state, payload) {
    state.permissions = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
