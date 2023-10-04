<template>
  <v-container>
    <div v-if="isLoading" class="text-h5 text-center">Loading...</div>
    <div v-else>
      <div v-if="isApproved" class="text-h5 text-center">Logging in. Please wait...</div>
      <div v-else>
        <v-card outlined>
          <v-card-title>
            <span v-if="isRequested">You already requested an access. Please wait for admin to approve</span>
            <span v-else>Your account doesn't have access to this app</span>
          </v-card-title>
          <v-card-text>
            <v-text-field label="E-mail" type="text" disabled v-model="azureForm.email"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <div class="d-flex flex-column" style="width: 100%;">
              <div>
                <v-btn color="primary" @click="requestAccess" :disabled="isRequested">Request Access</v-btn>
                <v-btn color="error" outlined @click="logout">Signout Microsoft</v-btn>
              </div>
              <a href="javascript:location.reload();" class="text-caption mt-2">Admin approved your request? Click here to refresh this page.</a>
            </div>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>

export default {
  layout: 'guest',

  data () {
    return {
      azureForm: {},
      isRequested: false,
      isApproved: false,
      isLoading: true
    }
  },

  created () {
    this.initialize()
  },

  computed: {
    account: function() {
      if (process.browser) return this.$AuthService.getAccount()
    }
  },

  methods: {
    async initialize () {
      if (this.$auth.user) this.$router.push("/") // return to home page
      else {
        const account = this.account
        const email = account ? account.userName : null
        const aud = account ? account.idToken.aud : null

        this.azureForm = Object.assign({}, { email: email, aud: aud })

        const res = await this.$axios.post(this.$baseurl('login/azure/check'), this.azureForm)

        if (res.status === 200) {
          this.isLoading = false

          if (Object.keys(res.data).length === 0) this.isRequested = false
          else {
            this.isRequested = true
            if (res.data.is_approved) {
              this.isApproved = true
              this.backendLogin(this.azureForm)
            } else this.isApproved = false
          }
        } else this.$router.push("/login") // go to login page
      }
    },

    async requestAccess () {
      const url = 'http://localhost:91/api/login/azure'
      window.open(url) // open to new window
      window.close() // close current window
    },

    logout () {
      if (process.browser) return this.$AuthService.logout()
    },

    async backendLogin (azureForm) {
      this.$store.commit('SET_LOADING', true)
      try {
        await this.$auth.loginWith('password_grant', {
          data: {
            username: azureForm.email,
            password: null,
            isAzureLogin: true
          }
        })
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'You are logged in' })
      } catch (e) {
        this.$snackbar({ icon: 'mdi-close-circle.red', text: 'Invalid credentials' })
      }
    }
  }
}
</script>

<style>

</style>