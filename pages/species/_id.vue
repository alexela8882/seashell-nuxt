<script>
// imports
import { mapState, mapGetters } from 'vuex'

export default {
  auth: false,
  layout: 'landing',

  data () {
    return {

    }
  }
}

</script>

<template>
  <div class="px-md-16 px-6">
    Species View

    {{ $route.params.id }}
  </div>
</template>

<style scoped>

</style>