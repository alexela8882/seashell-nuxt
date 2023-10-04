<template>
  <section>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
      :color="isDark ? darkColor : '#00467f'"
      dark
    >
      <v-list dense>
        <v-list-item two-line :class="miniVariant && 'px-2'">
          <v-btn fab small text @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-list-item-content>
            <v-img @click="$router.push('/')" width="90" height="50" :src="bgImage" contain></v-img>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense flat>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          nuxt-link
          class="mt-5"
          :color="linksTheme"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="divider div-transparent"></div>

      <v-list dense flat>
        <v-list-group prepend-icon="flare" :color="linksTheme">
          <template v-slot:activator>
            <v-list-item-title>Insights</v-list-item-title>
          </template>

          <v-list-item
            v-for="(insight, i) in insights"
            :key="i"
            nuxt-link
            :to="insight[2]"
            :color="linksTheme"
          >
            <v-list-item-action>
              <v-icon>{{ insight[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="insight[0]" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="playlist_add_check" :color="linksTheme">
          <template v-slot:activator>
            <v-list-item-title>Survey</v-list-item-title>
          </template>

          <v-list-item
            v-for="(survey, i) in surveys"
            :key="i"
            nuxt-link
            :to="survey[2]"
            :color="linksTheme"
          >
            <v-list-item-action>
              <v-icon>{{ survey[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="survey[0]" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="assessment" :color="linksTheme">
          <template v-slot:activator>
            <v-list-item-title>Analysis</v-list-item-title>
          </template>

          <v-list-item
            v-for="(analysis, i) in analysiss"
            :key="i"
            nuxt-link
            :to="analysis[2]"
            :color="linksTheme"
          >
            <v-list-item-action>
              <v-icon>{{ analysis[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="analysis[0]" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <div class="divider div-transparent my-2"></div>
      </v-list>

      <div class="divider div-transparent my-2"></div>

      <v-list dense flat>
        <v-list-item
          :to="role.to"
          nuxt-link
          :color="linksTheme"
        >
          <v-list-item-action>
            <v-icon>{{ role.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="role.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="py-3 px-4 d-flex justify-space-between">
          <v-chip link outlined label>
            <v-icon left>mdi-tag</v-icon>
            version 1.0.0
          </v-chip>
          <!-- <v-btn @click.stop="toggleTheme" icon>
            <v-icon>{{ isDark ? 'mdi-brightness-5' : 'mdi-brightness-7' }}</v-icon>
          </v-btn> -->
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      flat
      height="95"
      :dark='appBarState.theme'
      :color="appBarState.color"
    >
      <v-btn fab small text v-if="!drawer" @click.stop="drawer = true">
        <v-icon>mdi-menu-open</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-img v-if="appBarState.img" :src="bgImage" contain width="90" height="50"></v-img>
      <v-spacer></v-spacer>
      <div class="mr-1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click.stop="toggleTheme"
              icon
              small
            >
              <v-icon>{{ isDark ? 'mdi-brightness-5' : 'mdi-brightness-7' }}</v-icon>
            </v-btn>
          </template>
          <span>{{ isDark ? 'Switch to light theme' : 'Switch to dark theme' }}</span>
        </v-tooltip>

        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          offset-y
          transition="slide-x-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar size="35" color="purple lighten-1">
                <span class="font-weight-bold white--text">{{ upperSubstring() }}</span>
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-navigation-drawer
              v-model="menu"
              :color="darkColor"
            >
              <v-list dense outlined>
                <v-list-item>
                  <v-list-item-avatar
                    size="36"
                    color="purple lighten-1"
                    class="avatar-top"
                  ><span class="font-weight-bold white--text mx-auto">{{ upperSubstring() }}</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      {{ this.$auth.user.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="my-2">
                      <nuxt-link to="/users/profile" class="text-decoration-none">Manage your account</nuxt-link>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list dense nav outlined>
                <v-list-item link @click="logout">
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Signout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  data () {
    return {
      menu: false,
      drawer: true,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/'
        }
      ],
      insights: [
        // ['Engagement', 'av_timer', '/insights/engagement'],
        ['Comments', 'chat_bubble_outline', '/insights/comments'],
        // ['Topics', 'speaker_notes', '/insights/topics'],
        // ['Experience Cycle', 'donut_large', ''],
        // ['Improve', 'school', ''],
      ],
      surveys: [
        ['Schedules', '', '/surveys/schedules'],
        ['Questions', '', '/surveys/questions'],
        // ['Values', '', ''],
        ['Data Settings', '', '/surveys/settings']
      ],
      analysiss: [
        // ['Segments', 'pages', ''],
        ['Drivers', 'track_changes', '/analysis/drivers'],
        // ['Question Scores', 'format_list_bulleted', ''],
      ],
      companies: [
        ['Employees', '', '/companies/employees'],
        ['Attributes', '', '/companies/attributes']
        // ['Access Control', '', ''],
        // ['Branding', '', ''],
        // ['Accounts', '', '/companies/accounts'],
      ],
      role: {
        icon: 'mdi-shield-account',
        title: 'Roles & Permissions',
        to: '/roles'
      },
      title: 'Nuxt Vuetify'
    }
  },

  computed: {
    darkColor () {
      return this.$vuetify.theme.dark ? '#2B2424' : ''
    },
    primaryColor () {
      return !this.$vuetify.theme.dark ? 'primary' : ''
    },
    lightColor () {
      return !this.$vuetify.theme.dark ? 'white' : '#1e1e1e'
    },
    isDark () {
      return this.$vuetify.theme.dark ? true : false
    },
    linksTheme () {
      return this.$vuetify.theme.dark ? 'primary lighten-3' : 'accent'
    },
    bgImage () {
      return this.$vuetify.theme.dark ? '/MULTICOLORDOT SITE LOGO_FINAL.png' : '/MULTICOLORDOT SITE LOGO_FINAL-WHITE.png'
    },
    appBarState () {
      let state = { color: null, theme: false, img: false }

      const isDark = this.$vuetify.theme.dark ? true : false

      if (isDark) {
        state.color = '#1e1e1e'
        state.theme = true
      } else {
        if (!this.$vuetify.breakpoint.xs &&
            !this.$vuetify.breakpoint.sm &&
            !this.$vuetify.breakpoint.md) {
          state.color = 'white'
          state.theme = false
        } else {
          state.color = 'primary'
          state.theme = true
        }
      }

      if (!this.$vuetify.breakpoint.xs &&
          !this.$vuetify.breakpoint.sm &&
          !this.$vuetify.breakpoint.md
      ) state.img = false
      else state.img = true

      return state
    }
  },

  methods: {
    async logout () {
      await this.$auth.logout()
      this.$router.push('/login')
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'You\'ve logged out' })

      // logout azure ad
      if (process.browser) {
        const account = this.$AuthService.getAccount()
        if (account) return this.$AuthService.logout()
      }
    },

    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark; // switch between themes in vuetify
      localStorage.setItem("darkTheme", this.$vuetify.theme.dark) // store into localStorage

      this.$store.commit('SET_THEME', this.$vuetify.theme.dark) // toggle the vuex store data
    },

    upperSubstring () {
      const name = this.$auth.user.name
      // const split = name.split(' ')
      // const firstName = split[0].substring(0, 1).toUpperCase()
      // const lastName = split[1].substring(0, 1).toUpperCase()
      // return `${firstName}${lastName}`
      return name
    },
  }
}
</script>

<style scoped>
.avatar-top {
  margin-top: -30px;
}

.divider
{
	position: relative;
	height: 2px;
}

.div-transparent:before
{
	content: "";
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	width: 90%;
	height: 2px;
	background-image: linear-gradient(to right, transparent, rgb(255, 255, 255), transparent);
}
</style>