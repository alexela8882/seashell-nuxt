import { getField, updateField } from 'vuex-map-fields'
import Vue from 'vue'
import Vuetify from 'vuetify'

import albums from './modules/albums'
import users from './modules/users'
import companies from './modules/companies'
import attributes from './modules/companies/attributes'
import segments from './modules/companies/attributes/segments'
import employees from './modules/companies/employees'
import mainDrivers from './modules/engagements/drivers/main'
import drivers from './modules/engagements/drivers'
import subdrivers from './modules/engagements/drivers/sub'
import surveys from './modules/surveys'
import surveyReplies from './modules/surveys/replies'
import surveyNotes from './modules/surveys/notes'
import surveySchedules from './modules/surveys/schedules'
import surveySettings from './modules/surveys/settings'
import analytics from './modules/analytics'
import comments from './modules/comments'
import roles from './modules/roles'

export const state = () => ({
  loading: false,
  snackbar: false,
  snackbarIcon: null,
  snackbarIconColor: null,
  snackbarText: null,
  snackTimeout: 0,

  savingSnackbar: false,
  savingSnackbarIcon: null,
  savingSnackbarIconColor: null,
  savingSnackbarText: null,
  savingSnackTimeout: 0,
  darkTheme: false,
  colorThemed: null,
  textThemed: null,
  boxThemed: null
})

export const getters = {
  getField
}

export const mutations = {
  updateField,
  SET_LOADING: (state, payload) => {
    state.loading = payload
  },

  CALL_SNACKBAR: (state, payload) => {
    state.loading = false // set loading to false

    state.snackbar = payload.status
    state.snackbarIcon = payload.icon
    state.snackbarIconColor = payload.iconColor
    state.snackbarText = payload.message
    state.snackbarTimeout = payload.timeout
  },

  CLOSE_SNACKBAR(state) {
    state.snackbarTimeout = -1
    state.snackbar = false
  },

  CALL_SAVING_SNACKBAR: (state, payload) => {
    state.loading = false // set loading to false

    state.savingSnackbar = payload.status
    state.savingSnackbarIcon = payload.icon
    state.savingSnackbarIconColor = payload.iconColor
    state.savingSnackbarText = payload.message
    state.savingSnackbarTimeout = payload.timeout
  },

  CLOSE_SAVING_SNACKBAR(state) {
    state.savingSnackbarTimeout = -1
    state.savingSnackbar = false
  },

  SET_THEME (state, darkTheme) {
    state.darkTheme = darkTheme
    state.colorThemed = darkTheme ? '#ffffff' : 'primary'
    state.textThemed = darkTheme ? 'white--text' : 'primary--text'
    state.boxThemed = darkTheme ? 'customAccent' : ''
  }
}

export const actions = {
  // nuxtServerInit ({ state }, { app }) {
  //   console.log(app.$auth.getToken('password_grant'))
  // }
}

export const modules = {
  albums: albums,
  users: users,
  companies: companies,
  attributes: attributes,
  segments: segments,
  employees: employees,
  mainDrivers: mainDrivers,
  drivers: drivers,
  subdrivers: subdrivers,
  surveys: surveys,
  surveyReplies: surveyReplies,
  surveySchedules: surveySchedules,
  surveySettings: surveySettings,
  analytics: analytics,
  surveyNotes: surveyNotes,
  comments: comments,
  roles: roles
}

export const strict = false // important when mutating multiRowField store
