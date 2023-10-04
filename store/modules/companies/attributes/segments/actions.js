const actions = {
    async fetchSegments ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('companies/attributes/segments'))
        commit('SET_SEGMENTS', response.data)
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async perAttributeSegments ({ commit }, attribute_id) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl(`companies/attributes/segments/${attribute_id}/per-attribute`))
        commit('SET_PER_ATTRIBUTE_SEGMENTS', response.data)

        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async storeSegment ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.post(this.$baseurl('companies/attributes/segments/store'), payload)
        commit('STORE_SEGMENT', response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'New segment has been successfully added' })
  
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

    async updateSegment ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.put(this.$baseurl(`companies/attributes/segments/${payload.id}/update`), payload)
        commit('UPDATE_SEGMENT', response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} segment has been successfully updated` })
  
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

    async deleteSegment ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.delete(this.$baseurl(`companies/attributes/segments/${payload.id}/delete`))
        commit('DELETE_SEGMENT', response.data.item)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: `${payload.name} has been successfully delete` })
  
        return { 'response': response.data } // return response
      } catch (e) {
        const errMessage = e.response.data.message
        commit('SET_LOADING', false, { root: true })

        if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
        else {
          this.$snackbar({ icon: 'mdi-close-circle.red', text: errMessage })
          return { 'error': e.response.data } // throw errors on dispatch
        }

        return ''
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    }
  }
  
  export default actions
  