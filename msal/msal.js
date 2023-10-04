import * as Msal from 'msal'

export default class AuthService {
  constructor() {
    const tenantId = 'ee2fc0c6-4a49-4dfe-bcd0-a9b735f30129'
    const client = 'b2aefa1b-6bf5-4c35-a0d7-5f54aa1a6489'
    const redirect = 'http://localhost:3000/azure'
    // const scopeApi = 'api://b2aefa1b-6bf5-4c35-a0d7-5f54aa1a6489/Auth'
    const uri = `https://login.microsoftonline.com/${tenantId}`

    const msalConfig = {
      auth: {
        clientId: client,
        authority: uri,
        redirectUri: redirect,
        cacheLocation: sessionStorage
      }
    }

    this.auth = new Msal.UserAgentApplication(msalConfig)
  }

  login(url) {
    const user = this.auth.getAccount()
    if (user === null) {
      this.auth.loginPopup().then(
        token => {
          location.assign(url)
          console.log(this.auth.getAccount())
          this.test()
        },
        error => {}
      )
    } else {
      location.assign(url)
    }
  }

  logout() {
    this.auth._user = null
    this.auth.logout()
  }

  getAccount() {
    const account = this.auth.getAccount()
    if (!account) {
      return null
    } else {
      return account
    }
  }

  async backendLogin (account) {
    const email = account.userName
    const password = account.aud

    try {
      await this.$auth.loginWith('password_grant', {
        data: {
          username: email,
          password: password
        }
      })
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'You are logged in' })
    } catch (e) {
      this.$snackbar({ icon: 'mdi-close-circle.red', text: 'Invalid credentials' })
    }
  }
}
