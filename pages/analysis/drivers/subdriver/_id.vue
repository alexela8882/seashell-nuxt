<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <nuxt-link
          :class="`text-h4 font-weight-bold ${textThemed} text-decoration-none`"
          to="/analysis/drivers"
        >Drivers</nuxt-link>
        <v-skeleton-loader
          v-if="!items"
          width="300"
          type="list-item"
        ></v-skeleton-loader>
        <div v-else class="text-h6 font-weight-bold">
          {{ subdriver ? subdriver : 'Driver/Subdriver' }}
        </div>
      </v-col>

      <v-col cols="12">
        <v-tabs show-arrows v-model="tab" background-color="transparent">
          <v-tab>
            Insights
          </v-tab>
          <v-tab v-if="items.length > 0">
            What is {{ subdriver }}?
          </v-tab>
        </v-tabs>
      </v-col>

      <v-tabs-items v-model="tab" class="see-through" style="width: 100% !important;">
        <v-tab-item transition="false" reverse-transition="false">
          <v-col cols="12" sm="12">
            <v-row v-if="!items">
              <v-col cols="12" sm="12" md="9">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
                <v-skeleton-loader type="card-heading"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="12" md="3">
                <v-skeleton-loader type="card"></v-skeleton-loader>
                <v-skeleton-loader type="card-heading"></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="12" sm="12">
                <v-card outlined>
                  <v-card-title class="headline pb-0">
                    <div class="text-subtitle-1 text-uppercase text--primary font-weight-bold">
                      {{ subdriver }} Score
                      <v-icon right small>mdi-help-circle-outline</v-icon>
                    </div>
                  </v-card-title>
                  <v-card-text class="d-flex justify-space-between py-0">
                    <v-row >
                      <v-col cols="12" sm="12" md="5" class="align-self-center">
                        <div class="text-h1 font-weight-black primary--text">{{ totalScore }}</div>
                      </v-col>
                      <v-col v-if="analytic.items.length <= 0" cols="12" sm="12" md="5" class="align-self-center text-md-center">
                        <div class="text-caption">NO BENCHMARK</div>
                      </v-col>
                      <v-col v-else cols="12" sm="12" md="7">
                        <div :class="`text-subtitle-2 ${benchmarkColor}--text`">
                          <span class="text-subtitle-1 font-weight-bold">{{ benchmarkRate.difference }}</span>
                          {{ benchmarkRate.label }}
                        </div>
                        <div class="d-sm-flex justify-space-between text-subtitle-1 text--primary font-weight-medium">
                          <span>Benchmark: <span class="font-weight-light">{{ analytic.items[benchmark].group }}</span></span>
                          <div>
                            <v-btn icon small @click.prevent="backLoop">
                              <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-btn icon small @click.prevent="loopThrough">
                              <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                          </div>
                        </div>
                        <v-slider
                          class="mt-5"
                          readonly
                          :color="benchmarkColor"
                          :value="analytic.items[benchmark].driver.ave"
                          min="0"
                          max="10"
                          thumb-label="always"
                          thumb-size="20"
                          step=".1"
                        >
                          <template v-slot:prepend>
                            <div class="text-caption font-weight-bold red--text">0</div>
                          </template>
                          <template v-slot:append>
                            <div class="text-caption font-weight-bold green--text">10</div>
                          </template>
                        </v-slider>
                        <div class="text-subtitle-2 text--primary font-weight-black">{{ benchmarkRate.title }}</div>
                        <div class="text-body-2 text--primary">{{ benchmarkRate.caption }}</div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-text class="pt-0">
                    <div class="text-caption text--primary font-weight-bold mb-3">eNPS DISTRIBUTION:</div>
                    <div class="d-flex align-center">
                      <v-row>
                        <v-col cols="12" sm="12" md="4">
                          <div class="d-flex justify-md-center align-center">
                            <v-progress-circular
                              :value="analytic.promoters.percentage"
                              color="green"
                              width="5"
                              size="40"
                              class="mr-5 hidden-sm-and-down"
                            >
                              <div class="text-caption">{{ analytic.promoters.percentage }}</div>
                            </v-progress-circular>
                            <div class="d-flex flex-column">
                              <div class="d-flex text-h6 font-weight-bold green--text">
                                <span class="align-self-end mr-1">{{ analytic.promoters.percentage }}%</span>
                                <v-icon color="green">mdi-emoticon-happy-outline</v-icon>
                              </div>
                              <div class="text--subtitle-2">Promoters ({{ analytic.promoters.count }})</div>
                            </div>
                            <v-progress-circular
                              :value="analytic.promoters.percentage"
                              color="green"
                              width="5"
                              size="40"
                              class="ml-5 hidden-md-and-up"
                            >
                              <div class="text-caption">{{ analytic.promoters.percentage }}</div>
                            </v-progress-circular>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                          <div class="d-flex flex-column align-md-center">
                            <div class="d-flex text-h6 font-weight-bold">
                              <span class="align-self-end mr-1">{{ analytic.passives.percentage }}%</span>
                              <v-icon>mdi-emoticon-sad-outline</v-icon>
                            </div>
                            <div class="text--subtitle-2">Passives ({{ analytic.passives.count }})</div>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                          <div class="d-flex flex-column align-md-center">
                            <div class="d-flex text-h6 font-weight-bold red--text">
                              <span class="align-self-end mr-1">{{ analytic.detractors.percentage }}%</span>
                              <v-icon color="red">mdi-emoticon-angry-outline</v-icon>
                            </div>
                            <div class="text--subtitle-2">Detractors ({{ analytic.detractors.count }})</div>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                    <v-row class="px-2">
                      <v-col cols="12" style="background-color: #eee;" class="pa-0 mx-0">
                        <v-progress-linear
                          height="10"
                          :buffer-value="analytic.promoters.percentage + analytic.detractors.percentage"
                          :value="analytic.promoters.percentage"
                          color="green lighten-1"
                          background-color="red lighten-3"
                          rounded
                        ></v-progress-linear>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="3" md="3">
                <v-icon x-large>mdi-comment-multiple</v-icon>
                <div class="text-h4 my-4">Comments</div>
                <div class="text-caption">Comments are given in response to survey questions from Esco Engagement. Common themes within comments are shown in Topics.</div>
              </v-col>

              <v-col cols="12" sm="9" md="9" v-if="!displayItems">
                <v-skeleton-loader v-for="n in 3" :key="n" type="list-item-avatar-three-line">
                </v-skeleton-loader>
              </v-col>

              <v-col cols="12" sm="9" md="9" v-else>
                <div class="text-subtitle-1 font-weight-bold mb-3">Highlighted comments</div>
                <div v-if="displayItems.length <= 0" class="body-2">No available comments.</div>
                <div v-else>
                  <v-card
                    class="mb-5"
                    v-for="(item, i) in displayItems"
                    :key="i"
                  >
                    <v-list-item three-line class="d-flex">
                      <v-list-item-avatar
                        size="40"
                        color="transparent"
                      >
                        <v-img v-if="item.rate" :src="rateIcon(item.rate)"></v-img>
                        <v-icon v-else x-large>mdi-face</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <div class="text-subtitle-2 font-weight-bold text--primary">{{ item.question }}</div>
                        <div class="text-caption font-weight-bold text--secondary">
                          {{ $moment(item.created_at).format('MMMM D') }} |
                          Score: {{ item.rate ? item.rate : 'None' }} |
                          {{ item.subdriver.name }}
                        </div>
                        <div class="text-subtitle-1">{{ item.comment }}</div>
                      </v-list-item-content>
                      <div class="pb-5 mb-5">
                        <v-btn icon small>
                          <v-icon small>mdi-square-edit-outline</v-icon>
                        </v-btn>
                      </div>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <div class="d-sm-flex flex-xl-column">
                        <v-menu
                          v-if="item.acknowledgements.length > 0"
                          nudge-top="60"
                          close-delay="300"
                          open-on-hover
                          origin="center center"
                          transition="fade-transition"
                          rounded="xl"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              small
                              text
                              :color="acknowledged(item.acknowledgements[0]).color"
                            ><v-icon left>{{ acknowledged(item.acknowledgements[0]).icon }}</v-icon>
                              {{ acknowledged(item.acknowledgements[0]).title }}
                            </v-btn>
                          </template>
                        </v-menu>
                        <v-menu
                          v-else
                          nudge-top="60"
                          close-delay="300"
                          open-on-hover
                          origin="center center"
                          transition="fade-transition"
                          rounded="xl"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              small
                              text
                              color="secondary"
                            ><v-icon left>mdi-check-circle-outline</v-icon>
                              Acknowledge
                            </v-btn>
                          </template>

                          <v-card class="d-flex">
                            <div v-for="(a, i) in acknowledge" :key="i">
                              <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    v-bind="attrs"
                                    v-on="on"
                                    dark
                                    elevation="0"
                                    :color="a.color"
                                    fab
                                    small
                                    class="ma-1"
                                    @click.stop="sendAcknowledgement(a, item.id)"
                                  >
                                    <v-icon>{{ a.icon }}</v-icon>
                                  </v-btn>
                                </template>
                                <span>{{ a.title }}</span>
                              </v-tooltip>
                            </div>
                          </v-card>
                        </v-menu>
                        <v-btn
                          small
                          text
                          :color="`${item.replies.length > 0 ? 'success darken-2' : 'secondary'}`"
                          @click.stop="toggleDrawer(item)"
                        >
                          <v-avatar
                            v-if="item.replies.length > 0"
                            color="success darken-2"
                            size="18"
                          >
                            <span class="text-caption font-weight-bold white--text">
                              {{ item.replies.length }}
                            </span>
                          </v-avatar>
                          &nbsp;Conversation
                          <v-icon right>mdi-reply</v-icon>
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-tab-item>
        <v-tab-item transition="false" reverse-transition="false">
          <v-col cols="12">
            <div class="text-subtitle-2 text--secondary">Questions</div>
            <div class="text-body-1 font-weight-bold my-3">What questions contribute to this score?</div>
            <div class="text-subtitle-2 font-weight-light">
              Multiple questions can be used to create the score. You can add as many as needed.
            </div>

            <div class="my-5 d-flex" v-for="(question, i) in questions" :key="i">
              <div>
                <v-icon x-large left class="text--primary">mdi-help</v-icon>
              </div>
              <div>
                <div class="text-caption font-weight-bold text--secondary text-uppercase">SUBDRIVER QUESTION: {{ subdriver }}</div>
                <div class="text-subtitle-2">{{ question }}</div>
              </div>
            </div>
          </v-col>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
    <SubDriverConversationForm ref="conversationForm" v-model="drawer"></SubDriverConversationForm>
    <AcknowledgementSendForm ref="acknowledgementForm" v-model="dialog"></AcknowledgementSendForm>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Subdriver'
  },

  computed: {
    ...mapState({
      textThemed: state => state.textThemed,
      colorThemed: state => state.colorThemed
    }),
    ...mapGetters({
      takenSurveys: 'surveys/getTakenSurveys',
      displayTakenSurveys: 'surveys/getDisplayTakenSurveys',
      analytic: 'analytics/getAnalytic',
    }),
    benchmarkColor () {
      let color = 'green'
      if (this.analytic.items[this.benchmark].driver.benchmark_val == null) color = 'secondary'
      else if (this.analytic.items[this.benchmark].driver.benchmark_val == 1) color = 'green'
      else color = 'red'

      return color
    },
    benchmarkRate () {
      let rate = { label: null, difference: 0 }
      if (this.analytic.items[this.benchmark].driver.benchmark_val == null) {
        rate.title = 'Good'
        rate.label = 'Average'
        rate.caption = 'In the middle range of Esco Engagement'
        rate.difference = null
      } else if (this.analytic.items[this.benchmark].driver.benchmark_val === 1) {
        rate.title = 'Great job!'
        rate.label = 'above'
        rate.caption = 'In the above average of Esco Engagement'
        rate.difference = this.analytic.items[this.benchmark].driver.difference
      } else {
        rate.title = 'Room for improvement'
        rate.label = 'below'
        rate.caption = 'In the below average of Esco Engagement'
        rate.difference = this.analytic.items[this.benchmark].driver.difference
      }

      return rate
    }
  },

  components: {
    SubDriverConversationForm: () => import('@@/components/asyncComponents/engagements/drivers/forms/SubDriverConversationForm'),
    AcknowledgementSendForm: () => import('@@/components/asyncComponents/engagements/drivers/forms/AcknowledgementSendForm')
  },

  data () {
    return {
      tab: false,
      subdriver: false,
      items: false,
      displayItems: false,
      dialog: false,
      drawer: false,
      questions: [],
      totalScore: 0,
      benchmark: 0,
      benchmarks: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      icons: [
        'mdi-snowflake',
        'mdi-leaf',
        'mdi-water',
      ],
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
      acknowledge: [
        { icon: 'mdi-check-circle', value: 1, color: 'success', title: 'Thanks for sharing' },
        { icon: 'mdi-lightbulb-on', value: 2, color: 'warning', title: 'Great idea' },
        { icon: 'mdi-format-list-checks', value: 3, color: 'primary', title: 'Working on it' },
        { icon: 'mdi-chat-processing-outline', value: 4, color: 'purple', title: 'Would love to talk in person' },
        { icon: 'mdi-check-box-multiple-outline', value: 5, color: 'teal lighten-2', title: 'I agree' }
      ]
    }
  },

  async created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('surveys/takenSurveys', this.$route.params.id)
      await this.$store.dispatch('analytics/fetchAnalytic', this.$route.params.id)

      const subdriver = res.name // get subdriver name
      const items = await this.takenSurveys
      const displayItems = await this.displayTakenSurveys
      this.subdriver = subdriver
      this.items = items
      this.displayItems = displayItems

      const questions = []
      items.map(item => {
        questions.push(item.question)
      })
      this.questions = questions.filter((v, i, a) => a.indexOf(v) === i) // distinct questions

      let rates = []
      const rate = items.map(item => { rates.push(item.rate) })
      const totalRate = rates.reduce((a, b) => { return a + b }, 0)
      this.totalScore = this.analytic.items.length > 0 ? (this.analytic.items[0].driver.true_benchmark >= 10 ? Math.trunc((this.analytic.items[0].driver.true_benchmark).toFixed(1)) : (this.analytic.items[0].driver.true_benchmark).toFixed(1)) : '-'
    },

    season (val) {
      return this.icons[val]
    },

    toggleDrawer(displayItem) {
      this.drawer = !this.drawer // toggle drawer
      this.$refs.conversationForm.fillForm(displayItem) // call fillForm method of EditForm
    },

    rateIcon (rate) {
      let icon = null
      for (let i = 0; i <= 10; i++) if (i === rate) icon = `/ratings-emoticons-yellow/${i}.png`

      return icon
    },

    loopThrough () {
      if (this.analytic.items.length - 1 > this.benchmark) this.benchmark++
      else this.benchmark = this.benchmark - (this.analytic.items.length - 1)
    },

    backLoop () {
      if (this.benchmark === 0) this.benchmark = (this.analytic.items.length - 1) - this.benchmark
      else this.benchmark--
    },

    sendAcknowledgement (acknowledge, id) {
      this.dialog = !this.dialog
      this.$refs.acknowledgementForm.fillForm(acknowledge, id)
    },

    acknowledged (acknowledgement) {
      const acknowledge = this.acknowledge
      let j = {}
      acknowledge.map(a => { if (acknowledgement.acknowledgement == a.value) j = Object.assign({}, a) })
      return j
    }
  }
}
</script>

<style scoped>
  .reset-card-title {
    padding: 0px !important;
    margin: 0px !important;
  }

  .text-h1 {
    font-size: 140px !important;
  }
</style>