<template>
  <v-container class="px-0 mx-0">
    <ValidationObserver ref="observer" v-slot="{ validate }">
      <form ref="form" @reset.prevent="validate" @submit.prevent="saveEmployee">
        <div class="text-h5 my-5">Personal</div>
        <v-row>
          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="First name" rules="required" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                outlined
                dense
                label="First name *"
                placeholder="eg. 'John'"
                v-model="editFormData.first_name"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="Last name" rules="required" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                outlined
                dense
                label="Last name *"
                placeholder="eg. 'Doe'"
                v-model="editFormData.last_name"
              >
              </v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-text-field
              outlined
              dense
              label="Middle name"
              v-model="editFormData.middle_name"
              placeholder="eg. 'Cruz'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-text-field
              outlined
              dense
              label="Suffix"
              v-model="editFormData.suffix"
              placeholder="eg. 'Jr.'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="Address" rules="required" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                outlined
                dense
                label="Address *"
                v-model="editFormData.address"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="Mobile no." rules="required|min:11" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                outlined
                dense
                label="Mobile no. *"
                v-model="editFormData.contact_number_mobile"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-text-field
              outlined
              dense
              label="Tel. no."
              v-model="editFormData.contact_number_tel"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="Ext. E-mail" rules="required|email" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                outlined
                dense
                label="Ext. E-mail *"
                v-model="editFormData.ext_email_address"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <!-- <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="Company" rules="required" v-slot="{ errors }">
              <v-autocomplete
                :loading="!companies"
                :disabled="!companies"
                :error-messages="errors"
                outlined
                dense
                label="Company *"
                v-model="editFormData.company"
                :items="companies || []"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </ValidationProvider>
          </v-col> -->
        </v-row>

        <v-divider></v-divider>

        <v-row v-if="!attributes">
          <v-col>
            <v-skeleton-loader
              height="94"
              type="list-item-two-line"
            ></v-skeleton-loader>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col>
            <v-row>
              <v-col cols="12">
                <div class="text-h5 mb-5">Segments *</div>
              </v-col>

              <v-col
                cols="12"
                sm="4"
                md="3"
                v-for="(attrib, i) in attributes"
                :key="i"
              >
                <ValidationProvider v-if="attrib.type == 1" :name="attrib.name" rules="required" v-slot="{ errors }">
                  <v-autocomplete
                    :error-messages="errors"
                    outlined
                    dense
                    :label="`${attrib.name} *`"
                    :items="attrib.segments"
                    item-text="name"
                    item-value="id"
                    v-model="editFormData[attrib.name]"
                  ></v-autocomplete>
                </ValidationProvider>
                <ValidationProvider v-if="attrib.type == 2" :name="attrib.name" rules="required" v-slot="{ errors }">
                  <v-autocomplete
                    :error-messages="errors"
                    outlined
                    dense
                    :label="`${attrib.name} *`"
                    :items="employees"
                    item-text="fullname"
                    item-value="id"
                    v-model="editFormData[attrib.name]"
                  ></v-autocomplete>
                </ValidationProvider>
              </v-col>
            </v-row>
            
            <div class="text-center my-5">
              <v-btn type="submit" :disabled="loading" depressed color="primary">
                Save employee
                <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
              </v-btn>
            </div>
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
  props: [],

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
      editFormData: {},
      companies: false,
      employees: false,
      attributes: false
    }
  },

  async created () {
    this.fillForm()
  },

  methods: {
    async saveEmployee () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('employees/storeEmployee', this.editFormData)
        .then((res) => {
          if (res.response) this.$router.push('/companies/employees')

          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend
        })
      })
    },

    async fillForm () {
      this.companies = await this.$store.dispatch('companies/fetchCompanies') // get companies
      this.employees = await this.$store.dispatch('employees/fetchEmployees') // get required employees
      this.attributes = await this.$store.dispatch('attributes/requiredAttributes') // get required attributes
    }
  }
}
</script>

<style>

</style>