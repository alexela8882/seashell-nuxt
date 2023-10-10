<template>
  <v-dialog
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    width="70vh"
  >
    <v-card>
      <v-card-title class="headline">Confirm delete</v-card-title>

      <v-card-text>
        <div class="text-subtitle-2 text--primary">You are about to delete an item with the following detail(s):</div>
        <ul class="text-subtitle-2 my-3">
          <li>{{ childItem.fullname }}</li>
          <li>{{ childItem.address }}</li>
        </ul>

        <div class="text-caption red--text">
          <em>NOTE: This action cannot be undone</em>
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
          @click="deleteEmployee(childItem)"
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

    async deleteEmployee (item) {
      const req = await this.$store.dispatch('employees/deleteEmployee', item)
      if (req.response) this.$router.push('/companies/employees')
      this.close()
    }
  }
}
</script>

<style>

</style>