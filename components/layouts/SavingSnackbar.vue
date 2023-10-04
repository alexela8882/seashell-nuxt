<template>
  <v-snackbar
    bottom
    :value="snackbar"
    :timeout="snackbarTimeout"
  >
    <v-icon :color="snackbarIconColor">{{ snackbarIcon }}</v-icon>
    &nbsp;{{ snackbarText }}
  </v-snackbar>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      snackbar: state => state.savingSnackbar,
      snackbarIcon: state => state.savingSnackbarIcon,
      snackbarIconColor: state => state.savingSnackbarIconColor,
      snackbarText: state => state.savingSnackbarText,
      snackbarTimeout: state => state.savingSnackbarTimeout
    })
  },
  methods: {
    closeSnackbar() {
      this.$store.commit('CLOSE_SAVING_SNACKBAR')
    }
  }
};
</script>