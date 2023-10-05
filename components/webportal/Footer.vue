<script>

export default {
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
    // links: [
    //   'Home',
    //   'About Us',
    //   'Team',
    //   'Services',
    //   // 'Blog',
    //   'Contact Us',
    // ],
    links: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About Us",
        link: "/about_us",
      },
      {
        text: "Team",
        link: "/team",
      },
      {
        text: "Services",
        link: "/services",
      },
      {
        text: "Contact Us",
        link: "/contact_us",
      },
    ],
    padless: false,
    variant: 'default',
  }),
}

</script>

<template>
  <v-footer
    default
    padless
    app
    absolute
    class="w-100 d-block"
  >
    <v-card
      flat
      tile
      class="text-center px-md-16"
      :class="`${$route.name == 'index' ? 'pt-16 bg-white electric_blue--text' : 'electric_blue white--text'}`"
    >
      <v-card-text>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :color="`${$route.name == 'index' ? 'electric_blue' : 'white'}`"
          text
          rounded
          class="mx-1"
          :to="link.link">{{ link.text }}
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text
        :class="`${$route.name == 'index' ? 'electric_blue--text' : 'white--text'}`"
        class="text-h5">
        {{ new Date().getFullYear() }} — <strong>Bintan Seashells</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>

</style>