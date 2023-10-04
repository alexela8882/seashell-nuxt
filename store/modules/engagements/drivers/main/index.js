import actions from './actions'

const state = () => ({
  drivers: [],
  mainWithDrivers: [],
})

const getters = {
  getMainDrivers (state) {
    return state.drivers
  },

  getMainWithDrivers (state) {
    return state.mainWithDrivers
  }
}

const mutations = {
  SET_MAIN_DRIVERS: (state, payload) => {
    state.drivers = payload
  },

  ADD_MAIN_WITH_HEADERS: (state, payload) => {
    state.mainWithDrivers.drivers.map(driver => {
      if (driver.id === payload.driver) {
        const subdrivers = driver.subdrivers
        subdrivers.map(subdriver => {
          if (subdriver.id === payload.engagement_sub_driver_id) {
            subdriver.surveys.push(payload)
          }
        })
      }
    })
  },

  UPDATE_MAIN_WITH_HEADERS: (state, payload) => {
    state.mainWithDrivers.drivers.map(driver => {
      if (driver.id === payload.driver) {
        const subdrivers = driver.subdrivers
        subdrivers.map(subdriver => {
          if (subdriver.id === payload.engagement_sub_driver_id) {
            var index = subdriver.surveys.findIndex(survey => survey.id === payload.id)
            subdriver.surveys[index] = Object.assign({}, payload)
          }
        })
      }
    })
  },

  DELETE_MAIN_WITH_HEADERS: (state, payload) => {
    const item = payload.item[0]
    state.mainWithDrivers.drivers.map(driver => {
      if (driver.id === item.driver) {
        const subdrivers = driver.subdrivers
        subdrivers.map(subdriver => {
          if (subdriver.id === item.engagement_sub_driver_id) {
            var index = subdriver.surveys.findIndex(survey => survey.id === item.id)
            subdriver.surveys.splice(index, 1)
          }
        })
      }
    })
  },

  SET_MAIN_WITH_DRIVERS: (state, payload) => {
    state.mainWithDrivers = payload
  },

  STORE_MAIN_DRIVER(state, payload) {
    state.drivers.unshift(payload)
  },

  UPDATE_MAIN_DRIVER(state, payload) {
    state.drivers = state.drivers.map(driver => {
      if (driver.id === payload.id) {
        return Object.assign({}, driver, payload)
      }
      return driver
    })
  },

  DELETE_MAIN_DRIVER(state, payload) {
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
