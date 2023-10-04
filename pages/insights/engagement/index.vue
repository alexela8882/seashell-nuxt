<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <div class="text-h4 font-weight-bold primary--text">Engagement overview</div>
            <div class="d-flex">
              <div class="text-caption text--disabled mr-3">
                <v-icon x-small>mdi-chat-outline</v-icon>
                open round
              </div>
              <div class="text-caption text--disabled">
                <v-icon x-small>mdi-calendar-check-outline</v-icon>
                an hour ago
              </div>
            </div>
          </span>
          <span class="d-flex align-self-center">
            <v-btn-toggle mandatory color="primary darken-3" background-color="rgba(255,255,255,0)" dense class="mx-1">
              <v-btn>
                NPS
              </v-btn>
              <v-btn>
                Average
              </v-btn>
            </v-btn-toggle>
            <v-btn depressed dark class="primary darken-1 mx-1">Share</v-btn>
            <v-btn depressed class="secondary mx-1">Export</v-btn>
          </span>
        </div>
      </v-col>
      <v-col md=12>
        <v-row>
          <v-col sm="12" md="9">
            <v-card class="d-flex" flat>
              <v-card
                width="70%"
                outlined
              >
                <v-card-title class="headline">
                  <div
                    class="text-subtitle-1 text-uppercase text--primary font-weight-bold"
                  >
                    Engagement Score
                    <v-icon right small>mdi-help-circle-outline</v-icon>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="text-subtitle-2 text--secondary">
                    Outcomes
                    <v-icon small>mdi-chevron-right</v-icon>
                  </div>
                </v-card-title>
                <v-card-text class="d-flex justify-space-between">
                  <div class="text-h1 font-weight-black primary--text">9.0</div>
                  <div class="mr-15 pr-10">
                    <div class="text-subtitle-2 primary--text"><span class="text-subtitle-1 font-weight-bold">0.8</span> above</div>
                    <div class="text-subtitle-1 text--primary font-weight-medium">Manufacturing Benchmark</div>
                    <v-range-slider
                      :tick-labels="benchmarks"
                      :value="[0, 1]"
                      min="0"
                      max="2"
                      ticks="always"
                      tick-size="6"
                    >
                      <template v-slot:thumb-label="props">
                        <v-icon dark>
                          {{ season(props.value) }}
                        </v-icon>
                      </template>
                    </v-range-slider>
                    <div class="text-subtitle-2 text--primary font-weight-black">Great job!</div>
                    <div class="text-body-2 text--primary">
                      In the <span class="text-decoration-underline primary--text">top 10%</span>
                      of Manufacturing
                    </div>
                  </div>
                </v-card-text>
                <v-card-text>
                  <div class="text-caption text--primary font-weight-bold mb-3">eNPS DISTRIBUTION:</div>
                  <div class="d-flex align-center">
                    <v-progress-circular
                      :value="41"
                      color="green"
                      size="40"
                    >41</v-progress-circular>
                    <div class="d-flex flex-column ml-5">
                      <div class="d-flex text-h6 font-weight-bold green--text">
                        <span class="align-self-end mr-1">50%</span>
                        <v-icon color="green">mdi-emoticon-happy-outline</v-icon>
                      </div>
                      <div class="text--subtitle-2">Promoters (55)</div>
                    </div>
                    <v-divider class="mx-4 my-3" vertical></v-divider>
                    <div class="d-flex flex-column">
                      <div class="d-flex text-h6 font-weight-bold">
                        <span class="align-self-end mr-1">41%</span>
                        <v-icon>mdi-emoticon-sad-outline</v-icon>
                      </div>
                      <div class="text--subtitle-2">Passives (45)</div>
                    </div>
                    <v-divider class="mx-4 my-3" vertical></v-divider>
                    <div class="d-flex flex-column">
                      <div class="d-flex text-h6 font-weight-bold red--text">
                        <span class="align-self-end mr-1">9%</span>
                        <v-icon color="red">mdi-emoticon-angry-outline</v-icon>
                      </div>
                      <div class="text--subtitle-2">Detractors (10)</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                width="30%"
                outlined
              >
                <v-card-title class="headline">
                  <div
                    class="text-caption text-uppercase text--primary font-weight-bold"
                  >
                    Score Over Time
                  </div>
                  <v-spacer></v-spacer>
                  <div class="text-caption font-weight-bold text--secondary">
                    Expand
                    <v-icon small>mdi-chevron-right</v-icon>
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="text-h6 font-weight-medium text--primary mb-5">
                    <span class="red--text font-weight-black">0.1</span>
                    descrease since Aug. 16
                  </div>
                  <v-sparkline
                    :value="value"
                    height="100"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item">
                      {{ item.value }}
                    </template>
                  </v-sparkline>
                </v-card-text>
              </v-card>
            </v-card>
          </v-col>
          <v-col sm="12" md="3">
            <v-card
              outlined
            >
              <v-card-title class="headline">
                <div
                  class="text-subtitle-2 text-uppercase text--primary font-weight-bold"
                >
                  Participation
                  <v-icon right small>mdi-help-circle-outline</v-icon>
                </div>
                <v-spacer></v-spacer>
                  <div class="text-caption font-weight-bold text--secondary">
                    Expand
                    <v-icon small>mdi-chevron-right</v-icon>
                  </div>
              </v-card-title>
              <div class="px-4">
                <div class="text-h5 text--primary">
                  <v-icon large color="green darken-2">mdi-text-account</v-icon>
                  <span class="green--text text--darken-2">88%</span>
                  aggregated participation rate
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="text-caption text--primary mb-2">At benchmark</div>
              </div>
              <v-divider></v-divider>
              <v-card-title class="headline">
                <div
                  class="text-caption text-uppercase text--primary font-weight-bold"
                >
                  Engagement Score
                  <v-icon right small>mdi-help-circle-outline</v-icon>
                </div>
                <div class="text-body-2 mt-2 text--primary">
                  The overall score is based on the responses from <span class="font-weight-bold">110</span>
                  employees (out of <span class="font-weight-bold">125</span>
                  <a class="green--text text-decoration-underline">surveyed employees</a>)
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <div class="text-subtitle-1 font-weight-bold text--primary">
                  <span>Aggregate score accuracy:</span>
                </div>
                <a class="text-h6 font-weight-black text-decoration-underline green--text">High</a>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth'],

  head: {
    title: 'Engagement'
  },

  data: () => ({
    benchmarks: [
      '0',
      '10',
      '20',
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
  }),

  methods: {
    season (val) {
      return this.icons[val]
    },
  }
}
</script>

<style scoped>
  .reset-card-title {
    padding: 0px !important;
    margin: 0px !important;
  }
</style>