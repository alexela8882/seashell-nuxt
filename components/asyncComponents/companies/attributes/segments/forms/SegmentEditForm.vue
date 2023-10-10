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
          <div class="text-h6 font-weight-bold text--secondary">
            Edit "{{ item.name || 'No Data' }}" segment
          </div>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog = !dialog">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
          <SegmentDeleteForm v-model="dialog" @drawer="drawer" :childItem="item"></SegmentDeleteForm>
        </v-toolbar>
      </template>
      <v-list-item>
        <v-list-item-content>
          <SegmentSubEditForm @updateItem="updateItem" ref="subEditForm"></SegmentSubEditForm>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-toolbar outlined flat class="d-flex justify-end">
          <v-btn :disabled="loading" outlined @click.stop="parentDrawer">Cancel</v-btn>
          <v-btn :disabled="loading" depressed color="primary mx-2" @click.stop="updateSegment">
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
    dialog: false,
    item: {},
  }),

  components: {
    SegmentSubEditForm: () => import('./SegmentSubEditForm'),
    SegmentDeleteForm: () => import('./SegmentDeleteForm')
  },

  methods: {
    drawer (arg) {
      this.$emit('input', arg)
    },

    parentDrawer () {
      this.$emit('input', false)
    },

    fillForm (item) {
      this.item = Object.assign({}, item)
      this.$refs.subEditForm.fillForm(item)
    },

    updateSegment () {
      this.$refs.subEditForm.updateSegment()
    },

    updateItem (item) {
      this.item = Object.assign({}, item)
    },

    trashCompany (item) {
      console.log(item)
    }
  }
}
</script>

<style>

</style>