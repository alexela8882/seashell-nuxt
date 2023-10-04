import actions from './actions'

const state = () => ({
  segments: [],
  perAttributeSegments: [],
})

const getters = {
  getSegments (state) {
    return state.segments
  },

  perAttributeSegments (state) {
    return state.perAttributeSegments
  }
}

const mutations = {
  SET_SEGMENTS: (state, payload) => {
    state.segments = payload
  },

  SET_PER_ATTRIBUTE_SEGMENTS: (state, payload) => {
    state.perAttributeSegments = payload
  },

  STORE_SEGMENT: (state, payload) => {
    state.perAttributeSegments.unshift(payload)
  },

  UPDATE_SEGMENT: (state, payload) => {
    // const index = state.perAttributeSegments.findIndex(segment => segment.id === payload.id)
    // state.perAttributeSegments[index] = Object.assign({}, payload)

    state.perAttributeSegments = state.perAttributeSegments.map(segment => {
      if (segment.id === payload.id) {
        return Object.assign({}, segment, payload)
      }
      return segment
    })
  },

  DELETE_SEGMENT: (state, payload) => {
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.perAttributeSegments.findIndex(segment => segment.id === payload[i].id)
      state.perAttributeSegments.splice(index, 1)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
