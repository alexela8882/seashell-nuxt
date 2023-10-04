<template>
  <v-container class="px-0 mx-0">
    <ValidationObserver ref="observer" v-slot="{ validate }">
      <form ref="form" @reset.prevent="validate" @submit.prevent="updateEmployee">
        <v-row>
          <v-col cols="12">
            <div class="text-h5 mb-5">Personal</div>
          </v-col>

          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="First name" rules="required" v-slot="{ errors }">
              <v-text-field
                :loading="!employees"
                :disabled="!employees"
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
                :loading="!employees"
                :disabled="!employees"
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
              :loading="!employees"
              :disabled="!employees"
              outlined
              dense
              label="Middle name"
              v-model="editFormData.middle_name"
              placeholder="eg. 'Cruz'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-text-field
              :loading="!employees"
              :disabled="!employees"
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
                :loading="!employees"
                :disabled="!employees"
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
                :loading="!employees"
                :disabled="!employees"
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
              :loading="!employees"
              :disabled="!employees"
              outlined
              dense
              label="Tel. no."
              v-model="editFormData.contact_number_tel"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="Ext. Email" rules="required|email" v-slot="{ errors }">
              <v-text-field
                :loading="!employees"
                :disabled="!employees || hasUnderSurveyRound"
                :error-messages="errors"
                outlined
                dense
                label="Ext. Email *"
                v-model="editFormData.ext_email_address"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <!-- <v-col cols="12" sm="4" md="3">
            <ValidationProvider name="company" rules="required" v-slot="{ errors }">
              <v-autocomplete
                :loading="!employees && !companies"
                :disabled="!employees && !companies"
                :error-messages="errors"
                outlined
                dense
                label="Company"
                v-model="editFormData.company_id"
                :items="companies || []"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </ValidationProvider>
          </v-col> -->
        </v-row>

        <v-row v-if="!attributes">
          <v-col>
            <v-skeleton-loader
              height="94"
              type="list-item-two-line"
            ></v-skeleton-loader>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col v-if="attributes.length > 0">
            <v-divider></v-divider>
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
                    :disabled="editFormData[attrib.name].underSurveyRound"
                    :error-messages="errors"
                    outlined
                    dense
                    :label="`${attrib.name} *`"
                    :items="attrib.segments || []"
                    item-text="name"
                    item-value="id"
                    item-disabled="underSurveyRound"
                    v-model="editFormData[attrib.name].segment_id"
                  ></v-autocomplete>
                </ValidationProvider>
                <ValidationProvider v-if="attrib.type == 2" :name="attrib.name" rules="required" v-slot="{ errors }">
                  <v-autocomplete
                    :disabled="editFormData[attrib.name].underSurveyRound"
                    :error-messages="errors"
                    outlined
                    dense
                    :label="`${attrib.name} *`"
                    :items="employees || []"
                    item-text="fullname"
                    item-value="id"
                    item-disabled="underSurveyRound"
                    v-model="editFormData[attrib.name].segment_id"
                  ></v-autocomplete>
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        
        <div class="text-center my-5">
          <v-btn type="submit" :disabled="loading" depressed color="primary">
            Save changes
            <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
          </v-btn>
        </div>
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
      hasUnderSurveyRound: false,
      editFormData: {},
      companies: false,
      attributes: false,
      employees: false,
      localLoading: false
    }
  },

  created () {
    this.fillForm()
  },

  methods: {
    updateEmployee () {
      const res = this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        const e = this.$store.dispatch('employees/updateEmployee', this.editFormData)
        .then((res) => {
          if (res.response) return { 'response': res.response.fullname }

          const err = res.errors ? res.errors : ''
          if (err) return { 'error': err }
        })
        return e
      })
      if (res.response) this.$emit('updateTitle', res.response) // re-set parent title
      if (res.error) this.$refs.observer.setErrors(res.error) //set errors from backend
    },

    async fillForm () {
      this.companies = await this.$store.dispatch('companies/fetchCompanies') // get companies
      this.employees = await this.$store.dispatch('employees/perEmployee', { is_optional: 0, user_id: this.$route.params.id }) // get employees per employee

      const employee = await this.$store.dispatch('employees/getEmployee', this.$route.params.id)
      this.editFormData = Object.assign({}, employee)
      this.$emit('updateTitle', employee.fullname) // set parent title

      this.attributes = await this.$store.dispatch('attributes/requiredAttributes') // get attributes

      this.checkSurveyRound()
    },

    checkSurveyRound () {
      const surveyRounds = []
      const employeeData = this.editFormData

      const attributes = this.attributes.map(attribute => {
        if (employeeData[attribute.name].underSurveyRound) surveyRounds.push(employeeData[attribute.name])
      })

      this.hasUnderSurveyRound = surveyRounds.length > 0 ? true : false
    }

  }
}
</script>

<style>

</style>