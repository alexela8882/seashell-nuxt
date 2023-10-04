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
            <div class="text-h5 font-weight-bold mt-5">{{ title ? title : 'Loading...' }}</div>
          </span>
          <div>
            <v-btn @click.stop="dialog = !dialog" :disabled="loading" outlined class="mx-1 mt-3 hidden-sm-and-down">Delete</v-btn>
            <EmployeeDeleteForm v-model="dialog" :childItem="employee"></EmployeeDeleteForm>
          </div>
        </div>
        <v-divider class="my-2"></v-divider>
        <v-tabs show-arrows v-model="tab" background-color="transparent">
          <v-tab :disabled="loading">
            Information
          </v-tab>
          <v-tab :disabled="loading">
            Segment
          </v-tab>
          <v-tab :disabled="loading">
            Account
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="see-through">
          <v-tab-item transition="false" reverse-transition="false">
            <EmployeeEditForm ref="editForm" @updateTitle="updateTitle"></EmployeeEditForm>
          </v-tab-item>
          <v-tab-item transition="false" reverse-transition="false">
            <EmployeeSegmentForm ref="segmentForm" :employee="employee"></EmployeeSegmentForm>
          </v-tab-item>
          <v-tab-item transition="false" reverse-transition="false">
            <EmployeeAccountForm ref="segmentForm" :employee="employee"></EmployeeAccountForm>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-speed-dial
        v-model="fab"
        absolute
        fixed
        bottom
        right
        direction="top"
        transition="slide-y-reverse-transition"
        class="ma-2 pa-2"
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="grey darken-2"
            dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-cog</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          small
          light
          color="white"
          nuxt-link
          to="/companies/employees"
        >
          <v-icon>mdi-keyboard-return</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
          @click.stop="dialog = !dialog"
        >
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-row>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  middleware: ['auth'],

  head: {
    title: 'Edit Employee'
  },

  components: {
    EmployeeEditForm: () => import('@@/components/asyncComponents/companies/employees/forms/EmployeeEditForm'),
    EmployeeSegmentForm: () => import('@@/components/asyncComponents/companies/employees/forms/EmployeeSegmentForm'),
    EmployeeAccountForm: () => import('@@/components/asyncComponents/companies/employees/forms/EmployeeAccountForm'),
    EmployeeDeleteForm: () => import('@@/components/asyncComponents/companies/employees/forms/EmployeeDeleteForm')
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed
    }),
    ...mapGetters({
      employee: 'employees/getEmployee'
    })
  },

  data: () => ({
    fab: false,
    dialog: false,
    tab: null,
    title: null
  }),

  methods: {
    updateTitle (title) {
      this.title = title
    }
  }

}
</script>

<style>

</style>