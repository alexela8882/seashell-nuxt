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
          <li>{{ childItem.name }}</li>
          <li>{{ childItem.description }}</li>
        </ul>

        <div class="text-caption red--text">
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
          @click="deleteDriver(childItem)"
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

    async deleteDriver (item) {
      this.$store.dispatch('drivers/deleteDriver', item)
      .then((res) => {
        this.close() // close dialog
        console.log(res)
        if (res.response) {
          console.log(res.response)
          this.$emit('reset-driver')
        }
        if (res.error) this.$snackbar({ icon: 'mdi-close-circle.red', text: res.error })
      })
    }
  }
}
</script>

<style>

</style>