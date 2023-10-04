import actions from './actions'

const state = () => ({
  attributes: [],
  requiredAttributes: [],
  optionalAttributes: [],
})

const getters = {
  getAttributes (state) {
    return state.attributes
  },

  requiredAttributes (state) {
    return state.requiredAttributes
  },

  optionalAttributes (state) {
    return state.optionalAttributes
  }
}

const mutations = {
  SET_ATTRIBUTES: (state, payload) => {
    state.attributes = payload
  },

  SET_REQUIRED_ATTRIBUTES: (state, payload) => {
    state.requiredAttributes = payload
  },

  SET_OPTIONAL_ATTRIBUTES: (state, payload) => {
    state.optionalAttributes = payload
  },

  STORE_ATTRIBUTE: (state, payload) => {
    state.attributes.push(payload)
  },

  UPDATE_ATTRIBUTE: (state, payload) => {
    state.attributes = state.attributes.map(attribute => {
      if (attribute.id === payload.id) {
        return Object.assign({}, attribute, payload)
      }
      return attribute
    })
  },

  DELETE_ATTRIBUTE: (state, payload) => {
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.attributes.findIndex(attribute => attribute.id === payload[i].id)
      state.attributes.splice(index, 1)
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
