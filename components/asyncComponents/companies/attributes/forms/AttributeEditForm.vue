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
            Edit "{{ item.name || 'No Data' }}" attribute
          </div>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog = !dialog">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
          <AttributeDeleteForm v-model="dialog" @drawer="drawer" :childItem="item"></AttributeDeleteForm>
        </v-toolbar>
      </template>
      <v-list-item>
        <v-list-item-content>
          <AttributeSubEditForm @updateItem="updateItem" ref="subEditForm"></AttributeSubEditForm>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-toolbar outlined flat class="d-flex justify-end">
          <v-btn :disabled="loading" outlined @click.stop="parentDrawer">Cancel</v-btn>
          <v-btn :disabled="loading" depressed color="primary mx-2" @click.stop="updateAttribute">
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
    item: {}
  }),

  components: {
    AttributeSubEditForm: () => import('./AttributeSubEditForm')
  },

  methods: {
    drawer (arg) {
      this.$emit('input', arg)
      this.$emit('initialView', true) // update initial view
    },

    parentDrawer () {
      this.$emit('input', false)
    },

    fillForm (item) {
      this.item = Object.assign({}, item)
      this.$refs.subEditForm.fillForm(item)
    },

    updateAttribute () {
      this.$refs.subEditForm.updateAttribute()
    },

    updateItem (item) {
      this.item = Object.assign({}, item)
      this.$emit('updateMainItem', item) // update parent on changes
    }
  }
}
</script>

<style>

</style>