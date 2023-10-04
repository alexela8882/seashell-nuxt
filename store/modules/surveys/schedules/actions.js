const actions = {
  async fetchSchedules ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('surveys/schedules'))
      commit('SET_SCHEDULES', response.data)

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getActivities ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('surveys/schedules/get-activities'))
      commit('SET_ACTIVITIES', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async sendTestRound ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    
    // call saving snackbar
    // this.$savingSnackbar({ icon: 'send.green', text: 'Sending' })

    try {
      let response = await this.$axios.post(this.$baseurl(`surveys/schedules/send-test-round`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Test round successfully sent' })

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async sendReminder ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl(`surveys/schedules/${payload.id}/send-reminder`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey reminder successfully sent' })

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateSchedule ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/schedules/${payload.id}/update-schedule`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey schedule successfully updated' })

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateFrequency ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/schedules/${payload.id}/update-frequency`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey frequency successfully updated' })

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      
      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        const errMessage = e.response.data.message
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errMessage })
      }

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateCed ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/schedules/${payload.id}/update-ced`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Current end date successfully updated' })

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateSettings ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/schedules/${payload.id}/update-settings`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Settings successfully updated' })

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getSchedule ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`surveys/schedules/${id}/get`))
      commit('SET_SCHEDULE', response.data)

      return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeSchedule ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl('surveys/schedules/store'), payload)
      commit('STORE_SCHEDULE')
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey schedule has been successfully added' })

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      this.$snackbar({ icon: 'mdi-close-circle.red', text: "There's an error updating the survey status" })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateSegment ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`surveys/schedules/${payload.id}/update-segment`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Survey schedule has been successfully updated' })

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else this.$snackbar({ icon: 'mdi-close-circle.red', text: "There's an error updating the survey status" })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
