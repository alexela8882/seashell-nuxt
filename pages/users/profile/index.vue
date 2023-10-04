<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Profile</div>
          </span>
        </div>
        <v-tabs v-model="tab" class="mt-5" background-color="transparent">
          <v-tab>
            Profile
          </v-tab>
          <v-tab>
            Change password
          </v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="12" sm="12" md="6" offset-md="3">
        <v-tabs-items v-model="tab" class="see-through">
          <v-tab-item transition="false" reverse-transition="false">
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <div class="text-subtitle-2 mb-3">First name</div>
                <v-text-field
                  outlined
                  dense
                  v-model="user.employee.first_name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <div class="text-subtitle-2 mb-3">Last name</div>
                <v-text-field
                  outlined
                  dense
                  v-model="user.employee.last_name"
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="text-subtitle-2 mb-3">E-mail</div>
            <v-text-field
              outlined
              dense
              type="email"
              v-model="user.email"
            ></v-text-field>

            <div class="text-center my-5">
              <v-btn depressed color="primary" @click.stop="updateProfile">Save changes</v-btn>
            </div>
          </v-tab-item>
          <v-tab-item transition="false" reverse-transition="false">
            <ValidationObserver ref="observer">
              <form ref="form" @submit.prevent="changePassword">
                <ValidationProvider name="Old password" rules="required" v-slot="{ errors }">
                  <div class="text-subtitle-2 my-3">Old password</div>
                  <v-text-field
                    :error-messages="errors"
                    outlined
                    dense
                    type="password"
                    :disabled="loading"
                    v-model="credential.old_password"
                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider name="New password" rules="required" v-slot="{ errors }">
                  <div class="text-subtitle-2 my-3">New password</div>
                  <v-text-field
                    :error-messages="errors"
                    outlined
                    dense
                    type="password"
                    :disabled="loading"
                    v-model="credential.new_password"
                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider name="Confirm password" rules="required" v-slot="{ errors }">
                  <div class="text-subtitle-2 my-3">Confirm password</div>
                  <v-text-field
                    :error-messages="errors"
                    outlined
                    dense
                    type="password"
                    :disabled="loading"
                    v-model="credential.confirm_password"
                  ></v-text-field>
                </ValidationProvider>

                <div class="text-center my-5">
                  <v-btn
                    type="submit"
                    depressed
                    color="primary"
                    :disabled="loading"
                    :loading="loading"
                  >Change password</v-btn>
                </div>
              </form>
            </ValidationObserver>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  data () {
    return {
      tab: 0,
      user: false,
      credential: {
        old_password: null,
        new_password: null,
        confirm_password: null
      }
    }
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const user = this.$auth.user
      this.user = Object.assign({}, user)
    },

    async updateProfile () {
      const res = await this.$store.dispatch('users/updateProfile', this.user)
      console.log(res)
    },

    async changePassword () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('users/changePassword', this.credential)
        .then((res) => {
          const errors = res.errors ? res.errors.response.data : ''
          const obj = Object.assign({}, {})
          Object.keys(errors).forEach((key) => {
            const field = this.capitalizeFirstLetter(key.replace("_", " "))
            const message = errors[key]
            const errMsg = `${field}: ${message}`
            obj[field] = message
          })
          this.$refs.observer.setErrors(obj) //set errors from backend

          if (res.response && res.response.user) {
            this.$refs.observer.reset() // reset validator & form
            this.credential = Object.assign({}, {}) // reset data holder
          }
        })
      })
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style>

</style>