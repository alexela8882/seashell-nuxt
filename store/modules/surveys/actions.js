const actions = {
  async fetchSurveys ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('surveys'))
      commit('SET_SURVEYS', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getCurrentSurveys ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('surveys/current'))

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async checkSurveyCode ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/code/check'), payload)
      if (response) this.$router.push(`/surveys/${response.data.survey_code}/take`)

    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      this.$snackbar({ icon: 'mdi-close-circle.red', text: "There's an error occured. Please contact your administrator." })

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getSurveys ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/get-surveys'), payload)
      commit('SET_PER_EMPLOYEE_SURVEYS', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateSurveyStatus ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl('surveys/update-status'), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey status has been successfully updated' })

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else this.$snackbar({ icon: 'mdi-close-circle.red', text: "There's an error updating the survey status" })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getSurveyDriverRole ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`surveys/${id}/driver-role`))

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeSurveyAcknowledgement ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/acknowledgements/store'), payload)

      commit('STORE_SURVEY_ACKNOWLEDGEMENT', response.data)
      commit('comments/STORE_SURVEY_ACKNOWLEDGEMENT', response.data, { root: true }) // trigger mutation from comments store module

      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Acknowledgement has been successfully sent' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        const errors = e.response.data
        Object.keys(errors).forEach((key) => {
          const field = key
          const message = errors[key]
          const errMsg = `${field}: ${message}`
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
        })

        return { 'errors': errors } // throw errors on dispatch
      }

      return ''
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeSurveyReply ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/replies/store'), payload)

      commit('STORE_SURVEY_REPLY', response.data)
      commit('comments/STORE_SURVEY_REPLY', response.data, { root: true }) // trigger mutation from comments store module

      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Reply has been successfully sent' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        const errors = e.response.data
        Object.keys(errors).forEach((key) => {
          const field = key
          const message = errors[key]
          const errMsg = `${field}: ${message}`
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
        })

        return { 'errors': errors } // throw errors on dispatch
      }

      return ''
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeSurveyNote ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/notes/store'), payload)

      commit('STORE_SURVEY_NOTE', response.data)
      commit('comments/STORE_SURVEY_NOTE', response.data, { root: true }) // trigger mutation from comments store module

      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Note has been successfully sent' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        const errors = e.response.data
        Object.keys(errors).forEach((key) => {
          const field = key
          const message = errors[key]
          const errMsg = `${field}: ${message}`
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
        })

        return { 'errors': errors } // throw errors on dispatch
      }

      return ''
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async sendAcknowledgement ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/acknowledgements/${payload.id}/update`), payload)

      commit('STORE_SURVEY_ACKNOWLEDGEMENT', response.data)
      commit('comments/STORE_SURVEY_ACKNOWLEDGEMENT', response.data, { root: true }) // trigger mutation from comments store module

      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Acknowledgement succesfully sent to user' })

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      
      const errors = e.response.data
      Object.keys(errors).forEach((key) => {
        const field = key
        const message = errors[key]
        const errMsg = `${field}: ${message}`
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
      })

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async checkTakenSurvey ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/check-taken-survey'), payload)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async takenSurveys ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`surveys/${id}/taken-surveys`))
      commit('SET_TAKEN_SURVEYS', response.data.all)
      commit('SET_DISPLAY_TAKEN_SURVEYS', response.data.display)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async perEmployeeSurveys ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('surveys/per-employee'))
      commit('SET_PER_EMPLOYEE_SURVEYS', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async sendRound ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/send-round'), id)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey round has been successfully submitted' })

      return { 'response': response.data } // return response
    } catch (e) {
      const errCode = e.response.status
      const errors = e.response.data

      if (errCode == 403) {
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errors })
      } else {
        commit('SET_LOADING', false, { root: true })
        Object.keys(errors).forEach((key) => {
          const field = key
          const message = errors[key]
          const errMsg = `${field}: ${message}`
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
        })
      }

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async takeSurvey ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/take'), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey has been successfully saved' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      const errors = e.response.data
      Object.keys(errors).forEach((key) => {
        const field = key
        const message = errors[key]
        const errMsg = `${field}: ${message}`
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
      })

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async submitAnswers ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/submit-answers'), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Asnwers successfully submitted' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      const errors = e.response.data
      Object.keys(errors).forEach((key) => {
        const field = key
        const message = errors[key]
        const errMsg = `${field}: ${message}`
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
      })

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeSurvey ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('surveys/store'), payload)
      commit('STORE_SURVEY', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'New survey has been successfully added' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        const errors = e.response.data
        Object.keys(errors).forEach((key) => {
          const field = key
          const message = errors[key]
          const errMsg = `${field}: ${message}`
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
        })

        return { 'errors': errors } // throw errors on dispatch
      }

      return ''
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateSurvey ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/${payload.id}/update`), payload)
      commit('UPDATE_SURVEY', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey has been successfully updated' })

      return { 'response': response.data } // return response
    } catch (e) {
      const errCode = e.response.status
      const errors = e.response.data

      if (errCode == 403) {
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errors })
      } else {
        commit('SET_LOADING', false, { root: true })
        Object.keys(errors).forEach((key) => {
          const field = key
          const message = errors[key]
          const errMsg = `${field}: ${message}`
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMsg })
        })
      }

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async deleteSurvey ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.delete(this.$baseurl(`surveys/${payload.id}/delete`))
      const item = response.data.item
      commit('DELETE_SURVEY', item)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey has been successfully deleted' })

      return { 'response': response.data } // return response
    } catch (e) {
      const errMessage = e.response.data.message
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errMessage })
        return { 'errors': e } // throw errors on dispatch
      }
      
      return ''
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
