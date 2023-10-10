<script>

export default {
  auth: false,
  layout: 'landing',

  data: () => ({

  }),

  computed: {
    responsiveBorderRadius () {
      let data = this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'bottom-rounded-sm' : 'bottom-rounded-lg'
      return data
    }
  }
}

</script>

<template>
  <div>
    <div
      class="shadow-xl px-md-16 px-5 py-5 electric_blue w-100 mx-0 py-16 pb-0"
      :class="responsiveBorderRadius"
      style="position: relative; z-index: 51 !important; margin-top: -120px;">
      <div
        class="px-md-16 white--text"
        style="width: 100% !important;"
        :style="`padding-top: ${$vuetify.breakpoint.xs ? '50px' : '0px'}`">
        <div
          :style="$vuetify.breakpoint.xl ? 'font-size: 175px' : 'font-size: 125px'"
          class="soul-seashell">
          Bintan Island
        </div>
        <v-row class="w-100">
          <v-col cols="12" sm="6" height="100%">
            <v-card width="100%" class="rounded-xl" elevation="5" height="100%">
              <v-card-text>
                Google map
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-row no-gutters>
              <v-col cols="12" class="mb-5">
                <v-img height="100%" cover src="/img/island-page/1section-1-1-square.jpg" class="rounded-xl"></v-img>
              </v-col>
              <v-col cols="12">
                <v-img height="100%" cover src="/img/island-page/1section-1-3-square.jpg" class="rounded-xl"></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" sm="3">
            <v-row no-gutters>
              <v-col cols="12" class="mb-5">
                <v-img height="100%" cover src="/img/island-page/1section-1-2-square.jpg" class="rounded-xl"></v-img>
              </v-col>
              <v-col cols="12">
                <v-img height="100%" cover src="/img/island-page/1section-1-4-square.jpg" class="rounded-xl"></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="mt-n3">
            <v-row>
              <v-col cols="6" md="4">
                <v-img height="70%" cover src="/img/island-page/1section-1-2-square.jpg" class="rounded-xl"></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img height="70%" cover src="/img/island-page/1section-1-2-square.jpg" class="rounded-xl"></v-img>
              </v-col>
              <v-col cols="12" md="4">
                <v-img height="70%" cover src="/img/island-page/1section-1-2-square.jpg" class="rounded-xl"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      class="shadow-xl px-md-16 px-5 py-5 white w-100 mx-0 py-16 pb-0 mb-8"
      :class="responsiveBorderRadius"
      style="position: relative; z-index: 50 !important; margin-top: -100px;">
      <div
        class="px-md-16 electric_blue--text"
        style="width: 100% !important;"
        :style="`padding-top: ${$vuetify.breakpoint.xs ? '50px' : '70px'}`">
        <v-row>
          <v-col
            cols="6"
            class="kollektif"
            :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6'">
            <div class="mb-8">
              Bintan Island, also known as Negeri Segantang Lada, is
              the largest among the 3,200 islands of Riau archipelago
              of Indonesia, with a land area of 1,173 square kilometers.
              It is part of the Riau Islands province, and its capital,
              Tanjung Pinang, is located on the island's south coast. It
              has a coast line of 105 kilometers and has rolling
              topography in its landform.
            </div>

            <div class="mb-8">
              The most common type of substrate in the Bintan Island is
              sand. Sand provides a suitable habitat for many shells,
              allowing them to burrow and hide from predators.
              However, human activity, such as boat traffic and beach
              development, can also easily disturb sand. This can lead to
              a decrease in shell abundance.
            </div>

            <div class="mb-8">
              Predators can also play a role in shell abundance. Some
              predators, such as crabs and fish, prey on shells.
              However, other predators, such as sea turtles, help keep
              shell populations in check by eating shells that are already
              dead or dying.
            </div>
          </v-col>
          <v-col
            cols="6"
            class="kollektif"
            :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6'">
            <div class="mb-3 mb-md-8">
              Human disturbance is another factor that can affect shell
              abundance. Human activities like fishing and collecting
              shells can reduce shell populations. However, human
              activity can also benefit shell populations. For example,
              constructing artificial reefs can provide a new habitat for
              shells.
            </div>

            <div class="mb-3 mb-md-8">
              The overall ecology of the Bintan Island is relatively
              healthy. However, threats to shell abundance exist, such
              as human disturbance and climate change. Climate
              change is causing the sea level to rise, which could
              inundate some islands and destroy shell habitats.
            </div>

            <div class="mb-3 mb-md-8">
              <v-img height="250" contain src="/img/island-page/Shell.png"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>