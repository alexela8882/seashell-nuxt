export default ({ app, redirect }) => {
  if (app.$auth.loggedIn) { redirect('/') }
}
