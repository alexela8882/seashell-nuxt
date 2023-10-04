<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <div v-else>
      <v-row>
        <v-col sm="12" md="12">
          <div class="d-flex justify-space-between">
            <span>
              <div :class="`text-h4 mb-5 font-weight-bold ${textThemed}`">Employees</div>
            </span>
            <div>
              <v-btn depressed class="secondary darken-1 mx-1 hidden-sm-and-down" @click.stop="addEmployee" :disabled="loading">
                Add employee
                <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
              </v-btn>
            </div>
          </div>

          <v-row class="mt-5">
            <v-col cols="12" sm="4" md="4">
              <v-text-field
                v-model="search"
                label="Outlined"
                single-line
                outlined
                dense
                hide-details
                placeholder="Search for employee(s)"
                append-icon="search"
              ></v-text-field>
            </v-col>

            <v-col cols="12" offset-sm="4" sm="4" offset-md="5" md="3">
              <v-autocomplete
                v-model="activeColumns"
                :items="headers"
                solo
                dense
                hide-details
                label="Columns"
                multiple
                @change="limitHeaders"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0" class="grey--text caption">
                    {{ activeColumns.length }} columns
                  </span>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="employees"
        :items-per-page="5"
        :search="search"
        :class="`elevation-1 ${boxThemed}`"
        @click:row="editEmployee"
        :loading="loading"
      >
        <template v-slot:item.fullname="{ item }">
          <span class="d-flex flex-column my-3">
            <span class="text-subtitle-2">{{ item.fullname }}</span>
            <span class="text-caption text--secondary">{{ item.user.email }}</span>
          </span>
        </template>
      </v-data-table>
      <v-fab-transition>
        <v-btn
          color="secondary"
          class="ma-5 pa-5"
          dark
          fixed
          bottom
          right
          fab
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || winScroll"
          @click.stop="addEmployee"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Company Employees'
  },

  computed: {
    ...mapGetters({
      employees: 'employees/getEmployees'
    }),
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    })
  },

  data () {
    return {
      isForbidden: false,
      search: null,
      activeColumns: [],
      winScroll: false,
      headers: [
        { text: 'Name', align: 'start', value: 'fullname' },
        { text: 'Company', align: 'start', value: 'company.name' },
        { text: 'Address', align: 'start', value: 'address' },
        { text: 'Mobile', align: 'start', value: 'contact_number_mobile' },
        { text: 'Complete Name', align: 'start', value: 'completename' },
      ]
    }
  },

  mounted () {
    window.addEventListener("scroll", this.onScroll)
  },

  created () {
    this.initialize()
    this.initializedHeaders() // initialize data table headers
  },

  methods: {
    onScroll(e) {
      const windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
      this.winScroll = windowTop > 70 ? true : false // activate winScroll
    },

    async initialize () {
      const res = await this.$store.dispatch('employees/fetchEmployees') // fetch employees
      if (res.status === 403) this.isForbidden = true
      else this.isForbidden = false
    },

    editEmployee (item) {
      this.$router.push(`employees/edit/${item.id}`) // can be use to get epmloyee from backend

      // set employee into vuex
      // disregard if item will directly
      // pull from the backend
      this.$store.commit('employees/SET_EMPLOYEE', item)
    },

    initializedHeaders () {
      this.headers.map((header, i) => { if (i <= 3) this.activeColumns.push(header.value) })
      this.limitHeaders() // initialize limiters
    },

    limitHeaders () {
      const activeColumns = this.activeColumns
      const headers = this.headers
      if (activeColumns.length > 3) {
        headers.filter(e => {
          if (!activeColumns.includes(e.value)) {
            e['disabled'] = true
            e['align'] = ' d-none'
          } else e['align'] = 'start'
        })
      } else if (activeColumns.length <= 1) {
        headers.filter(e => {
          if (activeColumns.includes(e.value)) {
            e['disabled'] = true
            e['align'] = 'start'
          } else e['align'] = ' d-none'
        })
      } else {
        headers.filter(e => e['disabled'] = false) // enable all columns
        headers.filter(f => {
          if (activeColumns.includes(f.value)) {
            f['align'] = 'start'
          } else f['align'] = ' d-none'
        })
      }
    },

    addEmployee () {
      this.$router.push('employees/add')
    }
  }
}
</script>

<style>

</style>