<template>
  <v-container>
    <v-navigation-drawer
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
      hide-overlay
      temporary
      right
      app
      fixed
      clipped
      width="80vh"
    >
      <template v-slot:prepend>
        <v-toolbar outlined flat>
          <v-btn icon @click.stop="$emit('input', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="text-h6 font-weight-bold text--secondary">
            View question
          </div>
        </v-toolbar>
      </template>
      <v-list-item>
        <v-list-item-content>
          <div class="text-body-2 font-weight-bold">Driver</div>
          <div class="text-body-2 my-2">{{ item.driver }}</div>
          <div class="text-body-2 font-weight-bold mt-2">Question</div>
          <div class="text-body-2 my-2">{{ item.question }}</div>
          <div class="text-body-2 font-weight-bold mt-2">Type</div>
          <v-row class="ml-0">
            <v-chip
              color="success darken-2 my-2"
              label
              text-color="white"
              small
            >
              <v-icon small left>mdi-flag</v-icon>
              Standard question
            </v-chip>
          </v-row>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-toolbar outlined flat class="d-flex justify-end">
          <v-btn outlined @click.stop="$emit('input', false)">Close</v-btn>
        </v-toolbar>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    drawer: false,
    dialog: false,
    item: {}
  }),

  methods: {
    async fillForm (item) {
      this.item = Object.assign({}, await item)
    }
  }
}
</script>

<style>

</style>