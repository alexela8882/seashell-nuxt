<template>
  <v-dialog
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    width="70vh"
  >
    <v-card>
      <v-card-title class="headline">You are about to delete the following item(s):</v-card-title>

      <v-card-text>
        <ul class="text-h6 mb-3">
          <li>{{ childItem.name }} ({{ childItem.sector }})</li>
        </ul>

        <div class="text-subtitle red--text">
          <em>NOTE: This action cannot be undo</em>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text
          @click="close"
          :disabled="loading"
        >
          Cancel
        </v-btn>

        <v-btn
          color="red darken-1"
          text
          dark
          @click="deleteCompany(childItem)"
          :disabled="loading"
        >
          Proceed
          <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: {
    childItem: Object,
    value: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  methods: {
    close () {
      this.$emit('input', false)
    },

    closeDrawer () {
      this.$emit('drawer', false)
    },

    deleteCompany (item) {
      this.$store.dispatch('companies/deleteCompany', item)
      this.close() // close dialog
      this.closeDrawer() // close drawer
    }
  }
}
</script>

<style>

</style>