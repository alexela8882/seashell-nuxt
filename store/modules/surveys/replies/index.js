import actions from './actions'

const state = () => ({
  replies: []
})

const getters = {
  getReplies (state) {
    return state.replies
  }
}

const mutations = {
  SET_REPLIES: (state, payload) => {
    state.replies = payload
  },

  STORE_REPLY(state, payload) {
    state.replies.unshift(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
