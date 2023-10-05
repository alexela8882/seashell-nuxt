// import axios from 'axios'

const actions = {
  async fetchSpecies ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('species'))
      commit('GET_SPECIES', response.data)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchPagedSpecies ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`web/index?page=${payload.cpage}`), { params: payload })
      commit('GET_PAGED_SPECIES', response.data)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchClass ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_class'))
      commit('GET_CLASS', response.data.class)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchFamily ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_family'))
      commit('GET_FAMILY', response.data.family)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchGenus ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_genus'))
      commit('GET_GENUS', response.data.genus)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },
}

export default actions
