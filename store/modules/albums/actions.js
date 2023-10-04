import axios from 'axios'

const actions = {
  async fetchAlbums ({ commit }) {
    const url = 'https://jsonplaceholder.typicode.com/albums'
    try {
      let albums = await axios.get(url)
      commit('GET_ALBUMS', albums.data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
