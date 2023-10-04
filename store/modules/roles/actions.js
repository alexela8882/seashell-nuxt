import axios from 'axios'

const actions = {
  async fetchRoles ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('roles'))
      commit('GET_ROLES', response.data)
      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async fetchPermissions ({ commit }) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.get(this.$baseurl('roles/permissions'))
      commit('GET_PERMISSIONS', response.data)
      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updateUsers ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`roles/${payload.id}/update-role-users`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Role users has been successfully updated' })
      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async updatePermissions ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.put(this.$baseurl(`roles/${payload.id}/update-role-permissions`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Role permissions has been successfully updated' })
      return response.data
    } catch (e) {
      commit('SET_LOADING', false, { root: true })
      return e.response
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

export default actions
