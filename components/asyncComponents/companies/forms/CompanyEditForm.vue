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
          <v-btn icon @click.stop="parentDrawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="text-h6 font-weight-bold text--secondary">{{ item.name ? item.name : '' }}</div>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog = !dialog">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
          <CompanyDeleteForm v-model="dialog" @drawer="drawer" :childItem="item"></CompanyDeleteForm>
        </v-toolbar>
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
          </v-list-item-title>
          <CompanySubEditForm ref="subEditForm" :defaultChildItem="defaultItem" :childItem="item"></CompanySubEditForm>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-toolbar outlined flat class="d-flex justify-end">
          <v-btn :disabled="loading" outlined @click.stop="parentDrawer">Cancel</v-btn>
          <v-btn :disabled="loading" depressed color="primary mx-2" @click="updateCompany">
            Update
            <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
          </v-btn>
        </v-toolbar>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    item: Object,
    defaultItem: Object,
    value: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  data: () => ({
    dialog: false
  }),

  components: {
    CompanySubEditForm: () => import ('./CompanySubEditForm')
  },

  methods: {
    drawer (arg) {
      this.$emit('input', arg)
    },

    parentDrawer () {
      this.$emit('input', false)
    },

    fillForm () {
      this.$refs.subEditForm.fillForm()
    },

    updateCompany () {
      this.$refs.subEditForm.updateCompany()
    },

    trashCompany (item) {
      console.log(item)
    }
  }
}
</script>

<style>

</style>