<template>
  <div>
    <v-card>
      <v-img
        class="white--text align-end"
        height="200px"
        :src="photo.url"
        lazy-src="https://via.placeholder.com/150"
      >
        <v-card-title>{{ photo.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>

        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['photo']
}
</script>

<style>

</style>