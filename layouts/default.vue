<template>
  <v-app>
    <!-- Navbar -->
    <NavBar v-if="this.$auth.loggedIn"></NavBar>

    <!-- Main -->
    <v-main :class="isDark ? 'custom-main-dark' : 'custom-main'">
      <nuxt class="custom-nuxt-wrapper"></nuxt>
    </v-main>

    <!-- Snackbar -->
    <SnackBar></SnackBar>
    <SavingSnackBar></SavingSnackBar>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

export default {
  components: {
    NavBar: () => import('@@/components/layouts/NavBar'),
    SnackBar: () => import('@@/components/layouts/Snackbar'),
    SavingSnackBar: () => import('@@/components/layouts/SavingSnackbar')
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      colorThemed: state => state.colorThemed
    }),
    isDark () {
      return this.$vuetify.theme.dark ? true : false
    },
    theme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },

  created () {
    if (!this.$auth.loggedIn) this.$router.push('/login')
  },

  mounted () {
    let theme = localStorage.getItem("darkTheme")
    if (theme !== null) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true
        this.$store.commit('SET_THEME', true)
      }
      else {
        this.$vuetify.theme.dark = false
        this.$store.commit('SET_THEME', false)
      }
    } else this.$store.commit('SET_THEME', false)
  }
}
</script>

<style scoped>
</style>
