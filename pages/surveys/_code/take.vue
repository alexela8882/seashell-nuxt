<template>
  <v-container style="height: 100% !important; padding: 50px 0 400px 0">
    <v-card
      class="d-flex align-center flex-wrap see-through"
      flat
      tile
      height="100% !important"
    >
      <v-row style="height: 100% !important">
        <v-col cols="12">
          <div v-if="!csurveys">
            <v-skeleton-loader
              v-for="n in 3"
              :key="n"
              ref="skeleton"
              type="list-item-avatar-three-line"
              class="mx-auto"
              style="max-width: 850px;"
            ></v-skeleton-loader>
          </div>
          <div v-else style="height: 100%;">
            <div v-if="csurveys.length <= 0" class="text-center" style="height: 100%;">
              <v-card
                flat
                tile
                min-height="100%"
                class="d-flex flex-column justify-center align-content-center flex-wrap see-through"
              >
                <div class="text-h3 my-2 primary--text">Thank you for completing the survey!</div>
                <!-- <div class="text-body-1">Thank you for completing the survey!</div> -->
              </v-card>
            </div>
            
            <v-stepper
              v-else
              v-model="currentStep"
              vertical
              class="no-transition mx-auto"
              style="max-width: 850px;"
            >
              <div
                v-for="(csurvey, index) in csurveys"
                :key="index"
              >
                <v-stepper-step
                  :ref="`question${index + 1}`"
                  :step="index + 1"
                  :complete="csurvey.skip_note || csurvey.rating != null || csurvey.comment ? true : false"
                  :editable="index === 0 || csurvey.skip_note || csurvey.rating != null || csurvey.comment ? true : false"
                >{{ csurvey.question }}</v-stepper-step>

                <v-stepper-content :step="index + 1">
                  <div class="d-flex align-center mb-2">
                    <!-- <div>
                      <v-img v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl" contain width="350" height="350" src="/take_survey_image.png"></v-img>
                    </div> -->
                    <div style="width:100%;">
                      <v-btn
                        @click="currentStep--"
                        depressed
                        class="mb-5"
                      ><v-icon left>mdi-chevron-up</v-icon>
                        Previous
                      </v-btn>
                      <div>
                        <div class="text-h6 text--secondary mb-5">{{ csurvey.question }}</div>
                        <div v-if="!addComment">
                          <div class="text-caption mb-1">Choose a number between 0 and 10 (0 is the lowest and 10 is the highest)</div>
                          <!-- <v-btn-toggle
                            v-model="csurvey.rating"
                            background-color="primary"
                            color="primary"
                            class="my-2"
                            @change="changeRating(index)"
                          >
                            <v-btn v-for="n in 11" :key="n" active-class="primary darken-1 white--text">
                              {{ n - 1 }}
                            </v-btn>
                          </v-btn-toggle> -->

                          <v-slide-group show-arrows v-model="csurvey.rating">
                            <v-slide-item
                              v-for="n in 11"
                              :key="n"
                              v-slot="{ active, toggle }"
                              @change="changeRating(index)"
                            >
                              <v-btn
                                :input-value="active"
                                active-class="primary white--text"
                                depressed
                                @click="toggle"
                              >{{ n - 1}}</v-btn>
                            </v-slide-item>
                          </v-slide-group>

                          <v-btn
                            @click="addComment = true"
                            class="mt-3"
                            elevation="1"
                            color="grey lighten-3 text--secondary"
                          ><v-icon large>mdi-comment-processing-outline</v-icon>
                          </v-btn>
                        </div>

                        <div v-else>
                          <div class="text-caption">What is it that makes you feel that way? (optional)</div>
                          <div class="d-flex my-2">
                            <v-text-field
                              hide-details
                              outlined
                              v-model="csurvey.comment"
                              @keydown="csurvey.skip_note = null"
                            ></v-text-field>
                            <v-btn
                              @click="addComment = false"
                              fab
                              class="ml-3"
                              elevation="1"
                              color="primary"
                            >
                              {{ csurvey.rating != null ? csurvey.rating : '-' }}
                            </v-btn>
                          </div>
                        </div>
                      </div>

                      <v-btn
                        v-if="csurvey.rating != null || csurvey.comment"
                        @click="changeStepper(true, csurvey, index + 1)"
                        :loading="loading"
                        :disabled="loading"
                        color="secondary"
                        depressed
                        class="mt-5"
                      ><v-icon left>mdi-chevron-down</v-icon>
                        Next question
                      </v-btn>
                      <div v-else class="mt-5">
                        <v-btn
                          v-if="!skipQuestion && !csurvey.skip_note"
                          @click="skipQuestion = true"
                          :loading="loading"
                          :disabled="loading"
                          depressed
                        ><v-icon left>mdi-chevron-down</v-icon>
                          Skip question
                        </v-btn>

                        <div v-else>
                          <div class="text-caption">
                            Why are you skipping the question?
                            <a href="javascript:void(0);" @click="cancelSkipNote(index)">Cancel skip</a>
                          </div>
                          <div class="d-flex mt-5">
                            <div v-if="csurvey.skip_note">
                              <v-btn depressed class="mr-2" color="primary">
                                <div class="text-caption">{{ csurvey.skip_note }}</div>
                              </v-btn>
                              <v-btn
                                @click="changeStepper(false, csurvey, index + 1)"
                                :loading="loading"
                                :disabled="loading"
                                color="secondary"
                                depressed
                              ><v-icon left>mdi-chevron-down</v-icon>
                                Next question
                              </v-btn>
                            </div>
                            <div v-else>
                              <v-btn
                                @click="submitSkipNote(index, 1, index + 1)"
                                depressed
                                class="mr-2"
                              ><div class="text-caption">It doesn't apply to me</div>
                              </v-btn>
                              <v-btn
                                @click="submitSkipNote(index, 2, index + 1)"
                                depressed
                                class="mr-2"
                              ><div class="text-caption">I don't understand it</div>
                              </v-btn>
                              <v-btn
                                @click="submitSkipNote(index, 3, index + 1)"
                                depressed
                                class="mr-2"
                              ><div class="text-caption">I don't have opinion</div>
                              </v-btn>
                              <v-btn
                                @click="submitSkipNote(index, 4, index + 1)"
                                depressed
                                class="mr-2"
                              ><div class="text-caption">Other</div>
                              </v-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-stepper-content>
              </div>
            </v-stepper>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Are you ready to submit your answers?
        </v-card-title>

        <v-card-text class="mt-5">
          <div class="text-caption">When you are ready, click the Submit button below.</div>
          <div class="text-caption">Otherwise you can go back and change your answers.</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            @click="dialog = false"
            text
            color="secondary">Change answer</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :loading="loading"
            :disabled="loading"
            depressed
            @click="submitAnswers"
          >Submit answers</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  layout: 'guest',

  head: {
    title: 'Take Survey'
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },

  data: () => ({
    dialog: false,
    addComment: false,
    skipQuestion: false,
    currentStep: 1,
    formData: {},
    csurveys: false,
    test: [{
      this: 'this should be reactive',
      that: 'that'
    }, {
      this: 'this 2',
      that: 'that 2'
    }],

    // for programmatic scrolling
    duration: 300,
    offset: 0,
    easing: 'easeInOutCubic',
    easings: Object.keys(easings),
  }),

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const payload = { survey_code: this.$route.params.code }
      const csurveys = await this.$store.dispatch('surveys/getSurveys', payload)
      this.csurveys = []
      if (csurveys !== "abort") {
        csurveys.map(csurvey => {
          let data = Object.assign({}, {
            round_id: csurvey.round_id,
            id: csurvey.id,
            survey_id: csurvey.survey_id,
            survey_code: this.$route.params.code,
            question: csurvey.question,
            rating: csurvey.taken_survey ? csurvey.taken_survey.rate : null,
            comment: csurvey.taken_survey ? csurvey.taken_survey.comment : null,
            skip_note: csurvey.taken_survey ? csurvey.taken_survey.skip_note : null
          })
          this.csurveys.push(data)
        })
      }
    },

    async submitSurvey (i) {
      const data = this.csurveys[i]
      const { validate, setErrors, reset } = this.$refs['observer'+i][0]
      
      validate() // validate
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch('surveys/takeSurvey', data)
        .then((res) => {
          const err = res.errors ? res.errors : ''
          setErrors(err) //set errors from backend

          // reset surveys & validation
          if (res.response) {
            reset()
            const id = res.response.survey_id
            this.csurveys.map((data, index) => {
              if (data.id === id) {
                this.csurveys.splice(index, 1)
              }
            })
          }
        })
      })
    },

    async progScroll (target) { // programmatic scrolling
      const t = await target
      this.$vuetify.goTo(this.$refs[`question${t}`][0].$el, this.options)
    },

    async changeStepper (toSave, csurvey, target) {
      this.addComment = false
      this.currentStep++

      await this.progScroll(target) // call programmatic scrolling method

      if (toSave) {
        const res = await this.$store.dispatch('surveys/takeSurvey', csurvey)
      }

      const index = this.csurveys.findIndex(data => data.id === csurvey.id)

      if (index === this.csurveys.length - 1) this.dialog = true
    },

    changeRating (index) {
      this.addComment = this.csurveys[index].rating >= 0 ? true : (this.csurveys[index].comment ? true : false)
      this.csurveys[index].skip_note = null // reset skip note
    },

    getSkipNote (note) {
      let skipNote = null
      if (note === 1) {
        skipNote = "It doesn't apply to me"
      } else if (note === 2) {
        skipNote = "I don't understand it"
      } else if (note === 3) {
        skipNote = "I don't have opinion"
      } else skipNote = "Other"

      return skipNote
    },

    async submitSkipNote (index, note, target) {
      const skipNote = this.getSkipNote(note)
      this.csurveys[index].skip_note = skipNote // assign skip note

      this.csurveys[index].rating = null // reset to default
      this.csurveys[index].comment = null // reset to default
      this.skipQuestion = false // reset
      this.currentStep++ // proceed to next question

      this.progScroll(target) // call programmatic scrolling method

      const res = await this.$store.dispatch('surveys/takeSurvey', this.csurveys[index])

      if (index === this.csurveys.length - 1) this.dialog = true
    },

    cancelSkipNote (index) {
      this.skipQuestion = false // reset
      this.csurveys[index].skip_note = null // reset to default
    },

    async submitAnswers () {
      const res = await this.$store.dispatch('surveys/submitAnswers', this.csurveys)
      if (res) {
        this.dialog = false
        this.csurveys = [] // empty array
      }
    }
  }
}
</script>

<style scoped>
.no-transition .v-stepper__content { transition: none !important; }
</style>