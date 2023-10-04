import actions from './actions'

const state = () => ({
  comments: []
})

const getters = {
  getComments (state) {
    return state.comments
  }
}

const mutations = {
  SET_COMMENTS (state, payload) {
    state.comments = payload
  },

  STORE_SURVEY_REPLY(state, payload) {
    state.comments.map(tsurvey => {
      if (tsurvey.id === payload.taken_survey_id) {
        tsurvey.replies.push(payload)
      }
    })
  },

  STORE_SURVEY_NOTE(state, payload) {
    state.comments.map(tsurvey => {
      if (tsurvey.id === payload.taken_survey_id) {
        tsurvey.notes.push(payload)
      }
    })
  },

  STORE_SURVEY_ACKNOWLEDGEMENT(state, payload) {
    state.comments.map(tsurvey => {
      if (tsurvey.id === payload.taken_survey_id) {
        tsurvey.acknowledgements.push(payload)
      }
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
