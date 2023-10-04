<template>
  <v-container>
    <v-tab-item transition="false" reverse-transition="false">
      <v-row>
        <v-col cols="12" sm="12" md="8" offset-md="2">
          <v-alert
            dense
            color="purple"
            text
            outlined
            class="pa-5"
          >
            <div class="d-sm-flex">
              <div><v-img src="/global time_350819573 [Converted].png" height="150" width="150" contain></v-img></div>
              <div class="d-flex flex-column justify-center ml-5">
                <div class="text-body-1 text--primary mb-2">This schedule is set to the company timezone: {{ item.timezone }}.</div>
                <div class="text-caption text--secondary">Employees will receive their survey email at 12:00 in their own local timezone, as set in their employee profile. Keep in mind that a new schedule may be needed for employees in a timezone eight or more hours ahead of your company timezone.</div>
              </div>
            </div>
          </v-alert>

          <v-row v-if="item.daysLeft > 0">
            <v-col cols="12" sm="12" md="6">
              <div class="text-subtitle-1 font-weight-bold">Current Round {{ item.daysLeft }}</div>
              <v-divider class="my-3"></v-divider>
              <div class="text-subtitle-2">Days left</div>
              <div class="text-h5 font-weight-bold my-3">{{ item.daysLeft }} days left</div>
              <div class="text-caption font-weight-bold my-2">
                <div v-if="!cedToggle">{{ item.csd_display }} - {{ item.ced_display }}</div>
                <div v-else>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="item.current_end_date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        outlined
                        single-line
                        hide-details
                        dense
                        v-model="item.current_end_date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        class="mb-2"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="item.current_end_date"
                      :min="$moment().format('YYYY-MM-DD')"
                      :max="$moment(item.current_start_date).add(item.duration_value, 'week').format('YYYY-MM-DD')"
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(item.current_end_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <v-btn
                    depressed
                    outlined
                    small
                    color="secondary"
                    @click="cedToggle = !cedToggle"
                    :disabled="loading"
                  >Cancel</v-btn>
                  <v-btn
                    depressed
                    small
                    color="primary"
                    @click="updateCed"
                    :disabled="loading"
                  >
                    Save
                    <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                  </v-btn>
                </div>
              </div>
              <a
                v-if="!cedToggle"
                nuxt-link
                to="/"
                class="text-caption text--primary font-weight-bold text-decoration-underline"
                @click="cedToggle = !cedToggle"
              >
                Override
              </a>

              <v-divider class="my-3"></v-divider>

              <div class="text-subtitle-2">Response rate</div>
              <div class="d-flex align-center my-3">
                <div>
                  <v-progress-circular
                    :size="70"
                    :width="10"
                    :value="item.resRate"
                    color="warning"
                  >
                    {{ item.resRate }}
                  </v-progress-circular>
                </div>
                <div class="ml-5">
                  <div class="text-h5 font-weight-bold">{{ item.resRate }} %</div>
                  <div class="text-caption font-weight-bold">
                    {{ item.lockedTakenSurveys }} out of {{ item.roundEmployees }} employees
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <v-icon left small>mdi-airplane-takeoff</v-icon>
                <div class="text-caption font-weight-bold">{{ item.roundEmployees }} survey notifications sent</div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div class="text-subtitle-1 font-weight-bold">&nbsp;</div>
              <v-divider class="my-3"></v-divider>
              <div class="text-subtitle-2">Employees</div>
              <div class="text-h5 font-weight-bold my-3">{{ item.roundEmployees }} employees</div>
              <div class="text-caption font-weight-bold my-2">&nbsp;</div>
              <a nuxt-link to="/" class="text-caption text--primary font-weight-bold">&nbsp;</a>

              <v-divider class="my-3"></v-divider>

              <div class="text-subtitle-2">Reminders</div>
              <div class="text-h5 font-weight-bold my-3">{{ item.remindedEmployees }} employees reminded</div>
              <div class="d-flex flex-column">
                <!-- <div class="d-flex mb-5">
                  <v-icon left small>mdi-calendar</v-icon>
                  <div class="text-caption font-weight-bold">Next reminder will be sent on 10/19/2020</div>
                </div> -->

                <v-btn
                  v-if="!proceedReminder"
                  @click="proceedReminder = true"
                  outlined
                  small
                >Send Reminder&nbsp;<v-icon small>mdi-email</v-icon></v-btn>

                <div v-else class="d-flex flex-column">
                  <p class="text-caption">Sending of Survey Reminder Mail will take a while</p>
                  <v-btn
                    @click="sendReminder"
                    color="error"
                    :loading="loading"
                    class="mb-2"
                    small
                  >Proceed To Send Reminder
                  </v-btn>

                  <v-btn :disabled="loading" @click="proceedReminder = false" outlined small>Cancel</v-btn>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-divider v-if="item.daysLeft > 0" class="my-5"></v-divider>

          <div class="text-subtitle-1 font-weight-bold mb-5">Next Round</div>

          <v-row>
            <v-col cols="12" sm="12" md="3">
              <div class="text-subtitle-2">Start</div>
              <div class="d-flex align-center justify-space-between my-2">
                <div class="text-subtitle-1 font-weight-bold">
                  {{ item.nsd_display }}
                </div>
                <div class="text-caption text--secondary">(Automatic)</div>
              </div>
              <a
                nuxt-link
                to="/"
                class="text-caption text--primary font-weight-bold text-decoration-underline"
              >
                Override
              </a>
              <div class="text-caption font-weight-bold" style="margin: 40px 0 10px 0;">Weekday to send</div>
              <v-autocomplete
                :items="[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ]"
                outlined
                dense
                v-model="item.weekdays_to_send"
              ></v-autocomplete>
              <div class="d-flex" v-if="weekdayDurationTouched">
                <v-btn
                  depressed
                  color="default"
                  class="mr-2"
                  :disabled="loading"
                  @click="$emit('reset-sched')"
                >Cancel</v-btn>
                <v-btn
                  depressed
                  color="primary"
                  @click="updateSchedule"
                  :disabled="loading"
                >
                  Save
                  <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="3">
              <div class="text-subtitle-2">End</div>
              <div class="d-flex align-center justify-space-between my-2">
                <div class="text-subtitle-1 font-weight-bold">
                  {{ item.ned_display }}
                </div>
                <div class="text-caption text--secondary">(Automatic)</div>
              </div>
              <a
                nuxt-link
                to="/"
                class="text-caption text--primary font-weight-bold text-decoration-underline"
              >
                Override
              </a>
              <div class="text-caption font-weight-bold" style="margin: 40px 0 10px 0;">Duration</div>
              <v-autocomplete
                :items="duration"
                item-text="name"
                outlined
                dense
                v-model="item.duration"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="12" md="3">
              <div class="text-subtitle-2">Frequency</div>
              <div class="text-subtitle-1 font-weight-bold my-2">
                {{ item.survey_frequency }}
              </div>
              <a
                href="javascrtip:void(0);"
                @click.prevent="$emit('change-tab', 2)"
                class="text-caption text--primary font-weight-bold text-decoration-underline"
              >
                Change frequency
              </a>
            </v-col>
            <v-col cols="12" sm="12" md="3">
              <div class="text-subtitle-2">Sends to</div>
              <div class="text-subtitle-1 font-weight-bold my-2">{{ item.employeeCount }}</div>
              <div class="text-subtitle-2">Employees</div>
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
      proceedReminder: false,
      menu: false,
      cedToggle: false
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    weekdayDurationTouched () {
      if (
        JSON.stringify(this.item.weekdays_to_send) === JSON.stringify(this.defaultItem.weekdays_to_send) &&
        JSON.stringify(this.item.duration) === JSON.stringify(this.defaultItem.duration)
      ) return false
      else return true
    },
    duration () {
      let week = null
      if (this.item.frequency == 'Weekly') week = 1
      else if (this.item.frequency == 'Bi-weekly') week = 2
      else if (this.item.frequency == 'Monthly') week = 4
      else if (this.item.frequency == 'Quarterly') week = 5

      let selections = []
      for (let i = 1; i <= 4; i++) {
        let isDisabled = true
        if (week >= i) isDisabled = false
        selections.push({
          name: `${i} week${i > 1 ? 's' : ''}`,
          disabled: isDisabled
        })
      }

      return selections
    }
  },

  methods: {
    async updateSchedule () {
      const res = await this.$store.dispatch('surveySchedules/updateSchedule', this.item)
      if (res.status === 200) this.$emit('update-sched', res.data) // update parent for changes
    },

    async updateCed () {
      const res = await this.$store.dispatch('surveySchedules/updateCed', this.item)

      if (res.status === 200) {
        this.$emit('update-sched', res.data) // update parent for changes
        if (res.data) this.cedToggle = false
      }
    },

    async sendReminder () {
      this.$emit('send-reminder')
    },

    updateState () {
      this.proceedReminder = false
    }
  }
}
</script>

<style>

</style>