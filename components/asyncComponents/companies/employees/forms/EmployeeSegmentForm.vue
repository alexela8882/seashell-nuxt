<template>
  <v-container class="px-0 mx-0">
    <form ref="form" @submit.prevent="updateOptionalAttribute">
      <v-row v-if="!attributes">
        <v-col>
          <v-skeleton-loader
            height="94"
            type="list-item-two-line"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-if="attributes.length <= 0">
          <div class="text-center">
            No optional segments
          </div>
        </v-col>
        <v-col v-else class="py-0">
          <v-row>
            <v-col cols="12">
              <div class="text-h5 mb-5">Segments (Optional)</div>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              md="3"
              v-for="(attrib, i) in attributes"
              :key="i"
            >
              <v-autocomplete
                :disabled="employee[attrib.name].underSurveyRound"
                v-if="attrib.type == 1"
                outlined
                dense
                :label="attrib.name"
                :items="attrib.segments"
                item-text="name"
                item-value="id"
                item-disabled="underSurveyRound"
                v-model="employee[attrib.name].segment_id"
                clearable
              ></v-autocomplete>
              <v-autocomplete
                :disabled="employee[attrib.name].underSurveyRound"
                v-else
                outlined
                dense
                :label="attrib.name"
                :items="employees || []"
                item-text="fullname"
                item-value="id"
                item-disabled="underSurveyRound"
                v-model="employee[attrib.name].segment_id"
                clearable
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-btn type="submit" :disabled="loading" depressed color="primary">
            Save segment
            <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
          </v-btn>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  props: {
    employee: {
      type: Object
    }
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  data () {
    return {
      attributes: false,
      employees: false
    }
  },

  async created () {
    this.fillForm()
  },

  methods: {
    async updateOptionalAttribute () {
      await this.$store.dispatch('employees/updateOptionalAttribute', this.employee)
    },

    async fillForm () {
      this.employees = await this.$store.dispatch('employees/perEmployee', { is_optional: 1, user_id: this.$route.params.id }) // get employees per employee
      this.attributes = await this.$store.dispatch('attributes/optionalAttributes') // get attributes
    }
  }
}
</script>

<style>

</style>