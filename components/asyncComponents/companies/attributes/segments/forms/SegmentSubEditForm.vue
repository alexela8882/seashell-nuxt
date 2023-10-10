<template>
  <ValidationObserver ref="observer" v-slot="{ validate }">
    <form ref="form" @submit.prevent="updateSegment">
      <v-row>
        <v-col sm="12" md="12">
          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <v-text-field
              :error-messages="errors"
              v-model="editFormData.name"
              @keyup="validate"
              label="Segment name"
              placeholder="eg. Web dev"
              outlined
              dense
            ></v-text-field>
          </ValidationProvider>
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

  methods: {

    fillForm (item) {
      this.editFormData = Object.assign({}, item)
    },

    updateSegment () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('segments/updateSegment', this.editFormData)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend

          this.$emit('updateItem', res.response) // update parent on changes
        })
      })
    }
  },
}
</script>

<style scoped>
  
</style>