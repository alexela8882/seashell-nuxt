<template>
  <v-container>
    <ForbiddenPage v-if="isForbidden"></ForbiddenPage>
    <v-row v-else>
      <v-col sm="12" md="12">
        <div class="d-flex justify-space-between">
          <span>
            <div :class="`text-h4 font-weight-bold ${textThemed}`">Attributes</div>
          </span>
          <div>
            <v-btn @click.stop="addAttrib = !addAttrib" :disabled="addAttrib" depressed class="secondary darken-1 mx-1">Add attribute</v-btn>
          </div>
        </div>
      </v-col>

      <v-col sm="12" md="12">
        <v-card :color="boxThemed">
          <div class="d-md-flex justify-stretch pa-sm-5">
            <div class="hidden-md-and-up">
              <v-card v-if="!attributes" flat>
                <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
              </v-card>
              <v-tabs v-else show-arrows v-model="tab" background-color="transparent">
                <v-tab v-for="(attribute, i) in attributes" :key="i" @click="viewAttrib(attribute)">
                  {{ attribute.name }}
                </v-tab>
              </v-tabs>
            </div>
            <v-navigation-drawer permanent stateless height="75vh" class="mt-5 hidden-sm-and-down" :color="boxThemed">
              <v-list nav dense>
                <v-skeleton-loader
                  v-if="!attributes"
                  height="94"
                  type="list-item-avatar-three-line"
                ></v-skeleton-loader>
                <v-list-item-group v-else color="primary" mandatory>
                  <v-list-item v-if="attributes.length == 0">
                    <v-list-item-icon @click.stop="addAttrib = !addAttrib">
                      <v-icon>mdi-plus</v-icon>
                      Add attribute
                    </v-list-item-icon>
                  </v-list-item>
                  <v-list-item v-for="(attribute, i) in attributes" :key="i" @click="viewAttrib(attribute)">
                    <v-list-item-icon>
                      <v-icon v-text="attribType(attribute.type)"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="attribute.name"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
            <div style="width: 100%;" class="pl-sm-5">
              <div v-if="!addAttrib && initialView" class="text-center pa-5">
                <v-img class="mx-auto mb-3" contain width="500" height="350" src="/attributes_1483688447 [Converted].png"></v-img>
                <div style="width: 90%; margin: 0 auto;">
                  <div class="text-subtitle-1 font-weight-bold">What are attributes?</div>
                  <div class="text-body-2 my-2">
                    Attributes are values you can assign to employees in order to place them into segments. For example, employees can be segmented by manager, department, or length of tenure.
                  </div>

                  <div class="text-subtitle-1 font-weight-bold mt-5">Segment-specific insights</div>
                  <div class="text-body-2 my-2">
                    Assigning attributes enables Esco Engagement to identify employee segments that score higher or lower than others. The more you assign, the more insight you’ll get into which combination of attributes are associated with higher levels of employee satisfaction. Attributes can also be applied to historical data.
                  </div>
                </div>
              </div>
              <ViewAttribute
                ref="setAttrib"
                v-if="!addAttrib"
                :hidden="initialView"
                @initialView="initialView = true"
                @updateList="updateList"
              ></ViewAttribute>
              <ValidationObserver v-else ref="observer" v-slot="{ reset }">
                <form ref="form" @reset.prevent="reset" @submit.prevent="saveAttribute">
                  <div class="text-h4 font-weight-bold ma-4">New Attribute</div>
                  <div class="text-body-1 ma-4">Type</div>
                  <!-- <v-tabs
                    v-model="attribute.type"
                    centered
                    icons-and-text
                    grow
                    class="ma-4"
                  >
                    <v-tab v-for="i in 3" :key="i" :href="`#tab-${i}`">
                      <div class="text-h6 font-weight-black">
                        {{ i == 1 ? 'Option' : (i == 2 ? 'Employee' : 'Number') }}
                      </div>
                      <v-icon x-large>
                        {{ i == 1 ? 'mdi-view-list-outline' : (i == 2 ? 'mdi-account-tie' : 'mdi-counter') }}
                      </v-icon>
                    </v-tab>
                  </v-tabs> -->

                  <v-item-group mandatory v-model="attribute.type">
                    <v-container>
                      <v-row>
                        <v-col
                          v-for="n in 3"
                          :key="n"
                          cols="12"
                          md="4"
                        >
                          <v-item v-slot:default="{ active, toggle }" :value="`tab-${n}`">
                            <div class="d-flex flex-column align-center" @click="toggle" style="cursor: pointer">
                              <v-img
                                contain
                                width="100"
                                height="100"
                                :src="attributeTypeImage(n, active)"
                                :lazy-src="`/Vector Smart Object2${n+1}.png`"
                              ></v-img>
                              <div :class="`text-h6 ${active ? 'blue--text' : ''}`">
                                {{ n == 1 ? 'Option' : (n == 2 ? 'Employee' : 'Number')}}
                              </div>
                            </div>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>

                  <v-tabs-items v-model="attribute.type">
                    <v-tab-item
                      transition="false"
                      reverse-transition="false"
                      v-for="i in 3"
                      :key="i"
                      :value="`tab-${i}`"
                      class="see-through"
                    >
                      <v-card :color="boxThemed" flat>
                        <v-card-text>
                          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                            <div class="text-body-1 my-4">Name</div>
                            <v-text-field
                              :error-messages="errors"
                              v-model="attribute.name"
                              outlined
                              dense
                              placeholder='eg. "Countries" or "Job Level" or "Salary Brand" then enter the options below'
                            ></v-text-field>
                          </ValidationProvider>

                          <div class="text-body-1 text--primary my-4">Require employee consent</div>
                          <!-- <v-btn-toggle
                            v-model="attribute.optional"
                            mandatory
                            class="d-flex flex-column"
                          >
                            <v-btn class="text-truncate" :color="!attribute.optional ? optionalColor : 'white'">
                              <v-icon left>mdi-thumb-up-outline</v-icon>
                              Consent required to collect data
                            </v-btn>
                            <v-btn class="text-truncate" :color="attribute.optional ? optionalColor : 'white'">
                              <v-icon left>mdi-thumb-down-outline</v-icon>
                              Consent not required to collect data
                            </v-btn>
                          </v-btn-toggle> -->

                          <div class="d-sm-flex align-center justify-center">
                            <v-card
                              outlined
                              class="my-2 mr-sm-1"
                              @click="attribute.optional = 0"
                              :color="attribute.optional == 0 ? 'green' : ''"
                              :dark="attribute.optional == 0"
                            >
                              <v-card-text class="d-flex">
                                <v-icon left x-large>check_circle_outline</v-icon>
                                <div class="text-body-2 align-self-center font-weight-bold">Consent required to collect data</div>
                              </v-card-text>
                            </v-card>

                            <v-card
                              outlined
                              class="my-2 ml-sm-1"
                              @click="attribute.optional = 1"
                              :color="attribute.optional == 1 ? 'red' : ''"
                              :dark="attribute.optional == 1"
                            >
                              <v-card-text class="d-flex">
                                <v-icon left x-large>highlight_off</v-icon>
                                <div class="text-subtitle-2 align-self-center">Consent not required to collect data</div>
                              </v-card-text>
                            </v-card>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>

                  <div class="text-center">
                    <v-btn
                      :loading="loading"
                      type="submit"
                      class="ma-4"
                      color="primary"
                      depressed
                    >Create Attribute</v-btn>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  middleware: ['auth'],

  head: {
    title: 'Company Attributes'
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
    ViewAttribute: () => import('@@/components/asyncComponents/companies/attributes/ViewAttribute')
  },

  data: () => ({
    isForbidden: false,
    selected: null,
    initialView: true,
    addAttrib: false,
    newAttrib: false,
    attributes: false,
    attribute: {
      type: null,
      name: null,
      optional: 0,
    }
  }),

  computed: {
    // ...mapGetters({
    //   attributes: 'attributes/getAttributes'
    // }),
    ...mapState({
      loading: state => state.loading,
      textThemed: state => state.textThemed,
      boxThemed: state => state.boxThemed
    }),
    optionalColor () {
      const color = this.attribute.optional ? 'red lighten-4' : 'green lighten-4'
      return color
    }
  },

  async created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$store.dispatch('attributes/fetchAttributes')

      if (res.status === 403) this.isForbidden = true
      else {
        this.isForbidden = false
        this.attributes = res.data
      }
    },

    attribType (type) {
      let icon = null
      if (type == 1) {
        icon = 'mdi-view-list-outline'
      } else if (type == 2) {
        icon = 'mdi-account-tie'
      } else { icon = 'mdi-counter' }

      return icon
    },

    async viewAttrib (item) {
      this.addAttrib = false
      this.initialView = false
      await this.addAttrib // await fix $refs missing due to v-if
      this.$refs.setAttrib.getAttribute(item)
      this.$refs.setAttrib.getSegment(item.id)
    },

    async saveAttribute() {
      const attrib = Object.assign(
        {},
        {
          name: this.attribute.name,
          type: parseInt(this.attribute.type.replace("tab-", "")),
          optional: this.attribute.optional
        }
      )

      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('attributes/storeAttribute', attrib)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend

          // reset attribute & validation
          if (res.response) {
            this.attribute = {
              type: null,
              name: null,
              optional: 0,
            }
            this.$refs.form.reset()
          }
        })
      })
    },

    attributeTypeImage (type, isActive) {
      let img = null
      if (type == 1) {
        if (isActive) img = '/option icon.png'
        else img = '/Vector Smart Object24.png'
      }
      else if (type == 2) {
        if (isActive) img = '/employee icon.png'
        else img = '/Vector Smart Object25.png'
      }
      else {
        if (isActive) img = '/number icon.png'
        else img = '/Vector Smart Object26.png'
      }

      return img
    },

    async updateList () {
      const attributes = await this.$store.getters['attributes/getAttributes'] // get gettters
      this.attributes = attributes // update from getters
    }
  }
}
</script>

<style>

</style>