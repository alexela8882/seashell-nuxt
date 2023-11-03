<template>
	<div>
    <div
      style="background-color: grey; position: relative; z-index: 53 !important; height: 100vh;"
      class="mt-n16 shadow-xl"
      :class="responsiveBorderRadius">
      <v-carousel
        cycle
        hide-delimiters
        :show-arrows="false"
        height="100vh"
        :class="responsiveBorderRadius"
        style="z-index: 55 !important;">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          eager>
          <div class="transparent-bg-black d-flex flex-column align-center justify-center" style="width: 100%; height: 100vh;">
            <div class="mt-auto text-center">
              <div
                style="line-height: 80% !important;"
                :style="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size: 85px;' : ($vuetify.breakpoint.xl ? 'font-size: 240px;' : 'font-size: 180px;')}`"
                class="soul-seashell white--text">
                Shoreline Gems
              </div>
              <v-btn
                outlined
                :large="$vuetify.breakpoint.xl"
                class="text-lowercase white--text mt-5 rounded-lg">
                explore
              </v-btn>
            </div>
            <div
              :class="($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-caption mb-10'"
              class="mb-0 mt-auto px-md-16 white--text text-body-1 text-xl-h6"
              style="width: 100%; white-space: pre-line">
              <!-- {{ item.description }} -->
            </div>
          </div>
          <v-img :src="item.src" height="100%" eager/>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div
      class="shell-section-bg"
      :class="responsiveBorderRadius"
      style="position: relative; margin-top: -100px; z-index: 52 !important;">
      <div
        class="shadow-xl px-md-16 px-5 w-100 mx-0 pb-16 white--text transparent-bg-black-dark"
        :class="responsiveBorderRadius"
        style="width: 100%; padding-top: 100px;">
        <div class="px-md-16 px-0">
          <div
            :style="$vuetify.breakpoint.xl ? 'font-size: 175px' : 'font-size: 125px'"
            class="soul-seashell">
            shells
          </div>

          <v-row
            class="kollektif-font text-sm-body-2 text-md-body-1 text-xl-h6">
            <v-col cols="12" md="12" sm="12">
              <div>
              Seashells are the protective outer layer of marine mollusks, such as snails, clams, and oysters. 
              They are made of calcium carbonate and come in various shapes, sizes, and colors.
              </div>
              <div class="mt-5">
              For millennia, humans have been fascinated by seashells. 
              They have been collected and used as currency, jewelry, tools, and religious artifacts. 
              However, seashells also play an important ecological role, 
              providing habitat and protection for marine organisms and 
              contributing to the overall health and balance of marine ecosystems.
              </div>
              <div class="mt-5">
              Today, seashells are still appreciated for their beauty, 
              but it is important to collect them responsibly. 
              Many beaches and marine environments are protected, 
              and it is crucial to respect these habitats and not 
              disturb the delicate balance of marine life.
              </div>
            </v-col>
            <!-- <v-col cols="12" md="6" sm="6">
              <div>
                Shells refer to the protective outer layer of marine
                mollusks, such as snails, clams, oysters, and other
                similar creatures. These shells are made of calcium
                carbonate and are a protective covering for the soft-
                bodied animals inhabiting them.
              </div>
              <div class="mt-5">
                Shells come in various shapes, sizes, and colors and
                have fascinated humans for millennia. They can be
                found on beaches and shores worldwide. For many
                people, they have become collectible items, known
                as “shell collectors” or “conchologists.”
              </div>
              <div class="mt-5">
                The shell formation begins when the mollusk secretes
                calcium carbonate, which gradually hardens into a
                protective shell. The patterns and structures of the
                shells are unique to each mollusk species, and they
                often have intricate designs that add to their allure.
              </div>
              <div class="mt-5">
                In addition to their aesthetic value, shells
                have played significant cultural, historical,
                and ecological roles. Historically, civilizations
                have used seashells as currency, jewelry,
                and religious artifacts. Seashells have also
                been utilized as tools by indigenous cultures.
              </div>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <div>
                Moreover, seashells are essential in
                ecological terms as well. They provide
                habitat and protection for tiny marine
                organisms and contribute to marine ecosystems’
                overallhealth and balance. They are also
                indicators of environmental changes, and their
                study can provide valuable insights into past
                climatic conditions
              </div>
              <div class="mt-5">
                In modern times, while seashells are still appreciated for their
                beauty, it is essential to treat the collection of seashells
                responsibly. Many beaches and marine environments are
                protected, and it is crucial to respect these habitats and not
                disturb the delicate balance
                of marine life.
              </div>
              <div class="mt-5">
                To sum it up, seashells are objects of natural beauty and hold
                cultural, historical, and ecological significance. Their intricate
                designs and captivating colors inspire curiosity and wonder,
                making them cherished items for collectors and nature
                enthusiasts worldwide.
              </div>
            </v-col> -->
          </v-row>
        </div>
      </div>

      <div
        style="position:absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;">
        <v-img
          v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
          :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'bottom: -14rem;' : 'bottom: -10rem;'"
          style="position: absolute; right: 5rem; z-index: 55 !important;"
          src="/img/shells/landingpage/shell_combined.png"
          :width="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? '300' : '200'"></v-img>
      </div>
    </div>

    <v-row
      class="shadow-xl px-md-16 px-5 py-5 electric_blue w-100 mx-0 py-16"
      :class="responsiveBorderRadius"
      style="position: relative; z-index: 51 !important; margin-top: -100px;">
      <div class="px-md-16 white--text" style="padding-top: 90px; width: 100% !important;">
        <p
          class="avenir-book text-xs-caption text-lg-body-1 text-xl-h6 text-md-body-2"
          :style="`${(!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm) && 'white-space: pre-line'}`"><span>
            The anatomy of a shell refers to the detailed structure and feathers of the protective outer
            covering found in various marine mollusks, including snails, clams, oysters, and others.
          </span>
          <span>
            Although the specific anatomy may vary among different species, the fundamental
            components of a shell are standard across most mollusks.
          </span>
        </p>
        <div class="d-flex align-center float-right w-100">
          <div class="avenir-black text-h1">&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div
            class="float-right avenir-book text-md-h5 text-lg-h6 text-xl-h5"
            :style="`${$vuetify.breakpoint.sm && 'white-space: pre-line'}`">Let’s explore the critical parts of a
            typical bivalve and gastropod shell!
          </div>
        </div>
      </div>
    </v-row>

    <v-row
      v-if="1 == 0"
      style="position: relative; z-index: 50 !important; margin-top: -100px;"
      class="px-md-16 px-5 py-5 black w-100 mx-0">
      <span class="white--text" style="padding-top: 100px;">
        <h1 class="avenir-black text-md-h3 text-sm-h4 text-h5 font-weight-black">
          All About BINTAN
        </h1>
        <div
          class="avenir-book block"
          :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'text-body-2' : 'text-body-1'">
          <div>
            <v-img :class="$vuetify.breakpoint.xs ? 'bintan-img-100' : 'bintan-img-50'" class="mr-5 mb-5" cover src="/img/shells/landingpage/bintan_map.jpg"></v-img>
          </div>
          <div>
            <p style="text-align: justify;" class="m-auto">
              <span>
                The Bintan Islands are a group of islands in Indonesia 
                located off the coast of Singapore. 
                The islands are home to diverse marine life, including shells. 
                Several factors, including the type of substrate, 
                the presence of predators, and the level of human disturbance, 
                influence shell abundance in the Bintan Islands.
              </span><br><br>
              <span>
                The most common type of substrate in the Bintan Islands is sand. 
                Sand provides a suitable habitat for many shells, 
                allowing them to burrow and hide from predators. 
                However, human activity, such as boat traffic and 
                beach development, can also easily disturb sand. 
                This can lead to a decrease in shell abundance.
              </span><br><br>
              <span>
                Predators can also play a role in shell abundance. 
                Some predators, such as crabs and fish, prey on shells. 
                However, other predators, such as sea turtles, 
                help keep shell populations in check by eating 
                shells that are already dead or dying.
              </span><br><br>
              <span>
                Human disturbance is another factor 
                that can affect shell abundance. 
                Human activities like fishing and collecting shells 
                can reduce shell populations. 
                However, human activity can also benefit shell populations. 
                For example, constructing artificial reefs 
                can provide a new habitat for shells.
              </span><br><br>
              <span>
                The overall ecology of the Bintan Islands is relatively healthy. 
                However, threats to shell abundance exist, such as human disturbance 
                and climate change. Climate change is causing the sea level to rise, 
                which could inundate some islands and destroy shell habitats.
              </span><br><br>
              <span>
                Despite these threats, the Bintan Islands 
                remain a vital habitat for various shells. 
                The islands are home to several species of shells, 
                including some that are rare or endangered.
              </span>
            </p>
          </div>
        </div>
        </span>
    </v-row>

    <div
      :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'bottom-rounded-sm shadow-xl' : 'bottom-rounded-lg shadow-xl'"
      style="position: relative; z-index: 49 !important;">
      <v-row no-gutters style="margin-top: -200px;">
        <v-col cols="12" md="7">
          <div style="position: relative;">
            <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'faded-bg-fix' : 'faded-bg-white-left'" style="padding-top: 200px;">
              <div class="px-md-16 px-6 electric_blue--text d-flex flex-column align-left justify-center" style="width: 100%; height: 100%;">
                <div class="mb-auto mt-10">
                  <div
                    @click="speciesList(2)"
                    style="cursor: pointer;"
                    class="font-weight-black text-xs-text-h4 text-h3 text-lg-h1 home-title"
                    >gas.<span class="stroke-1 stroke-transparent-eblue">tro.</span>pod</div>
                  <div class="text-h6 font-weight-bold font-italic">noun</div>
                  <div class="pr-16">
                    <ul class="custom-ul text-right electric_blue--text" v-for="(item, i) in gastropodItems.data">
                      <li><a @click="speciesView(item.id)">{{ item.common_name }}</a></li>
                    </ul>
                    <ul class="custom-ul text-right electric_blue--text">
                      <li><a @click="speciesList(2)">See More...</a></li>
                    </ul>
                  </div>
                </div>
                <div class="mt-auto mb-10">
                  <v-row>
                    <v-col cols="12" md="8">
                      <div
                        :class="`${$vuetify.breakpoint.xs ? 'white--text' : 'electric_blue--text'}`"
                        class="text-body-1 text-xl-h6 font-italic kollektif">
                        any of a large class (Gastropoda) of mollusks
                        (such as snails and slugs) usually with a univalve shell or
                        none and a distinct head bearning sensory organs
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
            <v-parallax
              dark
              :height="parallaxHeight"
              src="/img/shells/landingpage/gastropod.png"
              style="padding-top: 220px;"
              :class="`${($vuetify.breakpoint.xl) ? 'xl-parallax' : ($vuetify.breakpoint.lg ? 'lg-parallax' : ($vuetify.breakpoint.xs && 'xs-parallax'))} ${($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'bottom-rounded-sm' : 'bottom-left-rounded-lg'}`"></v-parallax>
          </div>
        </v-col>
        <v-col
          v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
          cols="12"
          md="5"
          style="padding-top: 220px;"
          class="white bottom-right-rounded-lg">
          <div class="d-flex align-center justify-center" style="width: 100%; height: 100%;">
            <div>
              <v-img class="mt-16" :width="`${!$vuetify.breakpoint.xl ? '400' : '500'}`" cover src="/img/shells/gastropod.png"></v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div
      v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      class="bottom-rounded-sm shadow-xl"
      style="position: relative; background-color: white; margin-top: -200px; z-index: 48 !important; padding-bottom: 50px;">
      <v-row class="px-md-16 mx-0" style="padding-top: 200px;">
        <v-col cols="10" offset="1">
          <v-row>
            <v-col cols="6">
              <v-img width="650" cover src="/img/shells/gastropod.png"></v-img>
            </v-col>
            <v-col cols="6" class="d-flex align-center">
              <v-img width="750" cover src="/img/shells/bivalve.png"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span class="avenir-book font-weight-bold electric_blue--text text-body-1">
                Let’s explore the critical parts of a typical bivalve and gastropod shell
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div
      class="shadow-xl mb-6"
      :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'bottom-rounded-sm' : 'bottom-rounded-lg'"
      style="position: relative; z-index: 46 !important;">
      <v-row no-gutters style="margin-top: -200px;">
        <v-col v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" cols="12" md="5" style="padding-top: 220px;">
          <div class="px-md-16 px-6 d-flex align-center justify-center" style="width: 100%; height: 100%;">
            <div class="d-flex flex-column align-center justify-center" style="width: 100%; height: 100%;">
              <div class="mb-auto mt-auto">
                <v-img
                  class="mt-16"
                  :width="`${$vuetify.breakpoint.xl ? '650' : ($vuetify.breakpoint.md ? '350' : '550')}`" cover src="/img/shells/bivalve.png"></v-img>
              </div>
              <!-- <div class="mt-auto mb-16 text-xl-h6 font-italic electric_blue--text kollektif">
                an aquatic mollusk that has a compressed body enclosed within a
                hinged shell, such as oysters, clams, mussels, and scallops.
              </div> -->
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div style="position: relative; z-index: 40 !important;">
            <div
              class="pl-lg-16"
              :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'faded-bg-fix' : 'faded-bg-white-right'"
              style="padding-top: 220px;">
              <div class="px-md-16 px-6 electric_blue--text d-flex flex-column align-left justify-center" style="width: 100%; height: 100%;">
                <div class="pl-lg-3 mb-auto mt-10">
                  <div 
                    @click="speciesList(1)"
                    style="cursor: pointer;"
                    class="font-weight-black text-xs-text-h4 text-h3 text-lg-h1 home-title">bi.<span class="stroke-1 stroke-transparent-eblue">valve</span></div>
                  <div class="text-h6 font-weight-bold font-italic">noun</div>

                  <div class="pr-16">
                    <ul class="custom-ul text-right electric_blue--text" v-for="(item, i) in bivalveItems.data">
                      <li><a @click="speciesView(item.id)">{{ item.common_name }}</a></li>
                    </ul>
                    <ul class="custom-ul text-right electric_blue--text">
                      <li><a @click="speciesList(1)">See More...</a></li>
                    </ul>
                  </div>
                </div>
                <div class="pl-lg-3 mt-auto mb-10">
                  <v-row>
                    <v-col cols="12" md="8">
                      <div
                        :class="`${$vuetify.breakpoint.xs ? 'white--text' : 'electric_blue--text'}`"
                        class="text-body-1 text-xl-h6 font-italic kollektif">
                        an aquatic mollusk that has a compressed body enclosed within a
                        hinged shell, such as oysters, clams, mussels, and scallops.
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
            <v-parallax
              :height="parallaxHeight"
              src="/img/shells/landingpage/bivalve.png"
              style="padding-top: 220px;"
              :class="`${($vuetify.breakpoint.xl) ? 'xl-parallax' : ($vuetify.breakpoint.lg ? 'lg-parallax' : ($vuetify.breakpoint.xs && 'xs-parallax'))} ${($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'bottom-rounded-sm' : 'bottom-right-rounded-lg'}`"></v-parallax>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- <v-row no-gutters style="margin-top: -200px;">
      <v-col cols="12" md="6">
        <v-parallax
          dark
          :height="parallaxHeight"
          src="/img/shells/seashell-wallpaper3-1080p.jpg"
          style="padding-top: 220px;"
        >
          <v-row class="px-md-16 px-6 white--text">
            <v-col cols="12">
              <div class="d-flex flex-column align-left justify-center" style="width: 100%; height: 100%;">
                <div class="mb-auto mt-10">
                  <div class="font-weight-black" :class="`${$vuetify.breakpoint.xs ? 'text-h6' : 'text-h3'}`">gas.<span class="stroke-1 stroke-transparent-white">tro.</span>pod</div>
                  <div class="text-h6 font-weight-bold font-italic">noun</div>

                  <div class="float-right">
                    <ul class="custom-ul text-right white--text">
                      <li><a href="javascript:void(0);">Razor Clam</a></li>
                      <li><a href="javascript:void(0);">True Heart Cockle</a></li>
                      <li><a href="javascript:void(0);">Butler's Thorny Oyster</a></li>
                      <li><a href="javascript:void(0);">Virgate Tellin</a></li>
                    </ul>
                  </div>
                </div>
                <div class="mt-auto mb-10 font-weight-light" style="font-size: 18px;">
                  any of a large class (Gastropoda) of mollusks
                  (such as snails and slugs) usually with a univalve shell or
                  none and a distinct head bearning sensory organs
                </div>
              </div>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
      <v-col cols="12" md="6">
        <v-parallax
          dark
          :height="parallaxHeight"
          src="/img/shells/seashell-wallpaper1-1080p.jpg"
          :style="`${$vuetify.breakpoint.name !== 'sm' && 'padding-top: 220px;'}`"
        >
          <v-row class="px-md-16 px-6 white--text">
            <v-col cols="12">
              <div class="d-flex flex-column align-left justify-center" style="width: 100%; height: 100%;">
                <div class="mb-auto mt-10">
                  <div class="font-weight-black" :class="`${$vuetify.breakpoint.xs ? 'text-h6' : 'text-h3'}`">bi.<span class="stroke-1 stroke-transparent-white">valve</span></div>
                  <div class="text-h6 font-weight-bold font-italic">noun</div>

                  <div class="float-right">
                    <ul class="custom-ul text-right white--text">
                      <li><a href="javascript:void(0);">Razor Clam</a></li>
                      <li><a href="javascript:void(0);">True Heart Cockle</a></li>
                      <li><a href="javascript:void(0);">Butler's Thorny Oyster</a></li>
                      <li><a href="javascript:void(0);">Virgate Tellin</a></li>
                    </ul>
                  </div>
                </div>
                <div class="mt-auto mb-10 font-weight-light" style="font-size: 18px;">
                  an aquatic mollusk that has a compressed body enclosed within a
                  hinged shell, such as oysters, clams, mussels, and scallops.
                </div>
              </div>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row> -->
	</div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from 'vuex'

