import actions from './actions'

const state = () => ({
  schedules: [],
  schedule: {},
  activities: []
})

const getters = {
  getSchedules (state) {
    return state.schedules
  },

  getSchedule (state) {
    return state.schedule
  }
}

const mutations = {
  SET_SCHEDULES: (state, payload) => {
    state.schedules = payload
  },

  SET_ACTIVITIES: (state, payload) => {
    state.activities = payload
  },

  SET_SCHEDULE: (state, payload) => {
    state.schedule = payload
  },

  STORE_SCHEDULE(state, payload) {
    state.schedules.unshift(payload)
  },

  UPDATE_SCHEDULE(state, payload) {
    state.schedules = state.schedules.map(schedule => {
      if (schedule.id === payload.id) {
        return Object.assign({}, schedule, payload)
      }
      return schedule
    })
  },

  DELETE_SCHEDULE(state, payload) {
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.schedules.findIndex(schedule => schedule.id === payload[i].id)
      state.schedules.splice(index, 1)
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
