<template>
  <v-container class="pa-0 ma-0">
    <ValidationObserver ref="observer">
      <form ref="form" @submit.prevent="saveDriver">
        <v-card class="py-5" :color="boxThemed">
          <v-card-text class="d-flex py-0">
            <v-avatar size="40px" tile>
              <img alt="driver" src="/Vector Smart Object15.png">
            </v-avatar>
            <p :class="`ml-5 display-1 ${textThemed}`">Driver</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            <v-row class="mt-5">
              <v-col class="py-0" cols="12" sm="6" md="6" offset-md="3" offset-sm="3">
                <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                  <v-text-field
                    :error-messages="errors"
                    outlined
                    dense
                    label="Name *"
                    placeholder="eg. `Accomplishment`"
                    v-model="formData.name"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col class="py-0" cols="12" sm="12" md="6"></v-col>
              <v-col class="py-0" cols="12" sm="6" md="6" offset-md="3" offset-sm="3">
                <ValidationProvider name="Description" rules="required" v-slot="{ errors }">
                  <v-textarea
                    :error-messages="errors"
                    outlined
                    dense
                    label="Description *"
                    v-model="formData.description"
                  ></v-textarea>
                </ValidationProvider>
              </v-col>
              <v-col class="py-0" cols="12" sm="6" md="6" offset-md="3" offset-sm="3">
                <div class="text-h6 mb-3">Subdrivers</div>
                <v-chip
                  v-for="(subdriver, i) in subdrivers"
                  :key="i"
                  pill
                  class="mb-5 mr-2"
                  color="primary"
                  close
                  close-icon="mdi-trash-can-outline"
                  @click:close="deleteSubdriver(subdriver)"
                >{{ subdriver.name }}
                </v-chip>
                <SubDriverDeleteForm v-model="dialog" @purge-subdriver="purgeSubdriver" :childItem="item"></SubDriverDeleteForm>

                <v-combobox
                  v-model="formData.subdrivers"
                  search-input.sync="item"
                  multiple
                  small-chips
                  dense
                  outlined
                  label="Add new"
                  hint="Press enter or hit tab to create new one"
                >
                  <template v-slot:selection="{ item, parent }">
                    <v-chip
                      label
                      small
                    >
                      <span class="pr-2">
                        {{ item }}
                      </span>
                      <v-icon
                        small
                        @click="parent.selectItem(item)"
                      >close</v-icon>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
              <v-col class="py-0 d-flex justify-space-between" cols="12" sm="12" md="6" offset-md="3" offset-sm="3">
                <div>
                  <v-btn :disabled="loading" class="mr-2" type="submit" color="primary" outlined dense>
                    {{ btnTitle }}
                    <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                  </v-btn>
                  <v-btn :disabled="loading" outlined dense @click.prevent="resetDriver">Back</v-btn>
                </div>
                <div>
                  <v-btn v-if="childDriver" :disabled="loading" icon dense @click.prevent="deleteDriver" color="red">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                  <DriverDeleteForm v-model="dialog2" @reset-driver="resetDriver" :childItem="item2"></DriverDeleteForm>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  props: ['driver', 'childDriver', 'scrollY'],

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },

  data () {
    return {
      dialog: false,
      dialog2: false,
      item: {},
      item2: {},
      subdriver: null,
      subdrivers: [],
      formData: {
        id: this.driver.id,
        name: null,
        description: null,
        subdrivers: []
      }
    }
  },

  created () {
    this.setFormData()
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    }),
    btnTitle () {
      const title = this.childDriver ? 'Update Driver' : 'Save Driver'
      return title
    }
  },

  methods: {
    purgeSubdriver (payload) {
      for (var i = payload.length - 1; i >= 0; i--) {
        const subdrivers = this.subdrivers
        const index = subdrivers.findIndex(subdriver => subdriver.id === payload[i].id)
        subdrivers.splice(index, 1) // update subdrivers
      }
    },

    deleteDriver () {
      this.item2 = this.childDriver
      this.dialog2 = true
    },

    deleteSubdriver (driver) {
      this.item = driver
      this.dialog = true
    },

    addSubdriver () {
      this.formData.subdrivers.push(this.subdriver)
      this.subdriver = null
    },

    setFormData () {
      if (this.childDriver) {
        const driver = this.childDriver
        driver.subdrivers.map(subdriver => this.subdrivers.push(subdriver)) // push objects in array
        this.formData = Object.assign({}, {
          id: driver.id,
          name: driver.name,
          description: driver.description
        })
      }
    },

    saveDriver () {
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        const dispatch = this.childDriver ? 'drivers/updateDriver' : 'drivers/storeDriver'
        this.$store.dispatch(dispatch, this.formData)
        .then((res) => {
          if (res.response) this.resetDriver() // re-set driver with previous scrollY

          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend
        })
      })
    },

    resetDriver () {
      this.$emit('reset-driver', this.driver, this.childDriver ? this.scrollY : 0)
    }
  }
}
</script>

<style>

</style>