<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else>
      <v-col sm="12" md="12">
        <div :class="`text-h4 font-weight-bold ${textThemed}`">Survey Questions</div>
        <div class="text-subtitle-1 mt-2 text--secondary">Configure the types of questions asked in your survey.</div>
        <v-row>
          <v-col sm="12" md="8" offset-md="2">
            <div v-if="!drivers">
              <v-skeleton-loader
                v-for="n in 3"
                :key="n"
                type="list-item-avatar-three-line"
                class="my-5"
              >
              </v-skeleton-loader>
            </div>
            <div v-else>
              <v-hover
                v-for="(driver, i) in drivers"
                :key="i"
              >
                <template v-slot="{ hover }">
                  <v-card
                    :elevation="hover ? 4 : 1"
                    class="my-5"
                    hover
                    @click.stop="$router.push(`questions/${driver.id}`)"
                    :color="boxThemed"
                  >
                    <v-list-item two-line>
                      <v-list-item-avatar
                        size="36"
                        color="primary"
                      ><span class="font-weight-bold white--text mx-auto">{{ upperSubstringDriver(driver.name) }}</span>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="text-h6">{{ driver.name }}</v-list-item-title>
                      </v-list-item-content>
                      <v-spacer></v-spacer>
                      <v-btn small outlined>Configure</v-btn>
                    </v-list-item>
                    <v-list-item class="pr-0" style="margin-top: -15px;">
                      <v-list-item-avatar
                        size="25"
                        color="transparent"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-divider class="pa-0 ma-0"></v-divider>
                        <div class="text-subtitle-1 text--secondary mt-2">{{ driver.description }}</div>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </template>
              </v-hover>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import InfiniteLoading from 'vue-infinite-loading'
import { mapState } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Survey'
  },

  data: () => ({
    isForbidden: false,
    drivers: false,
    items: [
      {
        text: 'Survey Questions',
        disabled: true
      }
    ]
  }),

  computed: {
    ...mapState({
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    upperSubstringDriver (driver) {
      return driver.substring(0, 2).toUpperCase()
    },

    async initialize () {
      const res = await this.$store.dispatch('mainDrivers/fetchMainDrivers')

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        this.drivers = res.data
      }
    }
  }
}
</script>

<style>

</style>