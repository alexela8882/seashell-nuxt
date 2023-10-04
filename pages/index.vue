<template>
  <v-container grid-list-md text-xs-center>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <div v-else>
      <div class="d-flex my-5">
        <v-autocomplete
          outlined
          dense
          clearable
          chips
          :items="attributes || []"
          :disabled="loading"
          :loading="loading"
          item-text="name"
          item-value="id"
          label="Benchmark"
          @change="reinitialize()"
          v-model="selectedAttribute"
        >
          <template v-slot:selection="{ item }">
            <v-chip
              class="my-1"
              small
            >
              <div class="font-weight-bold">{{ item.name }}</div>
            </v-chip>
          </template>
        </v-autocomplete>
        <v-autocomplete
          outlined
          dense
          class="ml-5"
          clearable
          chips
          :items="segments || []"
          :disabled="loading"
          :loading="loading"
          item-text="name"
          item-value="id"
          label="Filter"
          @change="ifTouched(1)"
          v-model="selectedSegment"
        >
          <template v-slot:selection="{ item }">
            <v-chip
              class="my-1"
              small
            >
              <div class="font-weight-bold">{{ item.attribute.name }}</div>: {{ item.name }}
            </v-chip>
          </template>
        </v-autocomplete>
        <!-- <v-autocomplete
          outlined
          dense
          class="ml-5"
          clearable
          chips
          :disabled="!selectedSegment || loading"
          :items="secondarySegments || []"
          item-text="name"
          item-value="id"
          label="Secondary Filter"
          @change="ifTouched(2)"
          @click:clear="ifTouched(2)"
          v-model="selectedSecSegment"
        >
          <template v-slot:selection="{ item }">
            <v-chip
              class="my-1"
              small
            >
              <div class="font-weight-bold">{{ item.attribute.name }}</div>: {{ item.name }}
            </v-chip>
          </template>
        </v-autocomplete> -->
      </div>
      <div v-if="!analytics">
        <v-row>
          <v-col
            v-for="n in 10"
            :key="n"
            cols="12"
            sm="4"
            md="3"
          >
            <v-skeleton-loader type="article"></v-skeleton-loader>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <div v-if="analytics.length <= 0">
          <div class="text-caption">No results</div>
        </div>
        <div v-else v-for="(analytic, i) in analytics" :key="i" class="mb-5">
          <div :class="`text-h4 ${textThemed}`">{{ analytic.group }}</div>
          <v-row>
            <v-col v-if="analytic.response.length <= 0">
              <div class="text-caption">No results</div>
            </v-col>
            <v-col
              v-else
              cols="12"
              sm="6"
              md="4"
              v-for="(response, n) in analytic.response"
              :key="n"
            >
              <v-card outlined class="pa-3" :color="boxThemed">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      <div :class="`overline text-h6 ${textThemed}`">Score</div>
                      <div class="text-caption">{{ response.name }}</div>
                    </v-list-item-title>
                  </v-list-item-content>
                  <div class="mx-auto">
                    <div :class="`text-h2 font-weight-bold ${textThemed}`">{{ response.ave }}</div>
                    <div v-if="response.benchmark_val != null" class="d-flex justify-center">
                      <div
                        :class="`text-caption font-weight-bold ${response.benchmark_val === 1 ? 'green--text' : 'error--text'}`"
                      >{{ response.difference }}</div>
                      <v-icon v-if="response.benchmark_val === 1" color="green" small>mdi-arrow-top-right</v-icon>
                      <v-icon v-if="response.benchmark_val === 0" color="red" small>mdi-arrow-bottom-right</v-icon>
                    </div>
                  </div>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Dashboard'
  },

  data () {
    return {
      isForbidden: false,
      analytics: false,
      segments: false,
      secondarySegments: false,
      selectedSegment: null,
      selectedSecSegment: null,
      selectedAttribute: null
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    }),
    ...mapGetters({
      attributes: 'attributes/getAttributes'
    }),
    filter () {
      let obj = {
        group: this.selectedAttribute,
        initial: this.selectedSegment,
        secondary: this.selectedSecSegment
      }
      return obj
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('analytics/fetchAnalytics', this.filter)

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        this.analytics = res.data

        this.segments = await this.$store.dispatch('attributes/withHeaders')
        this.secondarySegments = await this.$store.dispatch('attributes/withHeaders')
        await this.$store.dispatch('attributes/fetchAttributes')
      }
    },

    async ifTouched (isSegment) {
      if (isSegment == 1) {
        this.secondarySegments.map((secSeg, index) => { // reset
          if (secSeg.id) {
            this.secondarySegments[index].disabled = false
          }
        })

        this.secondarySegments.map((secSeg, index) => {
          if (this.selectedSegment === secSeg.id) {
            this.secondarySegments[index].disabled = true
          }
        })
      }

      if (isSegment == 2) {
        this.segments.map((seg, index) => { // reset
          if (seg.id) {
            this.segments[index].disabled = false
          }
        })

        this.segments.map((seg, index) => {
          if (this.selectedSecSegment === seg.id) {
            this.segments[index].disabled = true
          }
        })
      }

      if (this.selectedSegment == undefined) {
        this.selectedSegment = null
        this.selectedSecSegment = null

        // reset disabled attribute
        this.secondarySegments.map((secSeg, index) => {
          this.secondarySegments[index].disabled = false
        })
        this.segments.map((secSeg, index) => {
          this.segments[index].disabled = false
        })
      }

      this.reinitialize() // update analytics by re-initializing
    },

    async reinitialize () {
      if (this.selectedAttribute == undefined) this.selectedAttribute = null

      this.analytics = false // reset arr
      const res = await this.$store.dispatch('analytics/fetchAnalytics', this.filter)

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        this.analytics = res.data
      }
    }
  }
}
</script>

<style scoped>
.custom-font-size {
  font-size: .5rem !important;
}
</style>
