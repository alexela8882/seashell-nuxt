<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else class="mb-5">
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between align-center">
          <div>
            <nuxt-link
              :class="`text-h4 font-weight-bold text-decoration-none ${textThemed}`"
              to="/surveys/schedules"
            >Schedules</nuxt-link>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card class="px-5 py-2" :color="boxThemed">
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <div class="text-h5 font-weight-bold">
                Esco Company
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <!-- <v-btn
                class="float-right"
                dense
                depressed
                small
                color="warning"
                @click.stop="sendTestRound"
                :disabled="loading"
              >
                Send test round
                <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
              </v-btn> -->
            </v-col>
          </v-row>
          <v-tabs show-arrows v-model="tab" class="mb-5" background-color="transparent">
            <v-tab v-for="(item, i) in tabItems" :key="i">
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab" class="see-through">
            <ViewSchedule
              ref="view-schedule"
              :item="schedule"
              :defaultItem="defaultSchedule"
              @change-tab="changeTab"
              @update-sched="updateSchedule"
              @reset-sched="resetSchedule"
              @send-reminder="sendReminder"
            ></ViewSchedule>
            <ViewFrequency
              :item="schedule"
              :defaultItem="defaultSchedule"
              @update-freq="updateSchedule"
              @reset-sched="resetSchedule"
            ></ViewFrequency>
            <ViewTarget
              :item="schedule"
              @update-sched="updateSchedule"
            ></ViewTarget>
            <ViewSettings
              :item="schedule"
              :defaultItem="defaultSchedule"
              @update-sched="updateSchedule"
            ></ViewSettings>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

import ViewSchedule from '@@/components/asyncComponents/surveys/schedules/ViewSchedule.vue'

export default {
  middleware: ['auth'],

  head: {
    title: 'Edit Schedule'
  },

  components: {
    ViewSchedule: ViewSchedule,
    ViewFrequency: () => import('@@/components/asyncComponents/surveys/schedules/ViewFrequency'),
    ViewTarget: () => import('@@/components/asyncComponents/surveys/schedules/ViewTarget'),
    ViewSettings: () => import('@@/components/asyncComponents/surveys/schedules/ViewSettings')
  },

  data () {
    return {
      isForbidden: false,
      tab: null,
      tabItems: [
        'Schedules',
        'Frequency',
        'Target',
        'Survey Settings'
      ],
      schedule: false,
      defaultSchedule: {}
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      colorThemed: state => state.colorThemed,
      boxThemed: state => state.boxThemed
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('surveySchedules/getSchedule', this.$route.params.id)

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        this.getSchedule(res.data)
      }
    },

    getSchedule (res) {
      if (Object.keys(res).length > 0) {
        const include_segment_ids = []
        const exclude_segment_ids = []

        res.segment_maps.map(map => {
          const id = `${map.segment_id}-${map.attribute_id}`
          if (map.action === 1) include_segment_ids.push(id)
          else exclude_segment_ids.push(id)
        })

        const locked_include_segment_names = []
        const locked_exclude_segment_names = []
        res.locked_segment_maps.map(map => {
          const name = `${map.segment.name}-${map.attribute.name}`
          if (map.action === 1) locked_include_segment_names.push(name)
          else locked_exclude_segment_names.push(name)
        })

        const resRate = Math.round((res.locked_taken_surveys / res.round_employees) * 100)
        let csd_display = this.$moment(res.current_start_date).format('MM/DD/YYYY')
        let ced_display = this.$moment(res.current_end_date).subtract(1, 'days').format('MM/DD/YYYY')
        let nsd_display = this.$moment(res.next_start_date).format('ddd, DD MMM')
        let ned_display = this.$moment(res.next_end_date).subtract(1, 'days').format('ddd, DD MMM')

        const schedule = Object.assign({}, {
          id: res.id,
          sender: res.survey_sender,
          time: this.$moment(`1991-01-06 ${res.survey_time}`).format('HH:mm'),
          timezone: res.survey_timezone,
          frequency: res.survey_frequency,
          duration: res.duration,
          duration_value: res.duration.split(" ")[0],
          weekdays_to_send: res.weekdays_to_send,
          current_start_date: res.current_start_date,
          current_end_date: res.current_end_date,
          current_date: [res.current_start_date, res.current_end_date],
          next_start_date: res.next_start_date,
          next_end_date: res.next_end_date,
          segments: include_segment_ids,
          exclude_segments: exclude_segment_ids,
          csd_display: csd_display,
          ced_display: ced_display,
          nsd_display: nsd_display,
          ned_display: ned_display,
          employeeCount: res.employee_count,
          takenSurveys: res.taken_surveys,
          lockedSegments: res.locked_segment_maps,
          lockedEmployeeCount: res.locked_employee_count,
          lockedTakenSurveys: res.locked_taken_surveys,
          lockedIncludeSegmentNames: locked_include_segment_names,
          lockedExcludeSegmentNames: locked_exclude_segment_names,
          resRate: resRate,
          roundEmployees: res.round_employees,
          remindedEmployees: res.reminded_employees.length,
          daysLeft: this.$moment(res.current_end_date).add(1, 'days').diff(this.$moment().valueOf(), 'days')
        })

        this.schedule = Object.assign({}, schedule)
        this.defaultSchedule = Object.assign({}, schedule)

        console.log(this.schedule)
      }
    },

    changeTab () {
      this.tab = 1 // go to frequency tab
    },

    async sendReminder () {
      const res = await this.$store.dispatch('surveySchedules/sendReminder', this.schedule)
      if (res.status === 200) {
        this.getSchedule(await res.data)
        this.$refs['view-schedule'].updateState()
      }
    },

    async sendTestRound () {
      const res = await this.$store.dispatch('surveySchedules/sendTestRound', this.schedule)
      this.getSchedule(res)
    },

    async updateSchedule (item) {
      this.getSchedule(await item)
    },

    resetSchedule () {
      this.schedule = Object.assign({}, this.defaultSchedule)
    }
  }
}
</script>

<style>

</style>