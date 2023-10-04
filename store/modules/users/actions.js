import axios from 'axios'

const actions = {
  async fetchOpenUsers ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('users/open'))
      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchUsers ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await axios.get(this.$baseurl('users'))
      commit('GET_USERS', response.data.items)
      commit('GET_TOTAL_USERS', response.data.total)
    } catch (e) {
      console.log(e)
      commit('SET_LOADING', false, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateAccount ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`users/update-account`), payload)
      // commit('UPDATE_USER', response.data)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Account has been successfully updated' })

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
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateProfile ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`users/update-profile`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Profile has been successfully updated' })

      return { 'response': response.data } // return response
    } catch (e) {
      const errors = e.response.data
      commit('SET_LOADING', false, { root: true })
      this.$snackbar({ icon: 'mdi-close-circle.red', text: errors })

      return { 'errors': errors } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async changePassword ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`users/change-password`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Password changed succesfully.' })

      return { 'response': response.data } // return response
    } catch (e) {
      commit('SET_LOADING', false, { root: true })

      return { 'errors': e } // throw errors on dispatch
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
