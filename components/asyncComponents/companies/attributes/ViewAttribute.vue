<template>
  <v-container>
    <div>
      <v-row>
        <v-col sm="12" md="12" v-if="!attribute">
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-skeleton-loader type="list-item-three-line" ></v-skeleton-loader>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-skeleton-loader type="list-item-two-line" ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        
        <v-col cols="12" v-else>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <span class="d-flex align-center">
                <div class="text-caption font-weight-bold text--secondary text-uppercase">
                  <v-icon small left>{{ attributeType.icon }}</v-icon>
                  {{ attributeType.name }} Attribute
                </div>
                <div class="d-flex align-center text-caption font-weight-bold text-uppercase">
                  <v-icon :color="`${attributeStatus.color} darken-2`" large right>mdi-circle-medium</v-icon>
                  <span>{{ attributeStatus.name }}</span>
                </div>
              </span>

              <div class="text-h4 font-weight-bold my-5">{{ attribute.name }}</div>
              <v-btn @click="toggleAttribDrawer(attribute)" color="primary" small depressed>Edit attribute</v-btn>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <div class="text-caption font-weight-bold text--secondary text-uppercase">Restrictions</div>
              <div class="d-flex align-center text-body-2 my-2">
                <v-icon :color="attributeOptional.color" left>{{ attributeOptional.icon }}</v-icon>
                <span>{{ attributeOptional.name }}</span>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div v-if="!segments">
        <v-skeleton-loader type="table"></v-skeleton-loader>
      </div>

      <div v-else>
        <v-card-title>
          Segments&nbsp;
          <div class="text-subtitle-1 font-weight-bold text--secondary">({{ segments.length }})</div>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field
            v-if="!addSegment"
            v-model="search"
            append-icon="mdi-magnify"
            placeholder="Search"
            single-line
          >
            <template v-slot:prepend>
              <v-btn
                v-if="attributeType.name == 'Option'"
                tile
                @click.stop="addSegment = !addSegment"
                depressed
                small
                color="primary"
              >Add segment</v-btn>
            </template>
          </v-text-field>
          <ValidationObserver v-if="addSegment && attributeType.name == 'Option'" ref="observer" v-slot="{ reset }">
            <form class="d-flex" ref="form" @reset.prevent="reset" @submit.prevent="saveSegment">
              <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                <v-text-field
                  v-model="segment.name"
                  placeholder="eg. Web Dev"
                  single-line
                  :error-messages="errors"
                >
                  <template v-slot:prepend>
                    <v-btn
                      text
                      tile
                      small
                      color="secondary"
                      class="ma-0"
                      @click="addSegment = false">
                      Cancel
                    </v-btn>
                  </template>
                  <template v-slot:append>
                    <v-btn
                      depressed 
                      tile
                      small
                      color="primary"
                      class="ma-0"
                      @click="saveSegment"
                      :disabled="loading"
                    >
                      Add
                      <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
                    </v-btn>
                  </template>
                </v-text-field>
              </ValidationProvider>
            </form>
          </ValidationObserver>
        </v-card-title>

        <v-data-table
          :loading="loading"
          :search="search"
          :headers="headers"
          :items="segments2"
          :items-per-page="5"
          class="see-through"
          :show-expand="attribute.type == 2 && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)"
        >
          <template v-if="($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)" v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length" class="py-5">
              <v-chip
                class="ma-1"
                color="indigo"
                text-color="white"
                v-for="(employee, i) in item.employees"
                :key="i"
              >
                <v-avatar left>
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                {{ employee }}
              </v-chip>
            </td>
          </template>
          <template v-if="attribute.type == 2" v-slot:item.employees="{ item }">
            <v-chip
              color="indigo"
              text-color="white"
              v-for="(employee, i) in item.employees"
              :key="i"
              class="ma-1 hidden-sm-and-down"
            >
              <v-avatar left>
                <v-icon>mdi-account-circle</v-icon>
              </v-avatar>
              {{ employee }}
            </v-chip>
          </template>
          <template v-if="attribute.type == 2" v-slot:no-data>
            <div class="text-center my-5">
              <div class="text-h6 text--primary">No segments in {{ attribute.name }}</div>
              <div class="text-caption">{{ attribute.name }} are automatically created when the {{ attribute.name }} attribute is set for an employee.</div>
            </div>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="toggleDrawer(item)"
            >mdi-square-edit-outline</v-icon>
          </template>
        </v-data-table>
      </div>
      <SegmentEditForm ref="editForm" v-model="drawer"></SegmentEditForm>
      <AttribEditForm @updateMainItem="updateMainItem" @initialView="initialView" ref="attribEditForm" v-model="attribDrawer"></AttribEditForm>
    </div>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  data: () => ({
    expanded: [],
    attribDrawer: false,
    drawer: false,
    attribute: false,
    segments: false,
    segment: {
      name: null,
      employee: null,
      range: null
    },
    addSegment: false,
    search: '',
    headers: []
  }),

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
    AttribEditForm: () => import('./forms/AttributeEditForm'),
    SegmentEditForm: () => import('./segments/forms/SegmentEditForm')
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    ...mapGetters({
      segments2: 'segments/perAttributeSegments'
    }),
    attributeType () {
      let typeObj = {}
      if (this.attribute.type == 1) {
        typeObj = Object.assign({}, { name: 'Option', icon: 'mdi-view-list-outline' })
      } else if (this.attribute.type == 2) {
        typeObj = Object.assign({}, { name: 'Employee', icon: 'mdi-account-tie' })
      } else {
        typeObj = Object.assign({}, { name: 'Number', icon: 'mdi-counter' })
      }
      return typeObj
    },

    attributeStatus () {
      let statusObj = {}
      if (this.attribute.status == 1) {
        statusObj = Object.assign({}, { name: 'Active', color: 'green' })
      } else {
        statusObj = Object.assign({}, { name: 'Inactive', color: 'red' })
      }
      return statusObj
    },

    attributeOptional () {
      let optionObj = {}
      if (this.attribute.optional == 0) {
        optionObj = Object.assign({},
          {
            name: 'Consent required to collect data',
            color: 'green',
            icon: 'check_circle_outline'
          }
        )
      } else {
        optionObj = Object.assign({},
          {
            name: 'Consent not required to collect data',
            color: 'red',
            icon: 'highlight_off'
          }
        )
      }
      return optionObj
    }
  },

  methods: {
    initialView (arg) { // escalated from AttributeEditForm
      this.$emit('initialView', arg)
    },

    async getAttribute (item) {
      this.attribute = Object.assign({}, item)
    },

    async getSegment (attribute_id) {
      this.segments = [] // reset segments
      this.addSegment = false // reset trigger

      const res = await this.$store.dispatch('segments/perAttributeSegments', attribute_id)
      this.segments = res // set segments

      const items = res.map((item) => {
        Object.keys(item).forEach((key) => {
          // delete unnecessary item
          if (item[key] === null || item[key] === undefined) delete item[key]
        })
        return item
      })

      if (items === undefined || items.length === 0) {
        this.headers = []
      } else {
        this.headers = [] // reset headers
        const headers = Object.keys(items[0]).forEach((key, i) => {
          const header = {}
          const val = items[0][key] // item values

          // filter string-only values
          if(typeof val === 'number') return
          if(val % 1 === 0) return

          header['text'] = key ? key.toUpperCase() : 'text'
          header['value'] = key ? key : 'value'
          this.headers.push(header) // assign new headers
        })
        this.attribute.type == 1 ? this.headers.push({'text': 'ACTION', 'value': 'action'}) : '' // when Option type
      }
    },

    saveSegment () {
      const segment = {
        attribute_id: this.attribute.id,
        type_id: this.attribute.type,
        name: this.segment.name
      }

      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('segments/storeSegment', segment)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend

          // reset segment & validation
          // initialize headers
          if (res.response) {
            if (Object.keys(this.segments).length === 1) {
              this.getSegment(segment.attribute_id) // initialize headers for first record
            }
            this.segment = {}
            this.$refs.form.reset()
          }
        })
      })
    },

    toggleDrawer(item) {
      this.drawer = !this.drawer // toggle drawer
      this.$refs.editForm.fillForm(item) // pass the item
    },

    toggleAttribDrawer(item) {
      this.attribDrawer = !this.attribDrawer // toggle drawer
      this.$refs.attribEditForm.fillForm(item) // pass the item
    },

    updateMainItem (item) {
      this.attribute = Object.assign({}, item)
      this.$emit('updateList', item)
    }
  }
}
</script>

<style>

</style>