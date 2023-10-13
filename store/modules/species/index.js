import actions from './actions'

const state = () => ({
  pagedSpecies: [],
  species: [],
  specie: {},
  class: [],
  family: [],
  genus: [],
  gastropodSpecies: [],
  bivalveSpecies: [],
})

const getters = {
  getPagedSpecies (state) { return state.pagedSpecies },
  getSpecies (state) { return state.species },
  getSpecie (state) { return state.specie },
  getClass (state) { return state.class },
  getFamily (state) { return state.family },
  getGenus (state) { return state.genus },
  getGastropodSpecies (state) {return state.gastropodSpecies},
  getBivalveSpecies (state) {return state.bivalveSpecies},
}

const mutations = {
  GET_PAGED_SPECIES (state, payload) { state.pagedSpecies = payload },
  GET_SPECIE (state, payload) { state.specie = payload },
  GET_SPECIES (state, payload) { state.species = payload },
  GET_CLASS (state, payload) { state.class = payload },
  GET_FAMILY (state, payload) { state.family = payload },
  GET_GENUS (state, payload) { state.genus = payload },
  GET_GASTROPOD_SPECIES (state, payload) { state.gastropodSpecies = payload },
  GET_BIVALVE_SPECIES (state, payload) { state.bivalveSpecies = payload },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
