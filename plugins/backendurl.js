export default ({}, inject) => {
  const url = 'https://admin.bintanseashells.com/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('backendurl', uri)
}
