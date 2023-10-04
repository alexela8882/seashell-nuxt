import actions from './actions'

const state = () => ({
  albums: []
})

const getters = {
  getAlbums (state) {
    return state.albums
  }
}

const mutations = {
  GET_ALBUMS (state, payload) {
    state.albums = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
