<template>
  <v-tab-item transition="false" reverse-transition="false">
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <div class="text-caption font-weight-bold mb-2">Target population:</div>
        <div class="d-sm-flex">
          <div class="text-h5 font-weight-bold">Company</div>
          <div class="text-subtitle-2 text--secondary mt-2 ml-sm-5 mb-4">Your target can’t be changed, create a new schedule instead.</div>
        </div>

        <div :class="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'mini-form'}`">
          <div class="text-caption font-weight-bold mt-5 mb-2">Only including:</div>
          <v-autocomplete
            dense
            outlined
            multiple
            chips
            clearable
            :items="segments || []"
            item-text="name"
            item-value="id"
            @change="ifTouched(1)"
            @click:clear="ifTouched(1)"
            v-model="item.segments"
          >
            <template v-slot:selection="{ parent, item }">
              <v-chip
                class="my-1"
                small
                close
                @click:close="parent.selectItem(item)"
              >
                <div class="font-weight-bold">{{ item.attribute.name }}</div>: {{ item.name }}
              </v-chip>
            </template>
          </v-autocomplete>
          <div class="text-caption font-weight-bold mt-2 mb-2">Excluding:</div>
          <v-autocomplete
            dense
            outlined
            multiple
            chips
            clearable
            :items="excludeSegments || []"
            item-text="name"
            item-value="id"
            @change="ifTouched(2)"
            @click:clear="ifTouched(2)"
            v-model="item.exclude_segments"
          >
            <template v-slot:no-data>
              No segments excluded
            </template>
            <template v-slot:selection="{ parent, item }">
              <v-chip
                class="my-1"
                small
                close
                @click:close="parent.selectItem(item)"
              >
                <div class="font-weight-bold">{{ item.attribute.name }}</div>: {{ item.name }}
              </v-chip>
            </template>
          </v-autocomplete>
          
          <div class="text-center mt-md-5">
            <v-btn
              color="secondary"
              depressed
              @click.stop="updateSegments"
              :disabled="loading"
            >
              Update schedule
              <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="4">
        <v-card
          v-if="!cardToggle"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-body-2 font-weight-bold d-flex justify-space-between">
                Next Schedule target
                <v-btn x-small text @click="cardToggle = !cardToggle">Current Round</v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <div class="text-caption text--secondary">Target:</div>
              <div class="text-body-2 font-weight-bold mb-5">Company</div>

              <div class="text-caption text--secondary">Only including:</div>
              <div v-if="item.segments && item.segments.length <= 0" class="text-body-2 font-weight-bold">Everybody</div>
              <div
                v-else
                v-for="(segment, i) in selectedSegmentsArr"
                :key="segment.name"
              >
                <v-chip small color="red lighten-1" class="white--text">
                  <div class="text-caption font-weight-bold">{{ segment.attribute.name }}:&nbsp;</div>
                  <div class="text-caption">{{ segment.name }}</div>
                </v-chip>
              </div>

              <div class="text-caption text--secondary mt-5">Excluding:</div>
              <div v-if="item.exclude_segments && item.exclude_segments.length <= 0" class="text-body-2 font-weight-bold">Nobody</div>
              <div
                v-else
                v-for="(segment, i) in selectedExsegmentsArr"
                :key="segment.name"
              >
                <v-chip small color="purple lighten-1" class="white--text">
                  <div class="text-caption font-weight-bold">{{ segment.attribute.name }}:&nbsp;</div>
                  <div class="text-caption">{{ segment.name }}</div>
                </v-chip>
              </div>

              <div class="text-caption text--secondary mt-5">
                The total number of employees in this schedule will increase/decrease as people are removed or added to Peakon
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <div class="d-flex">
                <v-icon left x-large>mdi-account-multiple</v-icon>
                <div class="ml-5 red--text">
                  <div class="text-caption">Total</div>
                  <div class="text-subtitle-2">{{ item.employeeCount }} Employees</div>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card
          v-else
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-body-2 font-weight-bold d-flex justify-space-between">
                Current Schedule target
                <v-btn x-small text @click="cardToggle = !cardToggle">Next Round</v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <div class="text-caption text--secondary">Target:</div>
              <div class="text-body-2 font-weight-bold mb-5">Company</div>

              <div class="text-caption text--secondary">Only including:</div>
              <div v-if="item.lockedIncludeSegmentNames && item.lockedIncludeSegmentNames.length <= 0" class="text-body-2 font-weight-bold">Everybody</div>
              <div
                v-else
                v-for="(lockedIncludeSegmentName, i) in item.lockedIncludeSegmentNames"
                :key="lockedIncludeSegmentName"
              >
                <v-chip small color="red lighten-1" class="white--text">
                  <div class="text-caption font-weight-bold">{{ lockedIncludeSegmentName.split("-")[1] }}:&nbsp;</div>
                  <div class="text-caption">{{ lockedIncludeSegmentName.split("-")[0] }}</div>
                </v-chip>
              </div>

              <div class="text-caption text--secondary mt-5">Excluding:</div>
              <div v-if="item.lockedExcludeSegmentNames && item.lockedExcludeSegmentNames.length <= 0" class="text-body-2 font-weight-bold">Nobody</div>
              <div
                v-else
                v-for="(lockedExcludeSegmentName, i) in item.lockedExcludeSegmentNames"
                :key="lockedExcludeSegmentName"
              >
                <v-chip small color="purple lighten-1" class="white--text">
                  <div class="text-caption font-weight-bold">{{ lockedExcludeSegmentName.split("-")[1] }}:&nbsp;</div>
                  <div class="text-caption">{{ lockedExcludeSegmentName.split("-")[0] }}</div>
                </v-chip>
              </div>

              <div class="text-caption text--secondary mt-5">
                The total number of employees in this schedule will increase/decrease as people are removed or added to Peakon
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <div class="d-flex">
                <v-icon left x-large>mdi-account-multiple</v-icon>
                <div class="ml-5 red--text">
                  <div class="text-caption">Total</div>
                  <div class="text-subtitle-2">{{ item.roundEmployees }} Employees</div>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-tab-item>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: ['item'],

  data () {
    return {
      cardToggle: false,
      segments: false,
      excludeSegments: false,
      selectedSegmentsArr: [],
      selectedExsegmentsArr: []
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      this.segments = await this.$store.dispatch('attributes/withHeaders')
      this.excludeSegments = await this.$store.dispatch('attributes/withHeaders')

      this.ifTouched(1) // initialize touch
      this.ifTouched(2) // initialize touch
    },

    async updateSegments () {
      const res = await this.$store.dispatch('surveySchedules/updateSegment', this.item)
      if (res.status === 200) this.$emit('update-sched', res.data)
    },

    async ifTouched (isSegment) {
      if (isSegment == 1) {
        this.excludeSegments.map((exSeg, index) => { // reset
          if (exSeg.id) {
            this.excludeSegments[index].disabled = false
          }
        })

        this.excludeSegments.map((exSeg, index) => {
          this.item.segments.map(segment => {
            if (segment === exSeg.id) {
              this.excludeSegments[index].disabled = true
            }
          })
        })

        this.selectedSegments() // trigger method
      }

      if (isSegment == 2) {
        this.segments.map((segment, index) => { // reset
          if (segment.id) {
            this.segments[index].disabled = false
          }
        })

        this.segments.map((seg, index) => {
          this.item.exclude_segments.map(segment => {
            if (segment === seg.id) {
              this.segments[index].disabled = true
            }
          })
        })

        this.selectedExsegments() // trigger method
      }
    },

    selectedSegments () {
      let segments = []
      const selectedSegments = this.item.segments.length > 0 ? this.item.segments : []
      this.segments.map(segment => {
        selectedSegments.map(selected => {
          if (segment.id === selected) {
            segments.push(segment)
          }
        })
      })
      this.selectedSegmentsArr = segments
    },

    selectedExsegments () {
      let segments = []
      const selectedExsegments = this.item.exclude_segments.length > 0 ? this.item.exclude_segments : []
      this.excludeSegments.map(segment => {
        selectedExsegments.map(selected => {
          if (segment.id === selected) {
            segments.map((x, index) => { if (x.id === selected) segments.splice(index, 1) }) // splice duplicate item
            segments.push(segment) // insert item
          }
        })
      })
      this.selectedExsegmentsArr = segments
    }
  }
}
</script>

<style scoped>
.mini-form {
  width: 90% !important;
}
</style>