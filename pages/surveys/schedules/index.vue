<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Schedule</div>
          </span>
          <!-- <div>
            <v-btn depressed class="secondary darken-1 mx-1" @click.stop="$router.push('drivers/add')">Add schedule</v-btn>
          </div> -->
        </div>

        <v-tabs v-model="tab" background-color="transparent" class="mt-5">
          <v-tab>Schedules</v-tab>
          <v-tab>Activity</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="my-5">
          <v-tab-item transition="false" reverse-transition="false">
            <v-skeleton-loader v-if="!schedules" type="table"></v-skeleton-loader>
            <v-data-table
              v-else
              :headers="headers"
              :items="schedules || []"
              hide-default-footer
              :class="`elevation-1 ${boxThemed}`"
            >
              <template v-slot:item.action="{ item }">
                <v-btn small color="secondary" depressed @click.stop="$router.push(`/surveys/schedules/${item.id}`)">View</v-btn>
              </template>
            </v-data-table>
          </v-tab-item>
          <v-tab-item transition="false" reverse-transition="false">
            <Activity :boxThemed="boxThemed"></Activity>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Survey Schedule'
  },

  data () {
    return {
      isForbidden: false,
      tab: null,
      schedules: false,
      headers: [
        { text: 'Target', value: 'target' },
        { text: 'Employees', value: 'employees' },
        { text: 'Frequency', value: 'frequency' },
        { text: 'Next Round', value: 'next_round' },
        { text: 'Action', sortable: false, value: 'action' }
      ],
    }
  },

  computed: {
    ...mapState({
      textThemed: state => state.textThemed,
      colorThemed: state => state.colorThemed,
      boxThemed: state => state.boxThemed
    }),
    Activity: () => import('@@/components/asyncComponents/surveys/schedules/Activity')
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('surveySchedules/fetchSchedules')

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        const schedules = res.data

        schedules.map(sched => {
          const schedule = Object.assign({}, {
            id: sched.id,
            target: 'Company',
            employees: '125',
            frequency: sched.survey_frequency,
            next_round: this.$moment(sched.next_start_date).format('ddd, DD MMM')
          })
          this.schedules = []
          this.schedules.push(schedule)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>