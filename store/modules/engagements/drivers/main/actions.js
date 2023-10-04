const actions = {
  async fetchMainDrivers ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('engagements/main-drivers'))
      commit('SET_MAIN_DRIVERS', response.data)

      return response // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return e.response // return response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getMainDrivers ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`engagements/main-drivers/${id}/get`))
      commit('SET_MAIN_WITH_DRIVERS', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeMainDriver ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('engagements/main-drivers/store'), payload)
      commit('STORE_MAIN_DRIVER', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'New driver have been successfully added' })

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

  async updateMainDriver ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`engagements/main-drivers/${payload.id}/update`), payload)
      commit('UPDATE_MAIN_DRIVER', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} driver has been successfully updated` })

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

  async deleteMainDriver ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.delete(this.$baseurl(`engagements/main-drivers/${payload.id}/delete`))
      const item = response.data.item
      commit('DELETE_MAIN_DRIVER', item)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} driver has been successfully deleted` })

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
