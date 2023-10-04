import axios from 'axios'

export default ({ store }, inject) => {
  const args = async arg => {
    try {
      const { sortBy, sortDesc, page, itemsPerPage } = arg.options
      let response = await axios.get(arg.url.path)
      let items = arg.url.target ? response.data.items : response.data
      const total = items.length

      if (sortBy.length === 1 && sortDesc.length === 1) {
        items = items.sort((a, b) => {
          const sortA = a[sortBy[0]]
          const sortB = b[sortBy[0]]

          if (sortDesc[0]) {
            if (sortA < sortB) return 1
            if (sortA > sortB) return -1
            return 0
          } else {
            if (sortA < sortB) return -1
            if (sortA > sortB) return 1
            return 0
          }
        })
      }

      if (itemsPerPage > 0) {
        items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
      }

      return { items, total }
    } catch (e) {
      console.log(e)
      store.commit('SET_LOADING', false, { root: false })
    } finally {
      store.commit('SET_LOADING', false, { root: false })
    }
  }
  
  inject('getDataFromApi', args)
}
