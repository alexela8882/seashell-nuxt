<template>
  <v-snackbar
    bottom
    :value="snackbar"
    :timeout="snackbarTimeout"
  >
    <v-icon :color="snackbarIconColor">{{ snackbarIcon }}</v-icon>
    &nbsp;{{ snackbarText }}
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        v-bind="attrs"
        @click="closeSnackbar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      snackbar: state => state.snackbar,
      snackbarIcon: state => state.snackbarIcon,
      snackbarIconColor: state => state.snackbarIconColor,
      snackbarText: state => state.snackbarText,
      snackbarTimeout: state => state.snackbarTimeout
    })
  },
  methods: {
    closeSnackbar() {
      this.$store.commit('CLOSE_SNACKBAR')
    }
  }
};
</script>