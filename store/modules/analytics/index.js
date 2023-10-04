import actions from './actions'

const state = () => ({
  analytics: [],
  analytic: []
})

const getters = {
  getAnalytics (state) {
    return state.analytics
  },

  getAnalytic (state) {
    return state.analytic
  }
}

const mutations = {
  SET_ANALYTICS (state, payload) {
    state.analytics = payload
  },

  SET_ANALYTIC (state, payload) {
    state.analytic = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
