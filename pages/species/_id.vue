<script>
// imports
import { mapState, mapGetters } from 'vuex'

export default {
  head: {
    title: 'Species View'
  },

  auth: false,
  layout: 'landing',

  data: () => ({
    bcrumbs: [
      {
        text: 'Home',
        to: '/',
      }, {
        text: 'Species',
        to: '/species',
        exact: true
      }, {
        text: 'View',
        to: null,
        active: true
      }
    ]
  }),

  computed: {
    ...mapGetters({
      specie: 'species/getSpecie'
    })
  },

  mounted () {
    this.initialize()
  },

  methods: {
    async initialize () {
      await this.$store.dispatch('species/fetchSpecie', { id: this.$route.params.id })
    }
  }
}

</script>

<template>
  <div class="px-md-16 px-6">
    <v-breadcrumbs :items="bcrumbs">
      <template v-slot:title="{ item }">
        {{ item.title.toUpperCase() }}
      </template>
    </v-breadcrumbs>

    <div>
      Species View {{ $route.params.id }}

      <pre>{{ specie }}</pre>
    </div>
  </div>
</template>

<style scoped>

</style>