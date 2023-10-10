<template>
  <ValidationObserver ref="observer" v-slot="{ validate }">
    <form ref="form" @submit.prevent="updateAttribute">
      <v-row>
        <v-col sm="12" md="12">
          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <v-text-field
              :error-messages="errors"
              v-model="editFormData.name"
              @keyup="validate"
              label="Attribute name"
              placeholder="eg. Web dev"
              outlined
              dense
            ></v-text-field>
          </ValidationProvider>

          <!-- <v-btn-toggle
            v-model="editFormData.optional"
            mandatory
            class="d-flex flex-column"
          >
            <v-btn class="text-truncate" :color="!editFormData.optional ? optionalColor : 'white'">
              <v-icon left>mdi-thumb-up-outline</v-icon>
              Consent required to collect data
            </v-btn>
            <v-btn class="text-truncate" :color="editFormData.optional ? optionalColor : 'white'">
              <v-icon left>mdi-thumb-down-outline</v-icon>
              Consent not required to collect data
            </v-btn>
          </v-btn-toggle> -->

          <div class="d-sm-flex justify-space-around align-center justify-center">
            <v-card
              outlined
              class="my-2 mr-sm-1"
              @click="editFormData.optional = 0"
              :color="editFormData.optional == 0 ? 'green' : ''"
              :dark="editFormData.optional == 0"
            >
              <v-card-text class="d-flex">
                <v-icon left x-large>check_circle_outline</v-icon>
                <div class="text-body-2 align-self-center font-weight-bold">Consent required to collect data</div>
              </v-card-text>
            </v-card>

            <v-card
              outlined
              class="my-2 ml-sm-1"
              @click="editFormData.optional = 1"
              :color="editFormData.optional == 1 ? 'red' : ''"
              :dark="editFormData.optional == 1"
            >
              <v-card-text class="d-flex">
                <v-icon left x-large>highlight_off</v-icon>
                <div class="text-subtitle-2 align-self-center">Consent not required to collect data</div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </form>
  </ValidationObserver>
</template>

<script>

import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  data() {
    return {
      editFormData: {}
    }
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },

  computed: {
    optionalColor () {
      const color = this.editFormData.optional ? 'red lighten-4' : 'green lighten-4'
      return color
    }
  },

  methods: {
    fillForm (item) {
      this.editFormData = Object.assign({}, item)
    },

    updateAttribute () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('attributes/updateAttribute', this.editFormData)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend

          if (res) this.$emit('updateItem', res.response) // update parent on changes
        })
      })
    }
  },
}
</script>

<style scoped>
  
</style>