<template>
  <v-container>
    <v-navigation-drawer
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
      absolute
      hide-overlay
      temporary
      right
      width="60vh"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-toolbar>
              <div class="text-h6 font-weight-bold text--secondary">{{ item.name ? item.name.value : '' }}</div>
              <v-spacer></v-spacer>
              <v-icon>mdi-trash-can</v-icon>
            </v-toolbar>
          </v-list-item-title>

          <v-list-item>
            <!-- <pre>{{ item }}</pre> -->
          </v-list-item>

          <v-list-item>
            <SubEditForm @event-from-child="testFunc" title="Hello World" :childItem=item></SubEditForm>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import SubEditForm from './SubEditForm'

export default {
  props: {
    item: Object,
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
  }),

  components: {
    SubEditForm: SubEditForm
  },

  data: () => ({
  }),

  methods: {
    testFunc(e) {
      alert(e)
    }
  }
}
</script>

<style>

</style>