<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <div class="d-flex justify-space-between">
          <div :class="`text-h4 font-weight-bold ${textThemed}`">Survey Questions</div>
          <v-btn class="secondary hidden-sm-and-down" depressed @click.stop="addSurvey">Add question</v-btn>
        </div>
        <v-breadcrumbs :items="items" class="ma-0 pa-0 my-4">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col sm="12" md="12">
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <div v-if="!mainDriver">
              <v-skeleton-loader
                v-for="n in 3"
                :key="n"
                ref="skeleton"
                type="list-item-avatar-three-line"
                class="mx-auto"
              ></v-skeleton-loader>
            </div>
            <div v-else>
              <v-card tile outlined :color="boxThemed">
                <v-list-item three-line>
                  <v-list-item-avatar
                    size="36"
                    color="primary"
                  ><span class="font-weight-bold white--text mx-auto">{{ upperSubstringName(mainDriver.name) }}</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-h4 mb-2">{{ mainDriver.name }}</v-list-item-title>
                    <div class="text-body-1 text--secondary">{{ mainDriver.description }}</div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>

              <div
                v-for="(driver, i) in mainDriver.drivers"
                :key="i"
              >
                <v-card
                  hover
                  tile
                  @click="driver.id === 1 ? viewDriverRole(driver) : editDriverRole(driver)"
                  :color="boxThemed"
                >
                  <v-list-item three-line>
                    <v-list-item-avatar
                      size="25"
                      :color="`${!driver.driverRole.status ? 'lighten-3' : ''} primary`"
                      class="mt-5"
                    ><span class="text-caption font-weight-bold white--text mx-auto">{{ upperSubstringName(driver.name) }}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <div class="d-sm-flex justify-space-between align-center">
                        <div :class="`${!driver.driverRole.status ? 'text--secondary' : ''}`">
                          <v-list-item-title class="text-h6 mb-1">{{ driver.name }}</v-list-item-title>
                          <v-list-item-subtitle class="text-subtitle-1">{{ driver.description }}</v-list-item-subtitle>
                        </div>
                        <div class="d-flex align-center">
                          <v-switch
                            class="ml-1"
                            v-if="driver.id !== 1"
                            :loading="loading"
                            inset
                            v-model="driver.driverRole.status"
                            @click.stop="updateSurveyStatus(driver.driverRole, true)"
                          ></v-switch>
                          <v-btn v-if="driver.id === 1" @click.stop="viewDriverRole" outlined small color="secondary">View</v-btn>
                          <v-btn v-else outlined small color="secondary">Edit</v-btn>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
                <div class="mb-5">
                  <div
                    v-for="(subdriver, i) in driver.subdrivers"
                    :key="i"
                  >
                    <div v-if="subdriver.surveys.length > 0" >
                      <v-card
                        tile
                        hover
                        v-for="(survey, i) in subdriver.surveys"
                        :key="i"
                        @click="editSurvey(survey, false)"
                        :color="boxThemed"
                      >
                        <v-list-item three-line>
                          <v-list-item-avatar
                            size="25"
                            color="transparent"
                          ></v-list-item-avatar>
                          <v-list-item-content>
                            <div class="d-sm-flex justify-space-between align-center">
                              <div>
                                <v-list-item-title
                                  :class="`${!survey.status ? 'text--secondary' : ''} text-subtitle-2`"
                                >{{ subdriver.name }}</v-list-item-title>
                                <div
                                  :class="`${!survey.status ? 'text--secondary' : ''} text-caption`"
                                >{{ survey.question }}</div>
                              </div>
                              <div class="d-flex align-center">
                                <v-switch
                                  :loading="loading"
                                  inset
                                  class="ml-1"
                                  v-model="survey.status"
                                  @click.stop="updateSurveyStatus(survey, false)"
                                ></v-switch>
                                <v-btn outlined small color="secondary">Edit</v-btn>
                              </div>
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-fab-transition>
        <v-btn
          color="secondary"
          class="ma-5 pa-5"
          dark
          fixed
          bottom
          right
          fab
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || winScroll"
          @click.stop="addSurvey"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-row>
    <SurveyAddForm
      ref="addForm"
      v-model="drawer"
      @removeItem="removeItem"
      @pushItem="pushItem"
      @replaceItem="replaceItem"
      @updateRound="updateRound"
    ></SurveyAddForm>
    <SurveyViewQuestion ref="viewSurvey" v-model="viewDrawer"></SurveyViewQuestion>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

