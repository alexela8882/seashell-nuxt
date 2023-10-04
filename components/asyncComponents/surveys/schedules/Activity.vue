<template>
  <v-data-table
    :headers="headers"
    :items="activities || []"
    :expanded.sync="expanded"
    show-expand
    single-expand
    :class="`elevation-1 ${boxThemed}`"
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" class="py-5">
        <div class="text-body-2 font-weight-bold">Activity</div>
        <div
          v-if="item.subActivities.length <= 0"
          class="text-caption mt-3"
        >No current activity</div>
        <div
          v-else
          v-for="(subActivity, i) in item.subActivities"
          :key="i"
          class="text-subtitle-1 d-flex mt-3"
        >
          <div class="mr-5 pr-5">{{ subActivity.date }}</div>
          <div class="ml-5 pl-5">
            {{ subActivity.count }} employee{{ subActivity.count > 1 ? 's' : '' }} answered
          </div>
        </div>
      </td>
    </template>

    <template v-slot:item.round="{ item }">
      <v-icon small left v-if="!item.status" color="red lighten-1">mdi-play-circle</v-icon>
      {{ item.status == 0 ? item.round : item.round}}
    </template>

    <template v-slot:item.target="{ item }">
      Company
    </template>

    <template v-slot:item.resRate="{ item }">
      <div class="d-flex align-center">
        <div class="res-rate-display mr-4">
          {{ item.resRateDisplay }}
        </div>
        <v-progress-linear
          :value="item.resRate"
          height="10"
          :striped="item.resRate < 100"
          rounded
          :color="item.resRate < 100 ? 'amber' : 'green'"
        ></v-progress-linear>
      </div>
    </template>
  </v-data-table>
</template>

<script>

export default {
  props: ['boxThemed'],

  data () {
    return {
      expanded: [],
      activities: false,
      headers: [
        { text: 'Round', value: 'round' },
        { text: 'Target', value: 'target' },
        { text: 'Employees', value: 'employees' },
        { text: 'Response rate', value: 'resRate' },
        { text: '', value: 'data-table-expand' },
      ]
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('surveySchedules/getActivities')
      if (!res) return

      this.activities = []
      res.map(item => {
        const round = `${this.$moment(item.start_date).format('MMM DD, y')} - ${this.$moment(item.end_date).format('MMM DD, y')}`
        const resRate = Math.round((item.taken_surveys.length / item.employees) * 100)
        const resRateDisplay = `${resRate} %`

        this.activities.push({
          id: item.id,
          round: round,
          employees: item.employees,
          resRate: resRate,
          resRateDisplay: resRateDisplay,
          status: item.status,
          taken_surveys: item.taken_surveys,
          subActivities: item.grouped_taken_surveys
        })
      })

      console.log(this.activities)
    }
  }
}
</script>

<style scoped>
.res-rate-display {
  white-space: nowrap !important;
}
</style>