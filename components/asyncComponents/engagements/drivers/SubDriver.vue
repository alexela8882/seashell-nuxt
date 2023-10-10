<template>
  <div v-show="subdrivers">
    <v-divider></v-divider>
    <v-card
      tile
      hover
      v-for="(subdriver, i) in subdrivers"
      :key="i"
      outlined
      @click.stop="$router.push(`drivers/subdriver/${subdriver.id}`)"
      :color="boxThemed"
    >
      <v-list-item>
        <v-list-item-avatar
          size="25"
          color="transparent"
        ></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-body-2">{{ subdriver.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['boxThemed'],

  data: () => ({
    subdrivers: false
  }),

  methods: {
    setSubDriver (i, subdrivers) {
      this.subdrivers = subdrivers
      this.$emit('showBtn', i, false)
      this.$emit('hideBtn', i, true)
    },

    unSetSubDriver (i) {
      this.subdrivers = false
      this.$emit('showBtn', i, true)
      this.$emit('hideBtn', i, false)
    }
  }
}
</script>

<style>

</style>