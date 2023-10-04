import actions from './actions'

const state = () => ({
  companies: [],
})

const getters = {
  getCompanies (state) {
    return state.companies
  }
}

const mutations = {
  SET_COMPANIES: (state, payload) => {
    state.companies = payload
  },

  STORE_COMPANY(state, payload) {
    state.companies.unshift(payload)
  },

  UPDATE_COMPANY(state, payload) {
    state.companies = state.companies.map(company => {
      if (company.id === payload.id) {
        return Object.assign({}, company, payload)
      }
      return company
    })
  },

  DELETE_COMPANY(state, payload) {
    console.log(payload)
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.companies.findIndex(company => company.id === payload[i].id)
      state.companies.splice(index, 1)
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
