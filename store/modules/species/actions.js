// import axios from 'axios'

const actions = {
  async fetchSpecie ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('web/view'), payload)
      commit('GET_SPECIE', response.data)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

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

  async fetchFamily ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_family'),  payload )
      commit('GET_FAMILY', response.data.family)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchGenus ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_genus'), payload )
      commit('GET_GENUS', response.data.genus)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },
  async fetchGastropodSpecies({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_random_species'), payload )
      commit('GET_GASTROPOD_SPECIES', response.data)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },
  async fetchBivalveSpecies({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('web/get_random_species'), payload )
      commit('GET_BIVALVE_SPECIES', response.data)
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async createContactMessage ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl(`web/create_contact_message`), payload)
    //   this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Message successfully sent.' })
      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },
}

export default actions
