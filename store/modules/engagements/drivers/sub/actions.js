const actions = {
  async fetchSubDrivers ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('engagements/sub-drivers'))
      commit('SET_SUB_DRIVERS', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async getSubDrivers ({ commit }, id) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl(`engagements/sub-drivers/${id}/get-subdrivers`))
      commit('SET_PER_DRIVERS', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeSubDriver ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('engagements/sub-drivers/store'), payload)
      commit('STORE_SUB_DRIVER', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'New subdriver have been successfully added' })

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

  async updateSubDriver ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`engagements/sub-drivers/${payload.id}/update`), payload)
      commit('UPDATE_SUB_DRIVER', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} subdriver has been successfully updated` })

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

  async deleteSubDriver ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.delete(this.$baseurl(`engagements/sub-drivers/${payload.id}/delete`))
      const item = response.data.item
      commit('DELETE_SUB_DRIVER', item)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} subdriver has been successfully deleted` })

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
