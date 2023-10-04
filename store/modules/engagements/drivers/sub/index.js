import actions from './actions'

const state = () => ({
  subdrivers: [],
  perDrivers: [],
})

const getters = {
  getSubDrivers (state) {
    return state.subdrivers
  },

  perDrivers (state) {
    return state.perDrivers
  }
}

const mutations = {
  SET_SUB_DRIVERS: (state, payload) => {
    state.subdrivers = payload
  },

  SET_PER_DRIVERS: (state, payload) => {
    state.perDrivers = payload
  },

  STORE_SUB_DRIVER(state, payload) {
    state.subdrivers.unshift(payload)
  },

  UPDATE_SUB_DRIVER(state, payload) {
    state.subdrivers = state.subdrivers.map(subdriver => {
      if (subdriver.id === payload.id) {
        return Object.assign({}, subdriver, payload)
      }
      return subdriver
    })
  },

  DELETE_SUB_DRIVER(state, payload) {
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.subdrivers.findIndex(subdriver => subdriver.id === payload[i].id)
      var index2 = state.perDrivers.findIndex(perDriver => perDriver.id === payload[i].id)
      state.subdrivers.splice(index, 1) // update subdrivers
      state.perDrivers.splice(index2, 1) // update perdrivers
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