import main from '~/store/modules/engagements/drivers/main'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  middleware: ['auth'],

  head: {
    title: 'Survey Questions'
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    })
  },

  mounted () {
    window.addEventListener("scroll", this.onScroll)
  },

  components: {
    InfiniteLoading,
    SurveyAddForm: () => import('@@/components/asyncComponents/surveys/forms/SurveyAddForm'),
    SurveyViewQuestion: () => import('@@/components/asyncComponents/surveys/forms/SurveyViewQuestion')
  },

  data () {
    return {
      limit: 10,
      total: 0,
      list: {},
      winScroll: false,
      drawer: false,
      viewDrawer: false,
      mainDriver: false,
      items: [
        {
          text: 'Survey Questions',
          disabled: false,
          link: true,
          to: '/surveys/questions',
          exact: true // important
        }
      ]
    }
  },

  created () {
    this.initialize(true)
  },

  methods: {
    async updateSurveyStatus (survey, isDriver) {
      const res = await this.$store.dispatch('surveys/updateSurveyStatus', survey)

      console.log(survey)
      console.log(this.mainDriver.drivers)
      
      if (res.status === 403) {
        this.mainDriver.drivers.map(d => {
          if (isDriver) {
            if (d.driverRole.id === survey.id) d.driverRole.status = !d.driverRole.status
          } else {
            d.subdrivers.map(sd => {
              sd.surveys.map(s => { if (s.id === survey.id) s.status = !s.status })
            })
          }
        })
      }
    },

    async viewDriverRole (driver) {
      const res = await this.$store.dispatch('surveys/getSurveyDriverRole', driver.id)
      this.$refs.viewSurvey.fillForm(res) // pass the item
      this.viewDrawer = true // open drawer
      this.drawer = false // close other drawer
    },

    async editDriverRole (driver) {
      const res = await this.$store.dispatch('surveys/getSurveyDriverRole', driver.id)
      const survey = res.subdrivers[0].surveys[0]
      this.editSurvey(survey, true)
    },

    upperSubstringName (name) {
      return name ? name.substring(0, 2).toUpperCase() : null
    },

    onScroll(e) {
      const windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
      this.winScroll = windowTop > 70 ? true : false // activate winScroll
    },

    async initialize (arg) {
      const mainDriver = await this.$store.dispatch('mainDrivers/getMainDrivers', this.$route.params.id)
      this.total = mainDriver.drivers.length
      this.mainDriver = mainDriver
      this.list = Object.assign({}, {
        id: mainDriver.id,
        name: mainDriver.name,
        description: mainDriver.description,
        drivers: []
      })

      if (arg) { // if onload
        this.items.push({ // update breadcrumbs
          text: mainDriver.name
        })
      }
    },

    async infiniteHandler($state) {
      try {
        const res = await this.$store.dispatch('mainDrivers/getMainDrivers', this.$route.params.id)
        const append = res.drivers.slice(this.list.drivers.length, this.list.drivers.length + this.limit)
        this.list.drivers = this.list.drivers.concat(...append)

        // show loaded even withour subdrivers
        if (Object.keys(this.list).length > 0) { $state.loaded() }
        else $state.complete()

        if (this.total > this.list.drivers.length) { $state.loaded() }
        else $state.complete()
      } catch (error) {
        $state.complete()
      }
    },

    addSurvey () {
      this.$refs.addForm.fillForm({}) // reset form of child component
      this.drawer = true // open drawer
      this.viewDrawer = false // close other drawer
    },

    editSurvey (survey, driverRole) {
      this.$refs.addForm.fillForm(survey, driverRole) // fill form of child component
      this.drawer = true // open drawer
      this.viewDrawer = false // close other drawer
    },

    removeItem (payload) {
      const item = payload.item[0]
      this.list.drivers.map(driver => {
        if (driver.id === item.driver) {
          const subdrivers = driver.subdrivers
          subdrivers.map(subdriver => {
            if (subdriver.id === item.engagement_sub_driver_id) {
              var index = subdriver.surveys.findIndex(survey => survey.id === item.id)
              subdriver.surveys.splice(index, 1)
            }
          })
        }
      })
    },

    pushItem (payload) {
      this.list.drivers.map(driver => {
        if (driver.id === payload.driver) {
          const subdrivers = driver.subdrivers
          subdrivers.map(subdriver => {
            if (subdriver.id === payload.engagement_sub_driver_id) {
              subdriver.surveys.push(payload)
            }
          })
        }
      })
    },

    replaceItem (payload) {
      this.list.drivers.map(driver => {
        if (driver.id === payload.driver) {
          const subdrivers = driver.subdrivers
          subdrivers.map(subdriver => {
            if (subdriver.id === payload.engagement_sub_driver_id) {
              var index = subdriver.surveys.findIndex(survey => survey.id === payload.id)
              subdriver.surveys[index] = Object.assign({}, payload)
            }
          })
        }
      })
    },

    updateRound (item) {
      console.log(item)
      this.list.drivers.map(driver => {
        if (driver.id === item.driver) {
          const subdrivers = driver.subdrivers
          subdrivers.map(subdriver => {
            if (subdriver.id === item.subdriver) {
              const surveys = subdriver.surveys
              surveys.map(survey => {
                if (survey.id == item.survey) {
                  survey.round = item.round
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style>

</style>