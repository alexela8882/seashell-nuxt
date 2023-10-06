export default ({}, inject) => {
  const url = 'http://localhost:8000/api/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('baseurl', uri)
}
