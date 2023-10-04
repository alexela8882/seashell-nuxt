<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <nuxt-link
              :class="`text-h4 font-weight-bold ${textThemed} text-decoration-none`"
              to="/companies/employees"
            >Employees</nuxt-link>
            <div class="text-h5 font-weight-bold mt-5">Add Employee</div>
          </span>
          <div>
            <v-btn nuxt-link to="/companies/employees" class="mx-1 mt-3 hidden-sm-and-down" depressed color="secondary darken-2">Cancel</v-btn>
          </div>
        </div>

        <v-divider class="my-2"></v-divider>
        
        <EmployeeAddForm ref="addForm"></EmployeeAddForm>
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn
        color="white"
        class="ma-5 pa-5"
        fixed
        bottom
        light
        right
        fab
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        nuxt-link
        to="/companies/employees"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Add Employee'
  },

  computed: {
    ...mapState({
      textThemed: state => state.textThemed
    })
  },

  components: {
    EmployeeAddForm: () => import('@@/components/asyncComponents/companies/employees/forms/EmployeeAddForm')
  },

  data: () => ({
    tab: null
  })

}
</script>

<style>

</style>