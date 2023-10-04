import actions from './actions'

const state = () => ({
  settings: []
})

const getters = {
  getSettings (state) {
    return state.settings
  }
}

const mutations = {
  SET_SETTINGS: (state, payload) => {
    state.settings = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
