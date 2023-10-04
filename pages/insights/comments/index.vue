<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else>
      <v-col sm="12" md="12">
        <div class="mb-5">
          <div>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Comments</div>
          </div>
          <v-tabs show-arrows v-model="tab" class="mt-5" background-color="transparent">
            <v-tab>All comments</v-tab>
            <v-tab :disabled="loading">Sensitive comments</v-tab>
          </v-tabs>
        </div>

        <v-tabs-items v-model="tab" class="see-through">
          <v-tab-item transition="false" reverse-transition="false">
            <AllComments :items="comments" @apply-filter="initialize" :boxThemed="boxThemed"></AllComments>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
  middleware: ['auth'],

  head: {
    title: 'Comments'
  },

  components: {
    AllComments: () => import('@@/components/asyncComponents/comments/AllComments')
  },

  data () {
    return {
      isForbidden: false,
      tab: false,
      comments: false,
      filter: { initial: true }
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      colorThemed: state => state.colorThemed,
      boxThemed: state => state.boxThemed
    })
  },

  created () {
    this.initialize(this.filter)
  },

  methods: {
    async initialize (filter) {
      this.comments = false // reset every call
      const res = await this.$store.dispatch('comments/fetchComments', filter)

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        this.comments = res.data
      }
    }
  }
}
</script>

<style scoped>

</style>