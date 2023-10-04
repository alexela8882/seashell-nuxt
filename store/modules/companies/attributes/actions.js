const actions = {
    async optionalAttributes ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('companies/attributes/optional'))
        commit('SET_OPTIONAL_ATTRIBUTES', response.data)

        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async withHeaders ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('companies/attributes/with-headers'))

        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async requiredAttributes ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('companies/attributes/required'))
        commit('SET_REQUIRED_ATTRIBUTES', response.data)

        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async fetchAttributes ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('companies/attributes'))
        commit('SET_ATTRIBUTES', response.data)

        return response // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })

        return e.response
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async storeAttribute ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.post(this.$baseurl('companies/attributes/store'), payload)
        commit('STORE_ATTRIBUTE', response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'New attribute has been successfully added' })
  
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

    async updateAttribute ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.put(this.$baseurl(`companies/attributes/${payload.id}/update`), payload)
        commit('UPDATE_ATTRIBUTE', response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} attribute has been successfully updated` })
  
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

    async deleteAttribute ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.delete(this.$baseurl(`companies/attributes/${payload.id}/delete`))
        commit('DELETE_ATTRIBUTE', response.data.item)
        console.log(response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} has been successfully deleted` })
  
        return { 'response': response.data } // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
  
        return { 'error': e.response.data } // throw errors on dispatch
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    }
  }
  
  export default actions
  