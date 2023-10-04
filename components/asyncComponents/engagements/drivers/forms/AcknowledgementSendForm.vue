<template>
  <v-dialog
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    width="80vh"
  >
    <v-card>
      <v-card-title class="headline">Acknowledge comment?</v-card-title>
      <v-card-text class="d-flex align-center my-5">
        <v-btn
          dark
          elevation="0"
          :color="acknowledge.color"
          fab
          small
          class="mr-4"
          left
        >
          <v-icon>{{ acknowledge.icon }}</v-icon>
        </v-btn>
        <div class="text-subtitle-2">
          This will send the employee an email notifying them that you acknowledged their comment by saying:
          <span class="font-weight-black">{{ acknowledge.title }}</span>!
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          @click="close"
          :disabled="loading"
        >
          Cancel
        </v-btn>

        <v-btn
          depressed
          color="green darken-1"
          dark
          @click="proceedSending(acknowledge)"
          :disabled="loading"
        >
          Send acknowledgement
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      acknowledge: false,
      taken_survey_id: null
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  methods: {
    fillForm (acknowledge, id) {
      this.acknowledge = acknowledge
      this.taken_survey_id = id
    },

    close () {
      this.$emit('input', false)
    },

    async proceedSending (acknowledge) {
      const item = {
        taken_survey_id: this.taken_survey_id,
        acknowledgement: acknowledge.value
      }
      this.$store.dispatch('surveys/storeSurveyAcknowledgement', item)
      .then((res) => {
        if (res.error) this.$snackbar({ icon: 'mdi-close-circle.red', text: res.error })
        else this.close() // close dialog
      })
    }
  }
}
</script>

<style>

</style>