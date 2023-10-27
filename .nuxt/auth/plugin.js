import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/","home":"/dashboard","callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"password_grant"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // password_grant
  $auth.registerStrategy('password_grant', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/api/nuxt2/login","method":"post","propertyName":"access_token"},"logout":{"url":"/api/nuxt2/logout","method":"post"},"user":{"url":"api/user","method":"get","propertyName":"user"}},"_name":"password_grant"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
