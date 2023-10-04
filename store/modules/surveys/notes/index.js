import actions from './actions'

const state = () => ({
  notes: []
})

const getters = {
  getNotes (state) {
    return state.notes
  }
}

const mutations = {
  SET_NOTES: (state, payload) => {
    state.notes = payload
  },

  STORE_NOTE(state, payload) {
    state.notes.unshift(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
