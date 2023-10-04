<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <nuxt-link
              :class="`text-h4 font-weight-bold ${textThemed} text-decoration-none`"
              to="/analysis/drivers"
            >Drivers</nuxt-link>
          </span>
          <!-- <div>
            <v-btn nuxt-link to="/analysis/drivers" outlined class="mx-1 mt-3">Cancel</v-btn>
          </div> -->
        </div>

        <MainDriverAddForm></MainDriverAddForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Add Driver'
  },

  computed: {
    ...mapState({
      textThemed: state => state.textThemed
    })
  },

  components: {
    MainDriverAddForm: () => import('@@/components/asyncComponents/engagements/drivers/forms/MainDriverAddForm')
  },
}
</script>

<style>

</style>