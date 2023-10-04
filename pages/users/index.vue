<template>
  <v-container grid-list-md text-xs-center>
    <v-row>
      <v-col sm="12" md="6">
        <UserCards :users="list"></UserCards>
        <infinite-loading @infinite="infiniteHandler">
          <div slot="spinner">
            <v-skeleton-loader type="list-item-avatar-three-line"></v-skeleton-loader>
          </div>
          <div slot="no-more">
            <v-card>
              <v-card-text>
                <v-btn fab x-small><v-icon>mdi-plus</v-icon></v-btn>
              </v-card-text>
            </v-card>
          </div>
        </infinite-loading>
      </v-col>
      <v-col sm="12" md="6">
        <v-card>
          <v-navigation-drawer permanent>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">Designation</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
              nav
              dense
            >
              <v-list-item-group v-model="item" color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  middleware: ['auth'],

  head: {
    title: 'Users'
  },

  components: {
    InfiniteLoading,
    UserCards: () => import('@@/components/asyncComponents/users/UserCards/Cards')
  },

  data: () => ({
    lastPage: false,
    page: 1,
    limit: 1,
    list: [],

    item: 0,
    items: [
      { text: 'My Files', icon: 'mdi-folder' },
      { text: 'Shared with me', icon: 'mdi-account-multiple' },
      { text: 'Starred', icon: 'mdi-star' },
      { text: 'Recent', icon: 'mdi-history' },
      { text: 'Offline', icon: 'mdi-check-circle' },
      { text: 'Uploads', icon: 'mdi-upload' },
      { text: 'Backups', icon: 'mdi-cloud-upload' },
    ],
  }),

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  methods: {
    async infiniteHandler($state) { 
      if (!this.lastPage) {
        try {
          const res =
          await this.$axios(this.$baseurl('users'))
          const append = res.data.slice(this.list.length, this.list.length + this.limit)
          this.list = this.list.concat(append)
          this.lastPage = append.length > 0 ? false: true
          $state.loaded()
        } catch (err) {
          $state.complete()
        }
      } else {
        $state.complete()
      }
    },
  }
}
</script>