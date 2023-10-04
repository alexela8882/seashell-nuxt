<template>
  <v-container>
    <v-tab-item transition="false" reverse-transition="false">
      <v-row>
        <v-col cols="12" sm="12" md="8" offset-md="2">
          <v-row>
            <v-col cols="12">
              <div class="text-body-1 font-weight-bold">Survey sender</div>
              <div class="text-caption my-2">Set the sender that will appear in the survey sendout. By default, the sender name is automatically selected.</div>
              <v-text-field v-model="item.sender" outlined dense></v-text-field>
              <div class="d-flex">
                <div style="width: 100%;" class="mr-5">
                  <div class="text-body-1 font-weight-bold">Survey time</div>
                  <div class="text-caption my-2">
                    This sets the send-out time for email, SMS, and/or Slack. <br />
                    This also applies to survey reminders.
                  </div>
                </div>

                <div style="width: 100%;">
                  <div class="text-body-1 font-weight-bold">Survey timezone</div>
                  <div class="text-caption my-2">
                    The default is the company timezone.
                    A timezone only needs to be set if the schedule send-out time differs greatly from the company timezone.
                  </div>
                </div>
              </div>

              <div class="d-flex">
                <div style="width: 100%;" class="mr-5">
                  <v-autocomplete
                    v-model="item.time"
                    :items="times"
                    outlined dense
                  ></v-autocomplete>
                </div>

                <div style="width: 100%;">
                  <v-text-field v-model="item.timezone" disabled outlined dense></v-text-field>
                </div>
              </div>

              <div class="text-center mt-5">
                <v-btn
                  depressed
                  color="secondary"
                  :disabled="!ifTouched || loading"
                  @click="saveSettings"
                >
                  Save settings
                  <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: ['item', 'defaultItem'],

  data () {
    return {
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),

    times () {
      let times = []
      for (let i = 0; i <= 24; i++) {
        let digit = null
        if (/^\d$/.test(i)) digit = `0${i}`
        else digit = i
        let time = `${digit}:00`
        times.push(time)
      }
      return times
    },

    ifTouched () {
      if (
        JSON.stringify(this.item.sender) === JSON.stringify(this.defaultItem.sender) &&
        JSON.stringify(this.item.time) === JSON.stringify(this.defaultItem.time) &&
        JSON.stringify(this.item.timezone) === JSON.stringify(this.defaultItem.timezone)
      ) return false
      else return true
    }
  },

  methods: {
    async saveSettings () {
      const res = await this.$store.dispatch('surveySchedules/updateSettings', this.item)
      if (res.status === 200) this.$emit('update-sched', res.data) // update parent for changes
    },
  }
}
</script>

<style>

</style>