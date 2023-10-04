import axios from 'axios'

const actions = {
  async fetchAnalytics ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('analytics'), payload)
      commit('SET_ANALYTICS', response.data)

      return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchAnalytic ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`analytics/${id}/getAnalytic`))
      commit('SET_ANALYTIC', response.data)

      return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
