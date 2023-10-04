<template>
  <div v-if="loading" class="text-center">
    <v-overlay opacity="0" z-index="999">
      <v-card>
        <v-card-text>
          <v-progress-circular
            class="progress"
            indeterminate
            size="64"
          ></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),

  methods: {
    start () {
      this.loading = true
    },

    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.v-card {
  background-color: #fff !important;
}
.v-progress-circular {
  color: #4CAF50 !important;
}
</style>