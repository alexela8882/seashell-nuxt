<template>
<v-container style="height: 100% !important;">
  <v-card
    class="d-flex align-center flex-wrap see-through"
    flat
    tile
    height="100%"
  >
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card
          class="d-flex align-center flex-wrap see-through"
          flat
          tile
          min-height="100%"
        >
          <v-img contain width="300" height="120" src="/ESCO LIFESCIENCES GROUP_LOGO.png"></v-img>
          <v-img contain width="300" height="70" src="/MULTICOLORDOT SITE LOGO_FINAL.png"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card elevation="5" class="px-5" light>
          <v-card-text>
            <div class="text-h4 mb-5 primary--text">Login</div>
            <v-form :disabled="loading" @submit.prevent>
              <div class="text-body-1 primary--text font-weight-bold">User name</div>
              <v-text-field
                autofocus
                outlined
                dense
                v-model="formData.email"
                type="text"
                @keydown.enter="login"
              ></v-text-field>

              <div class="text-body-1 primary--text font-weight-bold">Password</div>
              <v-text-field
                outlined
                dense
                v-model="formData.password"
                type="password"
                @keydown.enter="login"
              ></v-text-field>
            </v-form>

            <v-btn
              depressed
              color="primary"
              @click="login"
              :loading="loading"
              :disabled="loading"
              block
              >Login</v-btn
            >

            <div class="separator mb-4 mt-4">OR</div>

            <v-btn
              depressed
              color="success"
              @click="msalLogin"
              :loading="loading"
              :disabled="loading"
              block
              >Signin with Microsoft&nbsp;<v-icon>mdi-microsoft</v-icon></v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> 
  </v-card>
</v-container>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'

export default {
  middleware: ['notAuthenticated'],

  layout: 'guest',

  head: {
    title: 'Login'
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  asyncData () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },

  created () {
    this.$store.commit('SET_LOADING', true, { root: true })

    if (this.$auth.loggedIn) {
      this.$router.push('/')
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'Welcome back!' })
    }

    this.$store.commit('SET_LOADING', false, { root: true })
  },

  methods: {
    async login () {
      this.$store.commit('SET_LOADING', true)
      try {
        await this.$auth.loginWith('password_grant', {
          data: {
            username: this.formData.email,
            password: this.formData.password,
            isAzureLogin: false
          }
        })
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'You are logged in' })
      } catch (e) {
        if (e.response.status === 500) this.$snackbar({ icon: 'mdi-close-circle.red', text: 'Please enter your credentials' })
        else if (e.response.status === 403) this.$snackbar({ icon: 'mdi-close-circle.red', text: e.response.data })
      }
    },

    msalLogin () {
      this.$AuthService.login('/azure')
    }
  }
}
</script>

<style scoped>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgb(138, 137, 137);
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}
</style>
