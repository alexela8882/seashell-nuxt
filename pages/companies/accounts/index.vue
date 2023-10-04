<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Account</div>
          </span>
          <v-btn :disabled="loading" depressed class="primary darken-1 mx-1" @click="saveCompany">
            Save
            <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
          </v-btn>
        </div>

        <v-row class="my-5">
          <v-col cols="12" sm="8" md="8">
            <ValidationObserver ref="observer" v-slot="{ reset }">
              <form ref="form" @reset.prevent="reset">
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                      <v-text-field
                        :error-messages="errors"
                        v-model="formData.name"
                        label="Company name"
                        placeholder="eg. Esco Global"
                        outlined
                        dense
                      ></v-text-field>
                    </ValidationProvider>

                    <ValidationProvider name="sector" rules="required" v-slot="{ errors }">
                      <v-autocomplete
                        :error-messages="errors"
                        v-model="formData.sector"
                        :items="defaultItem.sectors"
                        label="Sector"
                        outlined
                        dense
                      ></v-autocomplete>
                    </ValidationProvider>

                    <ValidationProvider name="location" rules="required" v-slot="{ errors }">
                      <v-autocomplete
                        :error-messages="errors"
                        v-model="formData.location"
                        :items="defaultItem.locations"
                        label="Location"
                        outlined
                        dense
                      ></v-autocomplete>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <ValidationProvider name="logo" rules="required" v-slot="{ errors }">
                      <v-file-input
                        :error-messages="errors"
                        v-model="formData.logo"
                        accept="image/*"
                        show-size
                        label="Company logo"
                        outlined
                        dense
                        clearable
                        prepend-icon=""
                        append-icon="mdi-paperclip"
                      ></v-file-input>
                    </ValidationProvider>

                    <ValidationProvider name="size" rules="required" v-slot="{ errors }">
                      <v-autocomplete
                        :error-messages="errors"
                        v-model="formData.size"
                        :items="defaultItem.sizes"
                        label="Size"
                        outlined
                        dense
                      ></v-autocomplete>
                    </ValidationProvider>

                    <ValidationProvider name="timezone" rules="required" v-slot="{ errors }">
                      <v-autocomplete
                        :error-messages="errors"
                        v-model="formData.timezone"
                        :items="defaultItem.timezones"
                        label="Timezone"
                        outlined
                        dense
                      ></v-autocomplete>
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </form>
            </ValidationObserver>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-card outlined>
              <v-card-title>
                <div class="text--secondary">Logo preview</div>
              </v-card-title>
              <v-card-text>
                <v-img src="/esco-logo-i.png"></v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="companies"
      :items-per-page="5"
      :class="`elevation-1 ${boxThemed}`"
    >
      <template v-slot:item.action="{ item }">
        <v-btn
          @click.stop="toggleDrawer(item)"
          icon
        >
          <v-icon small>mdi-square-edit-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <CompanyEditForm ref="editForm" v-model="drawer" :item="item" :defaultItem="defaultItem"></CompanyEditForm>
  </v-container>
</template>

<script>

import { mapGetters, mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  middleware: ['auth'],

  head: {
    title: 'Company Account'
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
    CompanyEditForm: () => import('@@/components/asyncComponents/companies/forms/CompanyEditForm')
  },

  computed: {
    ...mapGetters({
      'companies': 'companies/getCompanies'
    }),
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    })
  },

  created () {
    this.$store.dispatch('companies/fetchCompanies')
  },

  data: () => ({
    item: {},
    drawer: false,
    formData: {
      name: '',
      sector: '',
      logo: [],
      size: '',
      location: '',
      timezone: '',
    },
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Sector', value: 'sector' },
      { text: 'Location', value: 'location' },
      { text: 'Size', value: 'size' },
      { text: 'Timezone', value: 'timezone' },
      { text: 'Actions', value: 'action', sortable: false },
    ],
    defaultItem: {
      sectors: [
        'Consumer',
        'Education',
        'Energy & Utilities',
        'Finance',
        'Government',
        'Health Care',
        'Manufacturing',
        'Materials',
        'Non-profit',
        'Professional Services',
        'Technology',
        'Transportation',
      ],
      sizes: [
        '1-25',
        '26-50',
        '51-150',
        '151-500',
        '501-1000',
        '1,001-5,000',
        '5,001-10,000',
        '>10,000',
      ],
      locations: [
        'Philippines',
        'Bintan',
        'Singapore'
      ],
      timezones: [
        'Asia/Manila',
        'Asia/Bintan',
        'Asia/Singapore'
      ]
    }
  }),

  methods: {
    saveCompany() {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('companies/storeCompany', this.formData)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend

          // reset formData & validation
          if (res.response) {
            this.formData = {}
            this.$refs.form.reset()
          }
        })
      })
    },

    toggleDrawer(item) {
      this.drawer = !this.drawer // toggle drawer
      this.item = item // pass item
      this.$refs.editForm.fillForm() // call fillForm method of EditForm
      this.$refs.form.reset() // reset form
    }
  }
}
</script>

<style scoped>
</style>