<template>
  <v-tab-item transition="false" reverse-transition="false" style="margin: -30px 0 0 0;">
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <div class="d-sm-flex justify-space-between align-center">
          <div class="mr-5">
            <v-img contain height="350" width="350" src="/survey_1317180806 [Converted].png"></v-img>
          </div>
          <div class="ml-sm-5">
            <div class="text-h4 font-weight-bold mb-2 custom-font-size">Survey Frequency</div>
            <v-autocomplete
              dense
              outlined
              :items="[
                'Weekly',
                'Bi-weekly',
                'Monthly',
                'Quarterly'
              ]"
              v-model="item.frequency"
            ></v-autocomplete>
            <v-snackbar
              :timeout="-1"
              :value="frequencyTouched"
              bottom
              center
              width="100%"
              tile
              color="white"
              class="my-5"
            >
              <v-btn
                depressed
                color="primary"
                @click="updateFrequency"
                :disabled="loading"
              >
                Save Frequency
                <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
              </v-btn>
              <v-btn
                depressed
                color="secondary"
                @click="$emit('reset-sched')"
                :disabled="loading"
              >Cancel</v-btn>
            </v-snackbar>
            <div class="text-caption">Each month, Peakon will ask employees for new feedback and provide you with new insights. You can access survey insights on your dashboard at any time.</div>
          </div>
        </div>

        <div class="text-h5 font-weight-bold my-5">Question Frequency</div>
        <v-expansion-panels accordion multiple flat tile>
          <v-expansion-panel
            v-for="(mainDriver,i) in mainDrivers"
            :key="i"
            class="my-1"
          >
            <v-divider></v-divider>
            <v-expansion-panel-header class=" ma-0 pa-0 px-4">
              <div class="d-flex align-center">
                <v-list-item-avatar
                  size="36"
                  :color="`${mainDriver.id === 1 ? 'primary' : 'warning'}`"
                ><span class="font-weight-bold white--text">{{ mainDriver.name.substring(0, 2).toUpperCase() }}</span>
                </v-list-item-avatar>
                <div class="text-body-1 font-weight-bold">{{ mainDriver.name }}</div>
              </div>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <div class="d-flex mt-3">
                <div>
                  <v-list-item-avatar
                    size="27"
                    color="transparent"
                  ><span class="font-weight-bold white--text">{{ mainDriver.name.substring(0, 2).toUpperCase() }}</span>
                  </v-list-item-avatar>
                </div>
                <div style="width: 100%;">
                  <div v-if="mainDriver.id === 1" class="d-sm-flex align-center justify-space-between my-5">
                    <div>
                      <div class="text-body-2 font-weight-bold">Main question frequency</div>
                      <div class="text-caption">How often the main group question is asked</div>
                    </div>
                    <div class="mr-5">
                      <v-autocomplete
                        dense
                        outlined
                        single-line
                        hide-details
                        :items="mainDriverFrequency"
                      ></v-autocomplete>
                    </div>
                  </div>
                  <div class="d-sm-flex align-center justify-space-between my-5">
                    <div>
                      <div class="text-body-2 font-weight-bold">Driver frequency</div>
                      <div class="text-caption">How often a question from each driver is asked</div>
                    </div>
                    <div class="mr-5">
                      <v-autocomplete
                        dense
                        outlined
                        single-line
                        hide-details
                        :items="mainDriverFrequency"
                      ></v-autocomplete>
                    </div>
                  </div>
                  <div v-if="mainDriver.id === 1" class="d-sm-flex align-center justify-space-between my-5">
                    <div>
                      <div class="text-body-2 font-weight-bold">Subdriver frequency</div>
                      <div class="text-caption">How often a question for each subdriver is asked</div>
                    </div>
                    <div class="mr-5">
                      <v-autocomplete
                        dense
                        outlined
                        single-line
                        hide-details
                        :items="subdriverFrequency"
                      ></v-autocomplete>
                    </div>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card></v-card>
      </v-col>
    </v-row>
  </v-tab-item>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: ['item', 'defaultItem'],

  data () {
    return {
      mainDrivers: false,
      mainDriverFrequency: [
        'Always',
        'Weekly',
        'Bi-weekly',
        'Monthly',
        'Quarterly',
        'Twice a year',
        'Yearly'
      ],
      subdriverFrequency: [
        'Monthly',
        'Quarterly',
        'Twice a year',
        'Yearly'
      ]
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    frequencyTouched () {
      if (JSON.stringify(this.item.frequency) === JSON.stringify(this.defaultItem.frequency)) return false
      else return true
    }
  },

  mounted () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('mainDrivers/fetchMainDrivers')
      if (res.data.length > 0) {
        this.mainDrivers = []
        this.mainDrivers = res.data
      }
    },

    async updateFrequency () {
      const res = await this.$store.dispatch('surveySchedules/updateFrequency', this.item)
      console.log(res)
      if (res.status === 200) this.$emit('update-freq', res.data)
    }
  }
}
</script>

<style scoped>
.custom-font-size {
  font-size: 2rem !important;
}
</style>