export default ({}, inject) => {
  const url = 'http://fe.seashell.es/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('frontendurl', uri)
}
