<template>
  <v-container grid-list-md text-xs-center>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">PHOTOS</h1>
      </v-card-title>

      <v-tabs v-model="tab" grow>
        <v-tab>
          Server-Side Rendering (Table)
        </v-tab>
        <v-tab>
          Infinite Scroll
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card>
              <v-card-title>
                Photos
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="photos"
                :options.sync="options"
                :server-items-length="totalPhotos"
                :loading="loading"
                :items-per-page="itemsPerPage"
                class="elevation-1"
              >
                <template v-slot:item.url="{ item }">
                  <v-img
                    :src="item.url"
                    lazy-src="https://picsum.photos/10/6?image=1"
                    width="70"
                    height="70"
                  ></v-img>
                </template>
              </v-data-table>
            </v-card>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card color="basil" flat>
            <v-card-text>
              <PhotoCards :photos="list"></PhotoCards>
              <infinite-loading @infinite="infiniteHandler"></infinite-loading>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  middleware: ['auth'],

  head: {
    title: 'Photos'
  },

  components: {
    InfiniteLoading,
    PhotoCards: () => import('@@/components/asyncComponents/photos/PhotoCards/Cards')
  },

  data: () => ({
    page: 1,
    limit: 4,
    list: [],
    tab: null,
    search: null,
    itemsPerPage: 5,
    photos: [],
    busy: false,
    options: {},
    totalPhotos: 0,
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Title', value: 'title' },
      { text: 'Url', value: 'url' }
    ],
  }),
  computed: {
    ...mapState({
      loading: state => state.loading
    }),

    url () {
      return 'https://hn.algolia.com/api/v1/search_by_date?tags=story'
    }
  },
  watch: {
    options: {
      handler () {
        this.getDataFromApi()
          .then(data => {
            this.photos = data.items
            this.totalPhotos = data.total
          })
      },
      deep: true,
    },
  },
  methods: {
    getDataFromApi () {
      this.$store.commit('SET_LOADING', true)
      const url = 'https://jsonplaceholder.typicode.com/photos'
      let args = {
        url: { path: url, target: false },
        options: this.options
      }
      const data = this.$getDataFromApi(args)
      return data
    },
    infiniteHandler($state) {
      axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
        const append = res.data.slice(this.list.length, this.list.length + this.limit)
        this.list = this.list.concat(append)
        $state.loaded()
      }).catch( (err) => {
        $state.complete()
      })
    },
  },
}
</script>