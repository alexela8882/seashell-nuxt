<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Data Settings</div>
          </span>
          <div>
            <!-- <v-btn depressed class="secondary darken-1 mx-1" @click.stop="$router.push('drivers/add')">Add schedule</v-btn> -->
          </div>
        </div>
        <v-tabs show-arrows v-model="tab" class="mt-5" background-color="transparent">
          <v-tab>Benchmark</v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="12" sm="12" md="8" offset-md="2">
        <v-tabs-items v-model="tab" class="see-through">
          <v-tab-item transition="false" reverse-transition="false">
            <v-row>
              <v-col cols="12"><div class="text-h6">Attributes as benchmark</div></v-col>
              <v-col cols="12" sm="12" md="6">
                <v-autocomplete
                  outlined
                  dense
                  :items="attributes || []"
                  :disabled="loading"
                  item-text="name"
                  item-value="id"
                  label="Attribute"
                  v-model="settings.attribute_id"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-autocomplete
                  outlined
                  dense
                  :items="percentiles"
                  disabled
                  item-text="name"
                  item-value="value"
                  label="Percentile"
                  v-model="settings.percentile"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" class="mt-5 py-0 text-center">
                <v-btn
                  depressed
                  color="primary"
                  :disabled="loading"
                  @click.stop="saveSettings"
                >
                  Save settings
                  <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                </v-btn>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Survey Data Settings'
  },

  data () {
    return {
      isForbidden: false,
      tab: 0,
      percentiles: [
        { name: 'Top 5%', value: 5 },
        { name: 'Top 10%', value: 10 },
        { name: 'Top 25%', value: 25 },
        { name: 'Average', value: 0 },
        { name: 'Bottom 25%', value: -25 },
        { name: 'Bottom 10%', value: -10 },
        { name: 'Bottom 5%', value: -5 }
      ],
      formData: {
        attribute: 1,
        percentile: 0
      }
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      colorThemed: state => state.colorThemed
    }),
    ...mapGetters({
      attributes: 'attributes/getAttributes',
      settings: 'surveySettings/getSettings'
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('attributes/fetchAttributes')
      await this.$store.dispatch('surveySettings/fetchSettings')

      if (res.status === 403) this.isForbidden = true
      else this.isForbidden = false
    },

    async saveSettings () {
      await this.$store.dispatch('surveySettings/updateSettings', this.settings)
    }
  }
}
</script>

<style>

</style>