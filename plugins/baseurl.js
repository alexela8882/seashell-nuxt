export default ({}, inject) => {
  const url = 'https://admin.bintanseashells.com/api/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('baseurl', uri)
}
