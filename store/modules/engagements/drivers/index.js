import actions from './actions'

const state = () => ({
  drivers: [],
  perMainDrivers: [],
})

const getters = {
  getDrivers (state) {
    return state.drivers
  },

  perMainDrivers (state) {
    return state.perMainDrivers
  }
}

const mutations = {
  SET_DRIVERS: (state, payload) => {
    state.drivers = payload
  },

  SET_PER_MAIN_DRIVERS: (state, payload) => {
    state.perMainDrivers = payload
  },

  STORE_DRIVER(state, payload) {
    state.drivers.unshift(payload)
  },

  UPDATE_DRIVER(state, payload) {
    state.drivers = state.drivers.map(driver => {
      if (driver.id === payload.id) {
        return Object.assign({}, driver, payload)
      }
      return driver
    })
  },

  DELETE_DRIVER(state, payload) {
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.drivers.findIndex(driver => driver.id === payload[i].id)
      state.drivers.splice(index, 1)
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
