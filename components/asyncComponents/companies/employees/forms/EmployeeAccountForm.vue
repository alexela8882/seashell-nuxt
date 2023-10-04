<template>
  <v-container class="px-0 mx-0">
    <ValidationObserver ref="observer" v-slot="{ validate }">
      <form ref="form" @submit.prevent="updateAccount">
        <v-row>
          <v-col class="py-0">
            <v-row>
              <v-col cols="12">
                <div class="text-h5 mb-5">Account</div>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                  <v-text-field
                    :disabled="loading"
                    :error-messages="errors"
                    outlined
                    dense
                    label="E-mail *"
                    v-model="accountFormData.email"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <ValidationProvider name="Password" rules="min:6" v-slot="{ errors }">
                  <v-text-field
                    :disabled="loading"
                    :error-messages="errors"
                    outlined
                    dense
                    label="Password"
                    v-model="accountFormData.password"
                    type="password"
                    persistent-hint
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-autocomplete
                  :items="accountStatus"
                  item-text="text"
                  item-value="value"
                  v-model="accountFormData.is_approved"
                  :color="accountFormData.is_approved == 1 ? 'success' : 'error'"
                  outlined
                  dense
                  label="Account Status"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-btn type="submit" :disabled="loading" depressed color="primary">
              Update account
              <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  props: ['employee'],

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  data () {
    return {
      accountFormData: {},
      accountStatus: [{ text: 'Active', value: 1 }, { text: 'Inactive', value: 0 }]
    }
  },

  async created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      this.accountFormData = Object.assign({}, {
        id: this.employee.user.id,
        email: this.employee.user.email,
        password: null,
        is_approved: this.employee.user.is_approved
      })
    },

    async updateAccount () {
      const account = await this.$store.dispatch('users/updateAccount', this.accountFormData)
    }
  }
}
</script>

<style>

</style>