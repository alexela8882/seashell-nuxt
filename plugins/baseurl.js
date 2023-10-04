export default ({}, inject) => {
  const url = 'http://localhost:91/api/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('baseurl', uri)
}
