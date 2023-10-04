<template>
  <v-app>
    <!-- Main -->
    <v-main class="custom-main-guest">
      <nuxt />
    </v-main>

    <!-- Snackbar -->
    <SnackBar></SnackBar>
  </v-app>
</template>

<script>
export default {
  components: {
    SnackBar: () => import('@@/components/layouts/Snackbar')
  }
}
</script>

<style>

</style>