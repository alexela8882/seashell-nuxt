const actions = {
  async fetchCompanies ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('companies'))
      commit('SET_COMPANIES', response.data)

      return response.data // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async storeCompany ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl('companies/store'), payload)
      commit('STORE_COMPANY', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'New company have been successfully added' })

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

  async updateCompany ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`companies/${payload.id}/update`), payload)
      commit('UPDATE_COMPANY', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} company has been successfully updated` })

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

  async deleteCompany ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.delete(this.$baseurl(`companies/${payload.id}/delete`))
      const item = response.data.item
      commit('DELETE_COMPANY', item)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} company has been successfully deleted` })

      return { 'response': response.data } // return response
    } catch (e) {
      const errMessage = e.response.data.message
      commit('SET_LOADING', false, { root: true })

      this.$snackbar({ icon: 'mdi-close-circle.red', text: errMessage })
      return { 'errors': e } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