export default {
  head: {
    title: 'Welcome'
  },

  auth: false,
  layout: 'landing',

  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      icons: [{ icon: 'mdi-link', link: '/species' }],
      items: [
        {
          title: 'Swollen Olive',
          description:
            `Dead Agaronia gibbosa form shallow marine sediments.
            They are carnivores.
            Individuals can grow to 48.5 mm.
            They have sexual reproduction.`,
          src: '/img/shells/seashell-wallpaper1-1080p.jpg',
        },
        {
          title: 'Blunt Tellin',
          description:
            `They are surficial modifiers.
            Individuals can grow to 60 mm.
            They have sexual reproduction.
            They are facultatively mobile animals. (eol.org)`,
          src: '/img/shells/seashell-wallpaper2.jpg',
        },
        {
          title: 'Dusky Cone',
          description:
            `Brown to white ground color.
            The last whorl's pattern varies from spiral banding in a blackish brown color to uniform white color.`,
          src: '/img/shells/seashell-wallpaper3-1080p.jpg',
        },
        {
          title: 'Elegant Goblet',
          description: 'Individuals can grow to 33.3 mm. (eol.org)',
          src: '/img/shells/seashell-wallpaper4-1080p.jpg',
        }
      ],
      // bivalveItems: [],
      // gastropodItems: [],
      // bivalveItems: [
      //   {
      //     title: 'Shell 1',
      //     text: `This is shell 1`,
      //     subtext: 'Description shell 1',
      //     img: '/img/sample-shells/shell1.jpg',
      //   },
      //   {
      //     title: 'Shell 2',
      //     text: `This is shell 2`,
      //     subtext: 'Description shell 2',
      //     img: '/img/sample-shells/shell2.jpg',
      //   },
      //   {
      //     title: 'Shell 3',
      //     text: `This is shell 3`,
      //     subtext: 'Description shell 3',
      //     img: '/img/sample-shells/shell3.jpg',
      //   },
      //   {
      //     title: 'Shell 4',
      //     text: `This is shell 4`,
      //     subtext: 'Description shell 4',
      //     img: '/img/sample-shells/shell4.jpg',
      //   },
      //   {
      //     title: 'Shell 5',
      //     text: `This is shell 5`,
      //     subtext: 'Description shell 5',
      //     img: '/img/sample-shells/shell5.jpg',
      //   },
      //   {
      //     title: 'Shell 6',
      //     text: `This is shell 6`,
      //     subtext: 'Description shell 6',
      //     img: '/img/sample-shells/shell6.jpg',
      //   },
      // ],
      transparent: 'rgba(255, 255, 255, 0)',
    }
  },

  methods: {
    // async initialize () {
    //   this.getBivalveSpecies()
    //   this.getGastropodSpecies()
    // },

    async getBivalveSpecies(){
      await this.$store.dispatch('species/fetchBivalveSpecies',{ params: { species_class_id: 1, limit:5} })
    },


    async getGastropodSpecies(){
      await this.$store.dispatch('species/fetchGastropodSpecies',{ params: { species_class_id: 2, limit:5} })
    },

    speciesView(id){
      // window.location.href = '/#/species/' + id;
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)

      this.$router.push(`/species/${id}?${urlParams}`)
    },

    speciesList (id) {
      this.$router.push(`/species?shell_class=`+id);
    },
  },

  mounted(){
    this.getBivalveSpecies();
    this.getGastropodSpecies();
  },

  computed: {
    parallaxHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '850'
        case 'sm': return '900'
        case 'md': return '900'
        case 'lg': return '1050'
        case 'xl': return '1200'
      }
    },
    responsiveBorderRadius () {
      let data = this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'bottom-rounded-sm' : 'bottom-rounded-lg'
      return data
    },
    ...mapGetters({
      bivalveItems: 'species/getBivalveSpecies',
      gastropodItems: 'species/getGastropodSpecies',
    })
  }
}
</script>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.7;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }

  .fade-transition-leave-active {
    position: absolute;
    width:100%;
  }

  .shell-section-bg {
    background: url("/img/shells/landingpage/shell-section-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right 50% bottom 40%;
  }

  .custom-ul {
    list-style: none;
  }

  .custom-ul li {
    line-height: 40px;
  }

  .custom-ul li a {
    font-family: Kollektif !important;
    font-size: 16px;
    color: var(--electric_blue);
    text-decoration: none;
  }

  .custom-ul li a:hover {
    text-decoration: underline;
  }

  .bintan-img-100{
    width: 100%;
  }

  .bintan-img-50{
    float:left;
    width: 50%;
  }
</style>

<style>
  .v-parallax__image {
    bottom: 20% !important;
    height: 90% !important;
    min-height: unset;
  }

  .xs-parallax .v-parallax__image {
    bottom: 20% !important;
    height: 85% !important;
    min-height: unset;
  }

  .lg-parallax .v-parallax__image {
    bottom: 7% !important;
    height: 100% !important;
    min-height: unset;
  }

  .xl-parallax .v-parallax__image {
    bottom: -7% !important;
    height: 130% !important;
    min-height: unset;
  }

  .kollektif-font div {
    font-family: Kollektif !important;
    line-height: 17px;
  }

  .home-title:hover{
    text-decoration: underline;
  }
</style>
