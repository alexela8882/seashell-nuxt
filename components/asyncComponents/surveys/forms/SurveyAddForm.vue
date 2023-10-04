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
            {{ Object.keys(item).length > 0 ? 'Edit survey' : 'Add new survey' }}
          </div>
          <v-spacer></v-spacer>
          <v-btn
            v-if="Object.keys(item).length > 0 && !driverRole"
            icon
            @click.stop="dialog = !dialog"
          ><v-icon>mdi-trash-can</v-icon>
          </v-btn>
          <SurveyDeleteForm
            v-model="dialog"
            @drawer="parentDrawer"
            @removeItem="removeItem"
            :childItem="item"
          ></SurveyDeleteForm>
        </v-toolbar>
      </template>
      <v-list-item>
        <v-list-item-content>
          <SurveySubAddForm
            @updateItem="updateItem"
            ref="subAddForm"
            @drawer="parentDrawer"
            @pushItem="pushItem"
            @replaceItem="replaceItem"
            @updateRound="updateRound"
          ></SurveySubAddForm>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-toolbar outlined flat class="d-flex justify-end">
          <v-btn :disabled="loading" outlined @click.stop="parentDrawer">Cancel</v-btn>
          <v-btn :disabled="loading" depressed color="primary mx-2" @click.stop="saveSurvey">
            Save
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
    driverRole: false,
    drawer: false,
    dialog: false,
    item: {}
  }),

  components: {
    SurveySubAddForm: () => import('./SurveySubAddForm')
  },

  methods: {
    async parentDrawer () {
      await this.$refs.subAddForm.resetForm()
      this.$emit('input', false)
    },

    fillForm (item, driverRole) {
      this.item = Object.assign({}, item)
      this.driverRole = driverRole
      this.$refs.subAddForm.fillForm(item, driverRole)
    },

    saveSurvey () {
      this.$refs.subAddForm.saveSurvey()
    },

    updateRound (item) {
      this.$emit('updateRound', item)
    },

    updateItem (item) {
      this.item = Object.assign({}, item)
    },

    removeItem (item) {
      this.$emit('removeItem', item)
    },

    pushItem (item) {
      this.$emit('pushItem', item)
    },

    replaceItem (item) {
      this.$emit('replaceItem', item)
    }
  }
}
</script>

<style>

</style>