const actions = {
    async fetchNotes ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('surveys/notes'))
        commit('SET_NOTES', response.data)
  
        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },
  
    async storeNote ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.post(this.$baseurl('surveys/notes/store'), payload)
        commit('STORE_NOTE', response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Note has been successfully sent' })
  
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
    }
  }
  
  export default actions
  