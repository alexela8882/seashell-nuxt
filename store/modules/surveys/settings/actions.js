const actions = {
    async fetchSettings ({ commit }) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.get(this.$baseurl('surveys/settings'))
        commit('SET_SETTINGS', response.data)
  
        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },

    async updateSettings ({ commit }, payload) {
      commit('SET_LOADING', true, { root: true })
      try {
        let response = await this.$axios.put(this.$baseurl('surveys/settings/update'), payload)
        commit('SET_SETTINGS', response.data)
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Settings has been successfully updated' })
  
        return response.data // return response
      } catch (e) {
        commit('SET_LOADING', false, { root: true })
        this.$snackbar({ icon: 'mdi-close-circle.red', text: "There's an error updating the settings" })
      } finally {
        commit('SET_LOADING', false, { root: true })
      }
    },
  }
  
  export default actions
  