import actions from './actions'

const state = () => ({
  pagedSpecies: [],
  species: [],
  class: [],
  family: [],
  genus: [],
})

const getters = {
  getPagedSpecies (state) { return state.pagedSpecies },
  getSpecies (state) { return state.species },
  getClass (state) { return state.class },
  getFamily (state) { return state.family },
  getGenus (state) { return state.genus },
}

const mutations = {
  GET_PAGED_SPECIES (state, payload) { state.pagedSpecies = payload },
  GET_SPECIES (state, payload) { state.species = payload },
  GET_CLASS (state, payload) { state.class = payload },
  GET_FAMILY (state, payload) { state.family = payload },
  GET_GENUS (state, payload) { state.genus = payload },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
