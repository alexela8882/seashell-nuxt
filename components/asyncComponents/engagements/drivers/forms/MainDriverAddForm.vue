<template>
  <v-container class="pa-0 ma-0">
    <ValidationObserver ref="observer" v-slot="{ validate }">
      <form ref="form" @submit.prevent="saveDriver">
        <v-row>
          <v-col cols="12" sm="12" md="8" offset-md="2">
            <v-card class="py-5" :color="boxThemed">
              <v-card-text class="d-flex py-0">
                <v-avatar size="40px" tile>
                  <img alt="driver" src="/Vector Smart Object15.png">
                </v-avatar>
                <p :class="`ml-5 display-1 ${textThemed}`">Main Driver</p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text>
                <v-row>
                  <v-col class="py-0" cols="12" sm="12" md="6" offset-md="3">
                    <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                      <v-text-field
                        outlined
                        :error-messages="errors"
                        dense
                        label="Name *"
                        placeholder="eg. `Engagement`, `COVID-19`"
                        v-model="formData.name"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="12" md="6" offset-md="3">
                    <ValidationProvider name="Title" rules="required" v-slot="{ errors }">
                      <v-text-field
                        :error-messages="errors"
                        outlined
                        dense
                        label="Title *"
                        placeholder="eg. `Drivers of Engagement`, `Impact of COVID-19`"
                        v-model="formData.title"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="12" md="6" offset-md="3">
                    <ValidationProvider name="Description" rules="required" v-slot="{ errors }">
                      <v-textarea
                        :error-messages="errors"
                        outlined
                        dense
                        label="Description *"
                        placeholder="Description goes here..."
                        v-model="formData.description"
                      ></v-textarea>
                    </ValidationProvider>
                  </v-col>
                  <v-col class="py-0 d-flex justify-space-between" cols="12" sm="12" md="6" offset-md="3">
                    <div class="d-flex">
                      <v-btn :disabled="loading" type="submit" color="primary" depressed>
                        {{ btnName }}
                        <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                      </v-btn>
                      <v-btn class="mx-1" nuxt-link to="/analysis/drivers" depressed>Cancel</v-btn>
                    </div>
                    <v-btn v-if="edit" :disabled="loading" color="red" dense icon @click.prevent="dialog = true">
                      <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </form>
    </ValidationObserver>
    <MainDriverDeleteForm v-model="dialog" :childItem="formData"></MainDriverDeleteForm>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    }),
    btnName () {
      return this.edit ? 'Update driver' : 'Save driver'
    }
  },

  data: () => ({
    dialog: false,
    edit: false,
    formData: {}
  }),

  methods: {
    saveDriver () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        const dispatch = this.edit ? 'mainDrivers/updateMainDriver' : 'mainDrivers/storeMainDriver'
        this.$store.dispatch(dispatch, this.formData)
        .then((res) => {
          if (res.response) this.$router.push('/analysis/drivers')

          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend
        })
      })
    },

    fillForm (mainDriver) {
      this.formData = Object.assign({}, {
        id: mainDriver.id,
        name: mainDriver.name,
        title: mainDriver.title,
        description: mainDriver.description
      })

      this.edit = true // set to edit mode
    }
  }
}
</script>

<style>

</style>