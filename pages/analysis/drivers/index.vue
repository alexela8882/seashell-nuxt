<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else>
      <v-col cols="12">
        <div class="d-flex justify-space-between mb-5">
          <span>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Drivers</div>
          </span>
          <div>
            <v-btn depressed class="secondary darken-1 mx-1 hidden-sm-and-down" @click.stop="$router.push('drivers/add')">Add driver</v-btn>
          </div>
        </div>

        <v-skeleton-loader
          v-if="!drivers"
          type="actions"
          class="d-flex self-align-left"
        >
        </v-skeleton-loader>
        <v-tabs show-arrows v-else background-color="transparent">
          <v-tab
            v-for="(driver, i) in drivers"
            :key="i"
            @click.stop="setDriver(driver, 0)"
          >
            {{ driver.name }}
          </v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="12" sm="12" md="3">
            <div v-if="!drivers">
              <v-skeleton-loader type="article">
              </v-skeleton-loader>
            </div>
            <div v-else>
              <nuxt-link class="text-h4 my-5 text--primary font-weight-bold" :to="`drivers/edit/${driver.id}`">{{ driver.title }}</nuxt-link>
              <div class="text-caption my-5">{{ driver.description }}</div>
              <a @click.prevent="addDriver" v-if="!driverLink" :class="`text-caption ${textThemed}`">
                <v-icon x-small :color="textThemed">mdi-plus</v-icon>
                Add New
              </a>
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="9">
            <ViewDriver ref="viewDriver" v-if="!driverLink" @edit-driver="editDriver" :winScroll="winScroll" :boxThemed="boxThemed"></ViewDriver>
            <DriverAddForm v-else @reset-driver="setDriver" :childDriver="childDriver" :driver="driver" :scrollY="savedScrollY"></DriverAddForm>
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
          v-if="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm || winScroll2) && !driverLink"
          @click.stop="addDriver"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-row>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'
import ViewDriver from '@@/components/asyncComponents/engagements/drivers/ViewDriver'

export default {
  middleware: ['auth'],

  head: {
    title: 'Engagement Drivers'
  },

  mounted () {
    window.addEventListener("scroll", this.onScroll)
  },

  computed: {
    ...mapState({
      textThemed: state => state.textThemed,
      colorThemed: state => state.colorThemed,
      boxThemed: state => state.boxThemed
    })
  },

  beforeDestroy () {
    window.removeEventListener("scroll", this.onScroll)
  },

  components: {
    ViewDriver: ViewDriver,
    DriverAddForm: () => import('@@/components/asyncComponents/engagements/drivers/forms/DriverAddForm')
  },

  data: () => ({
    isForbidden: false,
    winScroll: null,
    winScroll2: false,
    savedScrollY: null,
    drivers: false,
    driver: false,
    childDriver: false,
    driverLink: false
  }),

  created () {
    this.initialized()
  },

  methods: {
    onScroll(e) {
      const windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
      this.winScroll = windowTop
      this.winScroll2 = windowTop > 70 ? true : false // activate winScroll
    },

    async initialized () {
      const res = await this.$store.dispatch('mainDrivers/fetchMainDrivers')

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        const drivers = res.data
        this.drivers = drivers
        if (drivers.length > 0) await this.setDriver(drivers[0], 0) // set first item
      }
    },

    async setDriver (driver, scrollY) {
      this.driverLink = false
      this.driver = driver
      await this.$refs.viewDriver // initialize refs
      await this.$refs.viewDriver.getDrivers(driver.id) // await to set previous scroll state

      window.scrollTo(0, scrollY) // set windows to previous scrollY
    },

    editDriver (driver, scrollY) {
      this.childDriver = driver
      this.savedScrollY = scrollY
      this.driverLink = true
    },

    addDriver () {
      this.childDriver = false
      this.driverLink = true
    }
  }
}
</script>

<style>

</style>