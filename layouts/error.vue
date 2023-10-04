<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center wrap>
        <v-flex xs12 sm8 md4>
          <h1 class="text-h1 font-weight-black text-center">
            Ooops!!!
          </h1>
          <div class="mt-5 text-center">
            <p class="font-weight-light" v-if="error.statusCode === 404">
              {{ pageNotFound }}
            </p>
            <p class="font-weight-light" v-else>
              {{ otherError }}
            </p>
            <v-btn color="primary" nuxt-link to="/">
              Home page
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Backend Network Error'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
      return {
        title
      }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
