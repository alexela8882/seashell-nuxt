<template>
  <v-container>
    <div class="text-caption text--secondary ma-1">Anonymous</div>
    <div class="d-flex align-start">
      <v-icon large>mdi-account-box</v-icon>
      <v-card class="mb-5" outlined>
        <v-list-item three-line class="d-flex">
          <v-list-item-avatar
            size="40"
            color="transparent"
          >
            <v-img v-if="item.rate" :src="rateIcon(item.rate)"></v-img>
            <v-icon v-else x-large>mdi-face</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="text-subtitle-2 font-weight-bold text--primary">{{ item.question }}</div>
            <div class="text-caption font-weight-bold text--secondary">
              {{ $moment(item.created_at).format('MMMM D') }} |
              Score: {{ item.rate }} |
              {{ item.subdriver ? item.subdriver.name : null }}
            </div>
            <div class="text-subtitle-1">{{ item.comment }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>

    <div v-if="item.replies">
      <div v-for="(reply, i) in item.replies" :key="i">
        <div class="text-caption text--secondary ma-1">{{ reply.user.employee.fullname }}</div>
        <div class="d-flex align-start">
          <v-icon large>mdi-account-box</v-icon>
          <v-alert
            text
            dense
            color="secondary"
            dark
          >{{ reply.reply }}</v-alert>
        </div>
      </div>
    </div>

    <div v-if="item.notes" class="d-flex flex-column align-end">
      <div v-for="(note, i) in item.notes" :key="i">
        <div class="text-caption text-right text--secondary ma-1">{{ note.user.employee.fullname }}</div>
        <div class="d-flex align-start">
          <v-alert
            text
            dense
            color="warning"
            dark
          >{{ note.note }}</v-alert>
          <v-icon large>mdi-account-box</v-icon>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {

  data () {
    return {
      item: false,
    }
  },

  methods: {
    fillForm (item) {
      this.item = Object.assign({}, item)
    },

    rateIcon (rate) {
      let icon = null
      for (let i = 0; i <= 10; i++) if (i === rate) icon = `/ratings-emoticons-yellow/${i}.png`

      return icon
    }
  }
}
</script>

<style>

</style>