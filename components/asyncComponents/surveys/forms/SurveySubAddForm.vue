<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ reset }">
      <form ref="form" @input.prevent="ifTouched(0)" @reset.prevent="reset" @submit.prevent>
        <v-row>
          <v-col cols="12">
            <v-alert
              type="info"
              color="orange"
              text
              outlined
            >
              All driver questions must use a 0–10 scale, so make sure they are framed in the correct positive manner where 10 is a good result. Keep the language as simple as possible, and make sure to pick the closest possible driver category. Custom questions are not translated.
            </v-alert>
          </v-col>
          <v-col sm="12" md="12">
            <ValidationProvider name="subdriver" rules="required" v-slot="{ errors }">
              <v-autocomplete
                :error-messages="errors"
                outlined
                :items="drivers || []"
                item-text="name"
                item-value="id"
                dense
                label="Driver *"
                v-model="formData.subdriver"
                :disabled="action == 1 || loading"
              >
              <template v-slot:selection="{ item }">
                <div class="font-weight-bold">{{ item.driver.name }}</div>: {{ item.name }}
              </template>
              </v-autocomplete>
            </ValidationProvider>
            <ValidationProvider name="question" rules="required" v-slot="{ errors }">
              <v-textarea
                :disabled="(loading || survey_status == 'Not completed') || isDriverRole"
                :error-messages="errors"
                v-model="formData.question"
                label="Question *"
                placeholder="Add question that relates to the driver above"
                outlined
                dense
              ></v-textarea>
            </ValidationProvider>

            <div class="text-body-2 font-weight-bold">Type</div>
            <v-row class="ml-0">
              <v-chip
                color="success darken-2 my-2"
                label
                text-color="white"
                small
              >
                <v-icon small left>mdi-flag</v-icon>
                Standard question
              </v-chip>
            </v-row>

            <v-divider class="my-5"></v-divider>

            <div class="text-subtitle-2 mb-2">Only including</div>
            <v-autocomplete
              ref="segments"
              :disabled="loading || survey_status == 'Not completed'"
              :items="segments || []"
              @change="ifTouched(1)"
              @click:clear="ifTouched(1)"
              outlined
              items-disabled
              item-text="name"
              item-value="id"
              dense
              multiple
              clearable
              placeholder="All employees"
              v-model="formData.segments"
            >
            <template v-slot:selection="{ parent, item }">
              <v-chip
                class="my-1"
                small
                close
                @click:close="parent.selectItem(item)"
              >
                <div class="font-weight-bold">{{ item.attribute.name }}</div>: {{ item.name }}
              </v-chip>
            </template>
            </v-autocomplete>

            <div class="text-subtitle-2 mb-2">Excluding</div>
            <v-autocomplete
              ref="exclude_segment_ac"
              :disabled="loading || survey_status == 'Not completed'"
              :items="excludeSegments || []"
              @change="ifTouched(2)"
              @click:clear="ifTouched(2)"
              outlined
              item-text="name"
              item-value="id"
              dense
              multiple
              clearable
              placeholder="No segments excluded"
              v-model="formData.exclude_segments"
            >
            <template v-slot:selection="{ parent, item }">
              <v-chip
                class="my-1"
                small
                close
                @click:close="parent.selectItem(item)"
              >
                <div class="font-weight-bold">{{ item.attribute.name }}</div>: {{ item.name }}
              </v-chip>
            </template>
            </v-autocomplete>

            <div v-if="!isDriverRole">
              <div v-if="!surveyTakenCount">
                <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
              </div>
              <div v-else>
                <div v-if="survey_status == 'Not completed'">
                  <span class="text-body-2 d-flex">
                    <div class="font-weight-bold">This survey will end:&nbsp;</div>
                    <div class="text-caption">{{ $moment(formData.endDate).format('MMMM D, Y') }}</div>
                  </span>
                  <span class="text-caption d-flex mb-5">
                    <div class="font-weight-light">
                      {{ `(${surveyTakenCount.taken} out of ${surveyTakenCount.total} employees taken this survey)` }}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </form>
    </ValidationObserver>
    <!-- <div v-if="!isDriverRole">
      <div v-if="!surveyTakenCount"></div>
      <div v-else>
        <div v-if="(survey_status != 'Not completed' && !formTouched) && action != 0">
          <ValidationObserver>
            <v-divider class="mb-5 pb-3"></v-divider>
            <form @submit.prevent="sendRound">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.endDate"
                    label="Round end date"
                    placeholder="YYY-MM-DD"
                    append-icon="event"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.endDate"
                  @input="menu = false"
                  :min="minDate"
                  :max="maxDate"
                  show-current
                ></v-date-picker>
              </v-menu>
              <v-btn
                :disabled="loading || survey_status == 'Not completed' || !formData.endDate"
                depressed
                color="primary"
                type="submit"
              >Send Round</v-btn>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  data() {
    return {
      minDate: this.$moment().add(3, 'd').format('Y-M-DD'),
      maxDate: this.$moment().add(1, 'W').format('Y-M-DD'),
      endDate: null,
      menu: false,
      survey_status: null,
      action: 0,
      drivers: false,
      segments: false,
      excludeSegments: false,
      formData: {
        checkSurveyData: {},
        endDate: null
      },
      defaultData: null,
      formTouched: false,
      surveyTakenCount: false,
      isDriverRole: false
    }
  },

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    optionalColor () {
      const color = this.formData.optional ? 'red lighten-4' : 'green lighten-4'
      return color
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      this.drivers = await this.$store.dispatch('drivers/perMainWithHeaders', this.$route.params.id)
      const segments = await this.$store.dispatch('attributes/withHeaders')
      this.segments = segments
      this.excludeSegments = await this.$store.dispatch('attributes/withHeaders')
    },

    async fillForm (item, driverRole) {
      this.isDriverRole = driverRole // driver role

      if (Object.keys(item).length > 0) {
        const include_segment_ids = []
        const exclude_segment_ids = []
        item.segment_maps.map(map => {
          const id = `${map.segment_id}-${map.company_attribute_id}`
          if (map.action === 1) {
            include_segment_ids.push(id)
          } else exclude_segment_ids.push(id)
        })

        this.formData = Object.assign({}, {
          id: item.id,
          subdriver: item.engagement_sub_driver_id,
          question: item.question,
          segments: include_segment_ids,
          exclude_segments: exclude_segment_ids,
          endDate: item.round ? item.round.end_date : null,
          rounds: item.round ? item.round.ssmaps : [],
          round_id: item.round ? item.round.id : null
        })

        this.defaultData = Object.assign({}, {
          id: item.id,
          subdriver: item.engagement_sub_driver_id,
          question: item.question,
          segments: include_segment_ids,
          exclude_segments: exclude_segment_ids,
          endDate: item.round ? item.round.end_date : null,
          rounds: item.round ? item.round.ssmaps : [],
          round_id: item.round ? item.round.id : null
        })

        const including_user_ids = []
        const excluding_user_ids = []
        const ssmaps = this.formData.rounds ? this.formData.rounds : null
        if (ssmaps) {
          ssmaps.map(ssmap => {
            ssmap.esmaps.map(esmap => {
              if (esmap && ssmap.action === 1) {
                including_user_ids.push(esmap.employee.user_id)
              } else {
                excluding_user_ids.push(esmap.employee.user_id)
              }
            })
          })
        }

        // compare two arrays then remove duplicate
        const user_ids = including_user_ids.filter(val => !excluding_user_ids.includes(val))

        const survey_id = item.segment_maps.length > 0 ? item.segment_maps[0].survey_id : null
        const round_id = item.round ? item.round.id : null
        const uniqueIds = user_ids.filter((v, i, a) => a.indexOf(v) === i)

        const checkSurveyData = {
          survey_id: survey_id,
          round_id: round_id,
          user_ids: user_ids
        }

        this.surveyTakenCount = false // initially set to false
        const takenSurveys = await this.$store.dispatch('surveys/checkTakenSurvey', checkSurveyData)

        this.surveyTakenCount = { // insert survey taken & total count
          'taken': takenSurveys,
          'total': uniqueIds.length
        }

        if (takenSurveys == uniqueIds.length) {
          if (item.round) this.survey_status = 'Completed'
          else this.survey_status = 'Not sent'
        } else this.survey_status = 'Not completed'

        this.action = 1 // set action to edit

      } else {
        this.formData = {}
        this.survey_status = null
        this.surveyTakenCount = {} // set to empty object when in add mode
        this.action = 0 // set action to add
      }

      // initiate both including & excluding segment v-autcomplete
      this.ifTouched(1)
      this.ifTouched(2)
    },

    async sendRound () {
      const res = await this.$store.dispatch('surveys/sendRound', this.formData)

      if (res.errors) return // don not proceed when has errors

      this.$emit('updateRound', res.response)
      this.resetForm() // reset form
      this.$emit('drawer') // emit drawer to parent
    },

    async saveSurvey () {
      const dispatch = await this.action == 1 ? 'surveys/updateSurvey' : 'surveys/storeSurvey'
      this.$refs.observer.validate()
      .then((valid) => {
        if (!valid) return
        this.$store.dispatch(dispatch, this.formData)
        .then((res) => {
          if (res.response) {
            this.resetForm() // reset form
            this.$emit('drawer') // emit drawer to parent
            const commit = this.action == 1 ? 'mainDrivers/UPDATE_MAIN_WITH_HEADERS' : 'mainDrivers/ADD_MAIN_WITH_HEADERS'
            const emitName = this.action == 1 ? 'replaceItem' : 'pushItem'
            this.$emit(emitName, res.response)
            this.$store.commit(commit, res.response)
          }

          const err = res.errors ? res.errors : ''
          this.$refs.observer.setErrors(err) //set errors from backend
        })
      })
    },

    resetForm () {
      this.formData = {}
      this.survey_status = null
      this.$refs.form.reset()
    },

    async ifTouched (isSegment) {
      this.formTouched = JSON.stringify(this.formData) !== JSON.stringify(this.defaultData)

      if (isSegment == 1) {
        this.excludeSegments.map((exSeg, index) => { // reset
          if (exSeg.id) {
            this.excludeSegments[index].disabled = false
          }
        })

        this.excludeSegments.map((exSeg, index) => {
          this.formData.segments.map(segment => {
            if (segment === exSeg.id) {
              this.excludeSegments[index].disabled = true
            }
          })
        })
      }

      if (isSegment == 2) {
        this.segments.map((segment, index) => { // reset
          if (segment.id) {
            this.segments[index].disabled = false
          }
        })

        this.segments.map((seg, index) => {
          this.formData.exclude_segments.map(segment => {
            if (segment === seg.id) {
              this.segments[index].disabled = true
            }
          })
        })
      }
    }
  },
}
</script>

<style scoped>
  
</style>