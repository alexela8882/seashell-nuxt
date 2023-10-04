export default ({}, inject) => {
  const url = 'http://seashell.es/api/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('baseurl', uri)
}
