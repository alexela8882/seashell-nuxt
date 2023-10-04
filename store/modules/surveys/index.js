import actions from './actions'

const state = () => ({
  surveys: [],
  takenSurveys: [],
  displayTakenSurveys: [],
  perEmployeeSurveys: []
})

const getters = {
  getSurveys (state) {
    return state.surveys
  },

  getTakenSurveys (state) {
    return state.takenSurveys
  },

  getDisplayTakenSurveys (state) {
    return state.displayTakenSurveys
  },

  perEmployeeSurveys (state) {
    return state.perEmployeeSurveys
  }
}

const mutations = {
  SET_SURVEYS: (state, payload) => {
    state.surveys = payload
  },

  SET_TAKEN_SURVEYS: (state, payload) => {
    state.takenSurveys = payload
  },

  SET_DISPLAY_TAKEN_SURVEYS: (state, payload) => {
    state.displayTakenSurveys = payload
  },

  SET_PER_EMPLOYEE_SURVEYS: (state, payload) => {
    state.perEmployeeSurveys = payload
  },

  STORE_SURVEY(state, payload) {
    state.surveys.unshift(payload)
  },

  STORE_SURVEY_ACKNOWLEDGEMENT(state, payload) {
    state.displayTakenSurveys.map(tsurvey => {
      if (tsurvey.id === payload.taken_survey_id) {
        tsurvey.acknowledgements.push(payload)
      }
    })
  },

  STORE_SURVEY_REPLY(state, payload) {
    state.displayTakenSurveys.map(tsurvey => {
      if (tsurvey.id === payload.taken_survey_id) {
        tsurvey.replies.push(payload)
      }
    })
  },

  STORE_SURVEY_NOTE(state, payload) {
    state.displayTakenSurveys.map(tsurvey => {
      if (tsurvey.id === payload.taken_survey_id) {
        tsurvey.notes.push(payload)
      }
    })
  },

  UPDATE_SURVEY(state, payload) {
    state.surveys = state.surveys.map(survey => {
      if (survey.id === payload.id) {
        return Object.assign({}, survey, payload)
      }
      return survey
    })
  },

  DELETE_SURVEY(state, payload) {
    for (var i = payload.length - 1; i >= 0; i--) {
      var index = state.surveys.findIndex(survey => survey.id === payload[i].id)
      state.surveys.splice(index, 1)
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
