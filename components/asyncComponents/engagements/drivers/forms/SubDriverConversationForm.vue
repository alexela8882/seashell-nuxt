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
          <div class="text-h6">Conversation</div>
          <v-icon class="ml-auto" @click.stop="$emit('input', false)">mdi-close</v-icon>
        </v-toolbar>
      </template>
      <v-list-item>
        <v-list-item-content>
          <SubDriverSubConversation ref="conversationSubForm"></SubDriverSubConversation>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-toolbar flat outlined :class="alertType.class">
          <div v-if="formStatus == 'reply'" class="text-caption">
            The employee will receive your reply—everyone with access to this comment will also see the conversation
          </div>
          <div v-else class="text-caption">
            Notes <em class="font-weight-bold">are not shared with the employee</em>—only with other people that have access to this content
          </div>
        </v-toolbar>
        <v-toolbar outlined flat class="d-flex justify-start">
          <v-tabs>
            <v-tab @click.stop="formStatus = 'reply'">
              Reply
            </v-tab>
            <v-tab @click.stop="formStatus = 'addNote'">
              Note
            </v-tab>
          </v-tabs>
        </v-toolbar>
        <v-toolbar outlined flat height="200">
          <v-textarea
            v-if="formStatus == 'reply'"
            class="textarea"
            placeholder="Type your question or reply here..."
            :disabled="loading"
            v-model="formData.reply"
          ></v-textarea>
          <v-textarea
            v-else
            class="textarea"
            placeholder="Type your note here..."
            :disabled="loading"
            v-model="formData.note"
          ></v-textarea>
        </v-toolbar>
        <v-toolbar outlined flat class="d-flex justify-end">
          <v-btn
            :disabled="loading"
            depressed
            :color="alertType.btn"
            @click="replyAddNote"
          >
            {{ formStatus == 'reply' ? 'Reply' : 'Add Note' }}
            <v-progress-circular v-if="loading" indeterminate size="15" class="ml-2" width="2"></v-progress-circular>
          </v-btn>
        </v-toolbar>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  components: {
    SubDriverSubConversation: () => import('./SubDriverSubConversationForm')
  },

  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    alertType () {
      let type = {
        btn: null,
        class: null
      }
      if (this.formStatus === 'reply') {
        type.btn = 'success'
        type.class = 'reply'
      } else {
        type.btn = 'secondary'
        type.class = 'add-note'
      }

      return type
    }
  },

  data () {
    return {
      taken_survey_id: null,
      formData: {
        reply: null,
        note: null
      },
      formStatus: 'reply'
    }
  },

  methods: {
    fillForm (item) {
      this.taken_survey_id = item.id
      this.formData = Object.assign({}, { taken_survey_id: this.taken_survey_id })
      this.$refs.conversationSubForm.fillForm(item)
    },

    async replyAddNote () {
      const form = this.formStatus == 'reply' ? 'reply' : 'note'
      let dispatch = null
      if (form == 'reply') {
        dispatch = 'surveys/storeSurveyReply'
      } else dispatch = 'surveys/storeSurveyNote'

      const res = await this.$store.dispatch(dispatch, this.formData)
      if (res.response) this.formData = Object.assign({}, { taken_survey_id: this.taken_survey_id })
    }
  }
}
</script>

<style scoped>
.reply {
  background-color:#e3e3e3 !important;
  color: #363636;
}
.add-note {
  background-color: #fbb85b !important;
  color: #363636;
}
</style>