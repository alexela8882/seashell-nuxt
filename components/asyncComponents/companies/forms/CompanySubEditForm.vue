<template>
  <ValidationObserver ref="observer" v-slot="{ validate }">
    <form ref="form" @submit.prevent="updateCompany">
      <v-row>
        <v-col sm="12" md="6">
          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <v-text-field
              :disabled="loading"
              :error-messages="errors"
              v-model="editFormData.name"
              @keyup="validate"
              label="Company name"
              placeholder="eg. Esco Global"
              outlined
              dense
            ></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="sector" rules="required" v-slot="{ errors }">
            <v-autocomplete
              :disabled="loading"
              :error-messages="errors"
              v-model="editFormData.sector"
              :items="defaultChildItem.sectors"
              label="Sector"
              outlined
              dense
            ></v-autocomplete>
          </ValidationProvider>

          <ValidationProvider name="location" rules="required" v-slot="{ errors }">
            <v-autocomplete
              :disabled="loading"
              :error-messages="errors"
              v-model="editFormData.location"
              :items="defaultChildItem.locations"
              label="Location"
              outlined
              dense
            ></v-autocomplete>
          </ValidationProvider>
        </v-col>
        <v-col sm="12" md="6">
          <ValidationProvider name="size" rules="required" v-slot="{ errors }">
            <v-autocomplete
              :disabled="loading"
              :error-messages="errors"
              v-model="editFormData.size"
              :items="defaultChildItem.sizes"
              label="Size"
              outlined
              dense
            ></v-autocomplete>
          </ValidationProvider>

          <ValidationProvider name="timezone" rules="required" v-slot="{ errors }">
            <v-autocomplete
              :disabled="loading"
              :error-messages="errors"
              v-model="editFormData.timezone"
              :items="defaultChildItem.timezones"
              label="Timezone"
              outlined
              dense
            ></v-autocomplete>
          </ValidationProvider>

          <v-img src="/esco-logo-i.png"></v-img>
        </v-col>
      </v-row>
    </form>
  </ValidationObserver>
</template>

<script>

import { mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  props: {
    childItem: Object,
    defaultChildItem: Object,
    title: String
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  
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

    async fillForm () {
      const item = await this.childItem // needed for initial await
      this.editFormData = Object.assign({}, await this.childItem) // note: don't assign `item` constant
    },

    updateCompany () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('companies/updateCompany', this.editFormData)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend
        })
      })
    }
  },
}
</script>

<style scoped>
  
</style>