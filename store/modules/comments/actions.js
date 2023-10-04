import axios from 'axios'

const actions = {
  async fetchComments ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('comments'), payload)
      commit('SET_COMMENTS', response.data)

      return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchEndDates ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('round-end-date'))

      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
