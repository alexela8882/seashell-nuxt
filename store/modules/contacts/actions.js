import axios from 'axios'

const actions = {
  async createContactMessage ({ commit }, payload) {
    commit('SET_LOADING', true, { root: true })
    try {
      let response = await this.$axios.post(this.$baseurl(`web/create_contact_message`), payload)
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Message successfully sent.' })

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
