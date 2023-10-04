const actions = {
  async fetchEmployees ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('employees'))
      commit('SET_EMPLOYEES', response.data)

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async perEmployee ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl(`employees/${payload.user_id}/per-employee`), payload)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getEmployee ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`employees/${id}/get`))
      commit('SET_EMPLOYEE', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getOptionalAttributes ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`employees/${id}/optional-attributes`))
      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeEmployee ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('employees/store'), payload)
      commit('STORE_EMPLOYEE', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${response.data.fullname} have been successfully added` })

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

  async updateOptionalAttribute ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`employees/update/optional-attributes`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Segments have been successfully updated' })

      return response.data // return response
    } catch (e) {
      if (e.response.status == 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })

      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateEmployee ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`employees/${payload.id}/update`), payload)
      commit('UPDATE_EMPLOYEE', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `Employee ${response.data.fullname} has been successfully updated` })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status == 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
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

  async deleteEmployee ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.delete(this.$baseurl(`employees/${payload.id}/delete`))
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.fullname} have been successfully deleted` })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      if (e.response.status == 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      else {
        const errMessage = e.response.data.message
        this.$snackbar({ icon: 'mdi-close-circle.red', text: errMessage })
        return { 'error': e.response.data.message } // throw errors on dispatch
      }

      return ''
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
