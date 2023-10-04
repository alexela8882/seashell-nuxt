import actions from './actions'
import { getField, updateField } from 'vuex-map-fields'

const state = () => ({
  employees: [],
  employee: {}
})

const getters = {
  getField,
  getEmployees (state) {
    return state.employees
  },

  getEmployee (state) {
    return state.employee
  }
}

const mutations = {
  updateField,
  SET_EMPLOYEES: (state, payload) => {
    state.employees = payload
  },

  SET_EMPLOYEE: (state, payload) => {
    state.employee = payload
  },

  STORE_EMPLOYEE: (state, payload) => {
    state.employees.unshift(payload)
  },

  UPDATE_EMPLOYEE: (state, payload) => {
    state.employees = state.employees.map(employee => {
      if (employee.id === payload.id) {
        return Object.assign({}, employee, payload)
      }
      return employee
    })
  },

  DELETE_EMPLOYEE: (state, payload) => {
    console.log(payload)
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.employees.findIndex(epmloyee => epmloyee.id === payload[i].id)
      state.employees.splice(index, 1)
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
