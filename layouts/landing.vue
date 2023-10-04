<template>
  <v-app>
    <!-- footer -->
    <Navbar />

    <!-- Main -->
    <v-main>
      <nuxt class="custom-nuxt-wrapper"></nuxt>
    </v-main>

    <!-- footer -->
    <Footer />

    <!-- Snackbar -->
    <SnackBar></SnackBar>
    <SavingSnackBar></SavingSnackBar>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

export default {

  components: {
    Navbar: () => import('@@/components/webportal/Navbar'),
    Footer: () => import('@@/components/webportal/Footer'),
    SnackBar: () => import('@@/components/layouts/Snackbar.vue'),
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

<style>

.avenir-black{
  font-family: Avenir-black !important;
}

.avenir-book{
  font-family: Avenir-book !important;
}

.avenir-roman{
  font-family: Avenir-roman !important;
}

.kollektif{
  font-family: Kollektif !important;
}

.kollektif-italic,
.font-italic,
.kollektif.font-italic,
.font-italic .kollektif,
.kollektif .font-italic{
    font-family: Kollektif-italic !important;
    font-style: normal !important;
}

.kollektif.font-bold,
.kollektif-bold{
  font-family: Kollektif-bold !important;
  font-style: normal !important;
}

.soul-seashell {
  font-family: soul-seashell !important;
}

.soul-seashell-swash {
  font-family: soul-seashell-swash !important;
}

</style>
