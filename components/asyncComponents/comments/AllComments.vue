<template>
  <v-container class="pa-0 ma-0">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              :disabled="loading"
              :prepend-inner-icon="!filter.nps_category ? nps_category_icon : null"
              dense
              outlined
              hide-details
              single-line
              :label="!filter.nps_category ? 'NPS Category' : null"
              :items="nps_categories || []"
              item-text="name"
              item-value="value"
              v-model="filter.nps_category"
              @change="applyFilter"
              clearable
            >
              <template v-slot:selection="data">
                <div class="d-flex text-truncate">
                  <v-icon :color="data.item.color">{{ data.item.icon }}</v-icon>
                  <div class="text-subtitle-1 ml-1 text-truncate">{{ data.item.name }}</div>
                </div>
              </template>
              <template v-slot:item="data">
                <v-icon :color="data.item.color">{{ data.item.icon }}</v-icon>
                <div class="text-body-2">&nbsp;{{ data.item.name }}</div>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              :disabled="loading"
              :prepend-inner-icon="!filter.interaction ? interaction_icon : null"
              dense
              outlined
              hide-details
              single-line
              :label="!filter.interaction ? 'Interactions' : null"
              :items="interactions || []"
              item-text="name"
              item-value="value"
              v-model="filter.interaction"
              @change="applyFilter"
              clearable
            >
              <template v-slot:selection="data">
                <div class="d-flex text-truncate">
                  <v-icon :color="data.item.color">{{ data.item.icon }}</v-icon>
                  <div class="text-subtitle-1 ml-1 text-truncate">{{ data.item.name }}</div>
                </div>
              </template>
              <template v-slot:item="data">
                <v-icon :color="data.item.color">{{ data.item.icon }}</v-icon>
                <div class="text-body-2">&nbsp;{{ data.item.name }}</div>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              :disabled="loading"
              :prepend-inner-icon="!filter.acknowledgement ? acknowledgement_icon : null"
              dense
              outlined
              hide-details
              single-line
              :items="acknowledgements || []"
              item-text="name"
              item-value="value"
              :label="!filter.acknowledgement ? 'Acknowledgements' : null"
              v-model="filter.acknowledgement"
              @change="applyFilter"
              clearable
            >
              <template v-slot:selection="data">
                <div class="d-flex text-truncate">
                  <v-icon :color="data.item.color">{{ data.item.icon }}</v-icon>
                  <div class="text-subtitle-1 ml-1 text-truncate">{{ data.item.name }}</div>
                </div>
              </template>
              <template v-slot:item="data">
                <v-icon :color="data.item.color">{{ data.item.icon }}</v-icon>
                <div class="text-body-2">&nbsp;{{ data.item.name }}</div>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              :disabled="loading"
              prepend-inner-icon="event"
              dense
              outlined
              hide-details
              label="Round end date"
              :items="end_dates || []"
              item-text="name"
              item-value="value"
              v-model="filter.round_end_date"
              @change="applyFilter"
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              :disabled="loading"
              dense
              outlined
              hide-details
              :items="mainDrivers || []"
              item-text="name"
              item-value="value"
              v-model="filter.mainDriver"
              @change="applyFilter"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              :disabled="loading"
              dense
              outlined
              hide-details
              label="Sort by"
              :items="sort || []"
              item-text="name"
              item-value="value"
              clearable
              v-model="filter.sort.by"
              @change="applyFilter"
            >
              <template v-slot:prepend v-if="filter.sort.by">
                <v-btn v-if="filter.sort.asc_desc == 'asc'" color="success" text small icon @click="ascDesc('desc')">
                  <v-icon color="success darken-2">mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn v-else color="success" text small icon @click="ascDesc('asc')">
                  <v-icon color="success darken-2">mdi-arrow-down</v-icon>
                </v-btn>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>

        <v-divider class="my-2"></v-divider>
      </v-col>
      <v-col cols="12" sm="12" md="6" offset-md="3">
        <div v-if="!items">
          <v-skeleton-loader class="my-5" v-for="n in 5" :key="n" type="list-item-avatar-three-line"></v-skeleton-loader>
        </div>

        <div v-else>
          <div class="text-body-2 text-center my-5">{{ items.length }} matching comments</div>

          <v-card
            outlined
            elevation="10"
            class="my-5"
            v-for="(item, i) in items"
            :key="i"
            :color="boxThemed"
          >
            <v-list-item three-line class="d-flex">
              <v-list-item-avatar
                size="40"
                color="transparent"
              >
                <v-img v-if="item.rate" :src="rateIcon(item.rate)"></v-img>
                <v-icon v-else x-large>mdi-emoticon-neutral-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-subtitle-2 font-weight-bold text--primary">{{ item.question }}</div>
                <div class="text-caption font-weight-bold text--secondary">
                  {{ $moment(item.created_at).format('MMMM D') }} |
                  Score: {{ item.rate ? item.rate : 'None' }} |
                  {{ item.subdriver.name }}
                </div>
                <div class="text-subtitle-1 my-5">{{ item.comment }}</div>
              </v-list-item-content>
              <div class="align-self-start mt-3">
                <v-btn icon small>
                  <v-icon small>mdi-square-edit-outline</v-icon>
                </v-btn>
              </div>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="d-sm-flex flex-xl-column">
                <v-menu
                  v-if="item.acknowledgements.length > 0"
                  nudge-top="60"
                  close-delay="300"
                  open-on-hover
                  origin="center center"
                  transition="fade-transition"
                  rounded="xl"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      small
                      text
                      :color="acknowledged(item.acknowledgements[0]).color"
                    ><v-icon left>{{ acknowledged(item.acknowledgements[0]).icon }}</v-icon>
                      {{ acknowledged(item.acknowledgements[0]).title }}
                    </v-btn>
                  </template>
                </v-menu>
                <v-menu
                  v-else
                  nudge-top="60"
                  close-delay="300"
                  open-on-hover
                  origin="center center"
                  transition="fade-transition"
                  rounded="xl"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      small
                      text
                      color="secondary"
                    ><v-icon left>mdi-check-circle-outline</v-icon>
                      Acknowledge
                    </v-btn>
                  </template>

                  <v-card class="d-flex">
                    <div v-for="(a, i) in acknowledge" :key="i">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            v-on="on"
                            dark
                            elevation="0"
                            :color="a.color"
                            fab
                            small
                            class="ma-1"
                            @click.stop="sendAcknowledgement(a, item.id)"
                          >
                            <v-icon>{{ a.icon }}</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ a.title }}</span>
                      </v-tooltip>
                    </div>
                  </v-card>
                </v-menu>
                <v-btn
                  small
                  text
                  :color="`${item.replies.length > 0 ? 'success darken-2' : 'secondary'}`"
                  @click.stop="toggleDrawer(item)"
                >
                  <v-avatar
                    v-if="item.replies.length > 0"
                    color="success darken-2"
                    size="18"
                  >
                    <span class="text-caption font-weight-bold white--text">
                      {{ item.replies.length }}
                    </span>
                  </v-avatar>
                  &nbsp;Conversation
                  <v-icon right>mdi-reply</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <SubDriverConversationForm ref="conversationForm" v-model="drawer"></SubDriverConversationForm>
    <AcknowledgementSendForm ref="acknowledgementForm" v-model="dialog"></AcknowledgementSendForm>
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  props: ['items', 'boxThemed'],

  data () {
    return {
      drawer: false,
      dialog: false,
      mainDrivers: [],
      end_dates: false,
      filter: {
        initial: false,
        mainDriver: 0,
        nps_category: null,
        interaction: null,
        acknowledgement: null,
        round_end_date: null,
        sort: {
          by: null,
          asc_desc: 'asc'
        }
      },
      acknowledge: [
        { icon: 'mdi-check-circle', value: 1, color: 'success', title: 'Thanks for sharing' },
        { icon: 'mdi-lightbulb-on', value: 2, color: 'warning', title: 'Great idea' },
        { icon: 'mdi-format-list-checks', value: 3, color: 'primary', title: 'Working on it' },
        { icon: 'mdi-chat-processing-outline', value: 4, color: 'purple', title: 'Would love to talk in person' },
        { icon: 'mdi-checkbox-multiple-marked', value: 5, color: 'teal lighten-2', title: 'I agree' }
      ],
      nps_categories: [
        { name: 'Promoters', value: 1, icon: 'mdi-emoticon-happy-outline', color: 'green' },
        { name: 'Passives', value: 2, icon: 'mdi-emoticon-sad-outline', color: 'grey' },
        { name: 'Detractors', value: 3, icon: 'mdi-emoticon-angry-outline', color: 'red' }
      ],
      interactions: [
        { name: 'Comments with replies', value: '1-1', icon: 'add_comment', color: 'green' },
        { name: 'Comments without replies', value: '1-2', icon: 'comment', color: 'red' },
        { name: 'Comments with notes', value: '2-1', icon: 'note_add', color: 'green' },
        { name: 'Comments without notes', value: '2-2', icon: 'note', color: 'red' }
      ],
      acknowledgements: [
        { name: 'Comments I\'ve acknowledged', value: 1, icon: 'check_circle_outline', color: 'green' },
        { name: 'Comments I haven\'t acknowledged', value: 2, icon: 'remove_circle_outline', color: 'red' }
      ],
      sort: [
        { name: 'Score', value: 'score' },
        { name: 'Date', value: 'date' }
      ]
    }
  },

  components: {
    SubDriverConversationForm: () => import('../engagements/drivers/forms/SubDriverConversationForm'),
    AcknowledgementSendForm: () => import('../engagements/drivers/forms/AcknowledgementSendForm')
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    nps_category_icon () {
      let icon = null
      if (this.filter.nps_category) {
        this.nps_categories.map((x) => {
          if (x.value === this.filter.nps_category) icon = x.icon
        })
      } else icon = 'face'
      return icon
    },
    interaction_icon () {
      let icon = null
      if (this.filter.interaction) {
        this.interactions.map((x) => {
          if (x.value === this.filter.interaction) icon = x.icon
        })
      } else icon = 'comment'
      return icon
    },
    acknowledgement_icon () {
      let icon = null
      if (this.filter.acknowledgement) {
        this.acknowledgements.map((x) => {
          if (x.value === this.filter.acknowledgement) icon = x.icon
        })
      } else icon = 'check_circle'
      return icon
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const defaultMainDriver = { name: 'All comments', value: 0 }
      const res = await this.$store.dispatch('mainDrivers/fetchMainDrivers')
      const end_dates = await this.$store.dispatch('comments/fetchEndDates')

      this.end_dates = [] // set to array
      end_dates.map(ed => {
        const obj = { value: ed.id, name: this.$moment(ed.end_date).format('MMM DD, Y') }
        this.end_dates.push(obj)
      })

      this.filter.round_end_date = this.end_dates[this.end_dates.length - 1]['value']

      this.mainDrivers.push(defaultMainDriver) // push static default item

      res.map(r => {
        let obj = {}
        obj = Object.assign({}, { name: r.name, value: r.id })
        this.mainDrivers.push(obj) // push items from database
      })
    },

    toggleDrawer(displayItem) {
      this.drawer = !this.drawer // toggle drawer
      this.$refs.conversationForm.fillForm(displayItem) // call fillForm method of EditForm
    },

    rateIcon (rate) {
      let icon = null
      for (let i = 0; i <= 10; i++) if (i === rate) icon = `/ratings-emoticons-yellow/${i}.png`

      return icon
    },

    sendAcknowledgement (acknowledge, id) {
      this.dialog = !this.dialog
      this.$refs.acknowledgementForm.fillForm(acknowledge, id)
    },

    acknowledged (acknowledgement) {
      const acknowledge = this.acknowledge
      let j = {}
      acknowledge.map(a => { if (acknowledgement.acknowledgement == a.value) j = Object.assign({}, a) })
      return j
    },

    applyFilter () {
      this.$emit('apply-filter', this.filter) // emit this function to parent component
    },

    ascDesc (value) {
      this.filter.sort.asc_desc = value // toggle ascending/descending
      this.applyFilter() // call applyFilter method
    }
  }
}
</script>

<style>

</style>