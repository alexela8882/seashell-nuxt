export default ({ store }, inject) => {
  const args = arg => {

    store.commit('CLOSE_SNACKBAR') // close previous snackbar

    const splitIcon = arg.icon.split('.')
    const icon = splitIcon[0]
    const iconColor = splitIcon[1]
    let payload = {
      status: true,
      icon: icon,
      iconColor: iconColor,
      message: arg.text,
      timeout: 5000
    }
    store.commit('CALL_SAVING_SNACKBAR', payload)
    setTimeout(() => {
      store.commit('CLOSE_SAVING_SNACKBAR')
    }, payload.timeout)
  }

  inject('savingSnackbar', args)
}