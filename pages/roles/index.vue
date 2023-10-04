<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>

    <div v-else>
      <div class="text-h4">Roles & Permissions</div>

      <v-data-table
        :headers="headers"
        :items="roles ? roles : []"
        :items-per-page="10"
        :loading="loading"
        show-expand
        single-expand
        class="elevation-1 my-5"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td class="py-5" :colspan="headers.length">
            <div class="d-flex flex-column">
              <span class="text-h5">ROLE: {{ item.name }}</span>

              <div class="mt-5 mb-3">
                <div>
                  <span class="text-subtitle-1">USERS</span>
                  <v-row>
                    <v-col cols="12" sm="6" md="5" class="d-flex align-center">
                      <v-autocomplete
                        outlined
                        solo
                        hide-details
                        single-line
                        dense
                        multiple
                        v-model="item.users"
                        :items="users"
                        item-value="id"
                        item-text="name"
                        @change="updateUsers(item.id, item.users)"
                      >
                        <template v-slot:selection="{ item }">
                          <v-chip small color="primary lighten-1">
                            <span>{{ item.name }}</span>
                          </v-chip>
                        </template>
                      </v-autocomplete>
                      <v-btn @click="updateRoleUsers(item.id, item.users)" fab class="ml-3" small><v-icon>mdi-content-save</v-icon></v-btn>
                    </v-col>
                  </v-row>
                </div>

                <v-row>
                  <v-col cols="12" sm="6" md="5">
                    <v-divider class="mt-3"></v-divider>
                  </v-col>
                </v-row>

                <span class="text-subtitle-1">PERMISSIONS</span>
                <v-row>
                  <v-col cols="12" sm="6" md="5" class="d-flex align-center">
                    <v-autocomplete
                      outlined
                      solo
                      hide-details
                      single-line
                      dense
                      multiple
                      v-model="item.permissions"
                      :items="permissions"
                      item-value="id"
                      item-text="name"
                      @change="updatePermissions(item.id, item.permissions)"
                    >
                      <template v-slot:selection="{ item }">
                        <v-chip small color="warning darken-1" class="my-1">
                          <span>{{ item.name }}</span>
                        </v-chip>
                      </template>
                    </v-autocomplete>
                    <v-btn @click="updateRolePermissions(item.id, item.permissions)" fab class="ml-3" small><v-icon>mdi-content-save</v-icon></v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </td>
        </template>

        <template v-slot:item.users="{ item }">
          <span
            v-for="(user, index) in item.users"
            :key="index"
          >
            <v-chip small color="primary lighten-1" v-if="index === 0">
              {{ user.name }}
            </v-chip>
          </span>
          <span v-if="item.users.length - 1 > 0">
            (+{{ item.users.length - 1 }} other{{
              item.users.length - 1 != 1 ? "s" : ""
            }})
          </span>
        </template>


        <template v-slot:item.permissions="{ item }">
          <span
            v-for="(permission, index) in item.permissions"
            :key="index"
          >
            <v-chip small color="warning darken-1" v-if="index === 0">
              {{ permission.name }}
            </v-chip>
          </span>
          <span v-if="item.permissions.length - 1 > 0">
            (+{{ item.permissions.length - 1 }} other{{
              item.permissions.length - 1 != 1 ? "s" : ""
            }})
          </span>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {
      isForbidden: false,
      headers: [
        { text: 'Role', value: 'name' },
        { text: 'Users', value: 'users' },
        { text: 'Permissions', value: 'permissions' }
      ],
      roles: false,
      defaultRoles: [],
      users: [],
      permissions: []
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const roles = await this.$store.dispatch('roles/fetchRoles')
      const permissions = await this.$store.dispatch('roles/fetchPermissions')
      const users = await this.$store.dispatch('users/fetchOpenUsers')

      // set forbidden if status code 403
      if (roles.status === 403) this.isForbidden = true

      this.roles = roles
      this.defaultRoles = roles
      this.permissions = permissions
      this.users = users
    },

    updateUsers (id, ids) {
      let results = this.users.filter(item => ids.includes(item.id)).map(item => item)
      
      const index = this.roles.findIndex(role => role.id === id)
      this.roles[index].users = results
    },

    updatePermissions (id, ids) {
      let results = this.permissions.filter(item => ids.includes(item.id)).map(item => item)
      
      const index = this.roles.findIndex(role => role.id === id)
      this.roles[index].permissions = results
    },

    async updateRoleUsers (id, users) {
      const payload = Object.assign({}, { id: id, users: users })
      const res = await this.$store.dispatch('roles/updateUsers', payload)
      console.log(res)
    },

    async updateRolePermissions (id, permissions) {
      const payload = Object.assign({}, { id: id, permissions: permissions })
      const res = await this.$store.dispatch('roles/updatePermissions', payload)
      console.log(res)
    }
  }
}
</script>

<style>

</style>