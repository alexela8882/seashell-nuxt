<template>
  <v-container class="pa-0 ma-0">
    <div v-if="!drivers">
      <v-skeleton-loader
        v-for="n in 3"
        :key="n"
        ref="skeleton"
        type="list-item-avatar-three-line"
        class="mx-auto"
      ></v-skeleton-loader>
    </div>

    <div v-else>
      <v-card
        class="mb-5"
        v-for="(driver, i) in drivers"
        :key="i"
        hover
        :ripple="false"
        @click.stop="$router.push(`drivers/subdriver/${driver.id}`)"
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
          <v-btn icon small @click="$emit('edit-driver', driver, winScroll)">
            <v-icon small>mdi-square-edit-outline</v-icon>
          </v-btn>
        </v-list-item>

        <SubDriver ref="subDriver" @showBtn="showBtn" :boxThemed="boxThemed"></SubDriver>

        <div v-if="driver.subdrivers.length > 0">
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn v-if="!driver.subdriverShow" ref="showBtn" text x-small @click.stop="showSubDriver(i, driver)">
              <v-icon x-small left>mdi-chevron-down</v-icon>
              Show {{ driver.subdrivers.length }} subdriver
            </v-btn>
            <v-btn v-else ref="hideBtn" text x-small @click.stop="unShowSubDriver(i, driver)">
              <v-icon x-small left>mdi-chevron-up</v-icon>
              Hide {{ driver.subdrivers.length }} subdriver
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>

export default {
  props: ['winScroll', 'boxThemed'],

  data () {
    return {
      drivers: false
    }
  },

  components: {
    SubDriver: () => import('./SubDriver'),
  },

  methods: {
    upperSubstringDriver (driver) {
      return driver.substring(0, 2).toUpperCase()
    },

    async getDrivers (id) {
      this.drivers = false // initially set to false
      const drivers = await this.$store.dispatch('drivers/getDrivers', id)

      this.drivers = [] // set to array
      drivers.map(driver => {
        let obj = Object.assign({}, {
          id: driver.id,
          description: driver.description,
          name: driver.name,
          subdrivers: driver.subdrivers,
          subdriverShow: false
        })
        this.drivers.push(obj)
      })
    },

    showBtn (index, driver) {
      console.log(index)
    },

    showSubDriver (i, driver) {
      this.drivers.map(d => { if (d.id === driver.id) d.subdriverShow = true }) // toggle show/hide button
      this.$refs.subDriver[i].setSubDriver(i, driver.subdrivers) // set subdrivers
    },

    unShowSubDriver (i, driver) {
      this.drivers.map(d => { if (d.id === driver.id) d.subdriverShow = false }) // toggle show/hide button
      this.$refs.subDriver[i].unSetSubDriver(i) // unset subdrivers
    }
  }
}
</script>

<style>

</style>