<template>
  <v-container style="height: 100%;">
    <v-card
      class="d-flex align-content-center flex-wrap see-through"
      flat
      tile
      min-height="100%"
    >
      <v-row>
        <v-col cols="12" sm="12" md="3" class="mr-5 pr-5">
          <v-card
            class="d-flex align-content-center flex-wrap see-through"
            flat
            tile
            min-height="100%"
          >
            <v-img src="/blue-logo.png" width="100" height="100" contain></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="7" class="ml-sm-5 pl-sm-5">
          <div class="text-h5 primary--text font-weight-bold pb-5">Esco Lifesciences cares about your opinion</div>
          <div class="text-body-2 my-5">This is your opportunity to improve your workplace.</div>
          <div class="d-sm-flex justify-space-between my-5 px-5" style="width: 90%;">
            <div class="d-flex flex-sm-column">
              <v-icon x-large left>contact_support</v-icon>
              <div class="text-caption text-sm-center my-5 my-sm-3">Approx. {{ current_surveys }} <br />questions</div>
            </div>
            <div class="d-flex flex-sm-column">
              <v-icon x-large left>schedule</v-icon>
              <div class="text-caption text-sm-center my-5 my-sm-3">Will take ~{{ Math.round(current_surveys / 3) }} <br />minutes</div>
            </div>
            <div class="d-flex flex-sm-column">
              <v-icon x-large left>lock</v-icon>
              <div class="text-caption text-sm-center my-5 my-sm-3">All your responses <br />are anonymous</div>
            </div>
          </div>
          <div class="text-body-2 my-5">To ensure anonymity, results will only be visible if 5 or more people have completed a survey.</div>
          <v-btn
            depressed
            color="primary"
            tile
            class="my-5"
            @click="startSurvey"
          >Start survey</v-btn>
          <div class="text-caption my-5">The Esco Lifesciences Engagement survey questions are about your experience at work. Rest assured that all responses are anonymous. Scores are aggregated which means your identity cannot be deduced (particularly in small teams). The data collected will be used to provide managers with insights about how to improve the experience of working in the organization.</div>
        </v-col>
        <v-col cols="12" sm="12" md="2"></v-col>
      </v-row> 
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'guest', // use guest layout,

  data () {
    return {
      current_surveys: 0
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('surveys/getCurrentSurveys')
      this.current_surveys = res.data.length
    },

    async startSurvey () {
      const payload = { survey_code: this.$route.params.code }
      await this.$store.dispatch('surveys/checkSurveyCode', payload)
    }
  }
}
</script>

<style>

</style>