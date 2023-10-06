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
    ],
    componentLoading: false,
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
    },

    redirectBack () {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)

      this.$router.push(`/species?${urlParams}`)
    },

    searchSpecies() {
      this.$router.push('/species?keyword='+this.keyword)
    },

    openImage(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
      this.dialog = true;
    }
  }
}

</script>

<!-- <template>
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
</template> -->
<template>
  <div class="px-md-16 pa-5">
    <div
      v-if="componentLoading"
      class="d-flex align-items-center justify-content-center"
      style="height: 80vh;">
      <v-overlay
        :model-value="componentLoading"
        :opacity="0"
        class="align-center justify-center"
      >
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </div>
    <div v-else>
      <v-breadcrumbs :items="bcrumbs">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>

      <div class="row mt-5">
        <a style="width: fit-content;" href="javascript:void(0);" @click="redirectBack()">Back</a>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="card card-sticky">


              <div class="card-body electric_blue white--text">
                <div class="text-h6 font-bold text-uppercase">
                  <span class="kollektif">Classification</span>
                </div>
                <ul class="kollektif">

                </ul>
              </div>
              
          </div>
        </div>
      </div>

      <div>
        Species View {{ $route.params.id }}

      <pre>{{ specie }}</pre>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>