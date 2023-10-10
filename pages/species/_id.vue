<script>
// imports
import { mapState, mapGetters } from 'vuex'
// import lightGallery from 'lightgallery.js'
// import 'lightgallery.js/dist/css/lightgallery.css'

export default {
  head: {
    title: 'Species View'
  },

  auth: false,
  layout: 'landing',

  data: () => ({
    bcrumbs: [
      {
        text: 'Home',
        to: '/',
      }, {
        text: 'Species',
        to: '/species',
        exact: true
      }, {
        text: 'View',
        to: null,
        active: true
      }
    ],
    componentLoading: false,
    selectedImage: "",
    dialog: false
  }),

  computed: {
    ...mapGetters({
      specie: 'species/getSpecie'
    }),

    vuetifyBreakpoint () {
      return this.$vuetify.breakpoint.name
    }
  },

  watch: {
    vuetifyBreakpoint (newVal, oldVal) {
      console.log(oldVal)
      console.log(newVal)

      // re-initialize lightgallery
      this.initializeLightGallery()
    }
  },

  mounted () {
    // initialize lightgallery
    setTimeout(() => {
      this.initializeLightGallery()
    }, 1000)

    this.initialize()
  },

  methods: {
    initializeLightGallery () {
      // lightgallery
      let el = document.getElementById('speciesGallery')
      window.lightGallery(el, {
        mode: 'lg-fade',
        thumbnail: true,
        exThumbImage: 'data-src',
        zoom: true,
        rotate: true
      })

      let el2 = document.getElementById('speciesDisplayPhoto')
      window.lightGallery(el2, {
        width: `${this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? '95%' : '50%'}`,
        height: '500px',
        mode: 'lg-fade',
        addClass: 'speciesDisplayPhoto',
        counter: false,
        download: false,
        startClass: '',
        enableSwipe: false,
        enableDrag: false,
        speed: 500,
        thumbnail: false,
        exThumbImage: 'data-src',
        zoom: false,
        rotate: false,
        zoomOrigin: false
      })
    },

    async initialize () {
      await this.$store.dispatch('species/fetchSpecie', { id: this.$route.params.id })
    },

    redirectBack () {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)

      this.$router.push(`/species?${urlParams}`)
    },

    searchSpecies() {
      this.$router.push('/species?keyword='+this.keyword)
    },

    openImage(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
      this.dialog = true;
    }
  }
}

</script>

<!-- <template>
  <div class="px-md-16 px-6">
    <v-breadcrumbs :items="bcrumbs">
      <template v-slot:title="{ item }">
        {{ item.title.toUpperCase() }}
      </template>
    </v-breadcrumbs>

    <div>
      Species View {{ $route.params.id }}

      <pre>{{ specie }}</pre>
    </div>
  </div>
</template> -->
<template>
  <div class="px-md-16 pa-5 pt-0">
    <div
      v-if="componentLoading"
      class="d-flex align-items-center justify-content-center"
      style="height: 80vh;">
      <v-overlay
        :model-value="componentLoading"
        :opacity="0"
        class="align-center justify-center"
      >
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </div>
    <div v-else>
      <v-breadcrumbs :items="bcrumbs">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
      <div class="row">
        <div class="col-md-3">
          <v-card
            v-if="specie.species"
            class="card-sticky"
            :style="`${!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs && 'max-height: 89vh !important;'}`">
            <v-layout id="speciesDisplayPhoto" v-if="specie.species.display_photo != null">
              <v-flex
                :data-src="$backendurl(specie.species.display_photo)"
                :data-download-url="$backendurl(specie.species.display_photo)">
                <v-card
                  style="cursor: pointer;">
                  <v-img v-if="specie.species.display_photo != null"
                    :src="$backendurl(specie.species.display_photo)"
                  ></v-img>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- <v-hover>
              <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
              <v-img v-if="specie.species.display_photo != null"
                :src="$backendurl(specie.species.display_photo)"
              ></v-img>
              <v-img v-else
                src="/img/sample_shell.jpg"
              ></v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                >
                  <v-btn @click="openImage(specie.species.display_photo)">View Image</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
            </template>
            </v-hover> -->
            <v-card-text class="card-body">
                <span class="kollektif">
                  <p class="mb-1">
                    {{ specie.species && specie.species.general_description }}
                  </p>
                </span>
              </v-card-text>

              <v-card-text class="card-body electric_blue white--text">
                <div class="text-h6 font-bold text-uppercase">
                  <span class="kollektif">Classification</span>
                </div>
                <ul class="kollektif">
                  <li class="text-capitalize">{{ specie.species['kingdom'] }} (Kingdom)</li>
                  <li class="text-capitalize">{{ specie.species.phylum }} (Phylum)</li>
                  <li class="text-capitalize">{{ specie.species.species_class.name }} (Class)</li>
                  <li class="text-capitalize">{{ specie.species.order }} (Order)</li>
                  <li class="text-capitalize">{{ specie.species.species_family.name }} (Family)</li>
                  <li class="text-capitalize">{{ specie.species.species_genus.name }} (Genus)</li>
                  <li><span class="font-italic">{{ specie.species.name }} </span>(Species Name)</li>
                </ul>
              </v-card-text>
              <v-card-text class="card-body">
                <span class="kollektif">
                  <div class="text-h6 font-bold text-uppercase">Contents</div>
                  <p class="mb-1"><a href="#">(TOP)</a></p>
                  <template v-for="(item, i) in specie.species_details">
                    <p class="mb-1"><a :href="'#'+item.title.split(' ').join('_')">{{ item.title }}</a></p>
                  </template>
                  <p class="mb-1"><a href="#conservation_status">Conservation Status</a></p>
                  <p class="mb-1" v-if="specie.species_files.length != 0"><a href="#other_photos">Other Photos</a></p>
                  <p class="mb-1"><a href="#references">References</a></p>
                </span>
              </v-card-text>
          </v-card>
        </div>
        <div v-if="specie.species" class="col-md-9">
          <div class="d-flex flex-row align-center">
            <div class="electric_blue--text text-capitalize mr-3" :class="`${$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'}`">
              <span class="avenir-black">{{ specie.species.common_name }}</span>
            </div>
          </div>
          <v-divider class="electric_blue my-1"></v-divider>
          <div class="font-italic" :class="`${$vuetify.breakpoint.xs ? 'text-h6' : 'text-h5'}`">
            <span class="kollektif">{{ specie.species.name}} ({{ specie.species.author }})</span>
          </div>
          <p class="text-capitalize" v-if="specie.species.local_name">
            <span class="kollektif">
              Local Names: {{ specie.species.local_name }} </span>
          </p>
          <v-divider class="electric_blue"></v-divider>

          <template v-for="(item, i) in specie.species_details">
            <div :id="item.title.split(' ').join('_')" class="text-h6 font-bold text-uppercase my-3">
              <span class="avenir-black">{{ item.title }}</span>
            </div>
            <p>
              <span class="avenir-book text-justify" v-html="item.description"></span>
            </p>
            <v-divider class="electric_blue"></v-divider>
          </template>
          <div id="conservation_status" class="text-h6 font-bold text-uppercase my-3">
            <span class="avenir-black">Conservation Status</span>
          </div>
          <div class="conservation-status-container">
            <v-img  
              contain 
              max-width="950" 
              :src="'/img/conservation-status/alt-1/'+specie.species.conservation_status+'.png'"></v-img>
          </div>
          <p>
            <span class="avenir-book text-justify">Source: IUCN Red List of Threatened Species</span>
          </p>
          <v-divider class="electric_blue"></v-divider>
          <div v-if="specie.species_files.length != 0" id="other_photos" class="text-h6 font-bold text-uppercase my-3">
            <span class="avenir-black">Other Photos</span>
          </div>
            <v-layout id="speciesGallery" v-if="specie.species_files.length != 0" align-center justify-left row wrap>
              <v-flex
                v-for="(item, i) in specie.species_files"
                :key="i"
                :data-src="$backendurl(item.file_path+'/'+item.file_name)"
                :data-download-url="$backendurl(item.file_path+'/'+item.file_name)"
                sm6 xs12 md4 class="px-2">
                <v-card
                  class="rounded-xl mb-5 mx-auto"
                  width="100%"
                  elevation="5"
                  style="cursor: pointer;">
                    <v-img
                      cover
                      class="cover"
                      style="max-height: 300px !important; height: 300px !important;"
                      :src="$backendurl(item.file_path+'/'+item.file_name)"
                    ></v-img>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- <div class="other-photo-container">
              <div
                v-if="specie.species_files.length != 0"
                id="speciesGallery"
                class="flex-container">
                <a v-for="(item, i) in specie.species_files"
                  class="flex-item"
                  :href="$backendurl(item.file_path+'/'+item.file_name)">
                  <img
                    class="flex-img"
                    :src="$backendurl(item.file_path+'/'+item.file_name)"/>
                </a>
              </div>
            </div> -->
            <!-- <div id="speciesGallery" class="border">
              <a href="https://admin.bintanseashells.com//wysiwyg/species_display_photo/2023-09-28/1695873342Conus%20glans%20(ventral).png">
                <img style="width: 50% !important; height: 50% !important;" src="https://admin.bintanseashells.com//wysiwyg/species_display_photo/2023-09-28/1695873342Conus%20glans%20(ventral).png" >
              </a>
              <a href="https://admin.bintanseashells.com//wysiwyg/species_display_photo/2023-10-02/1696229568Conus%20achatinus%20brown.png">
                <img style="width: 50% !important; height: 50% !important;" src="https://admin.bintanseashells.com//wysiwyg/species_display_photo/2023-10-02/1696229568Conus%20achatinus%20brown.png" >
              </a>
            </div> -->
            <!-- <v-row
              align="center"
              justify="center"
              class="images_row"
              v-if="specie.species_files.length != 0">
              <template v-for="(item, i) in specie.species_files">
                <v-col
                  cols="6"
                  md="6"
                  lg="4"
                >
                  <v-hover v-slot="{ hover }">
                    <v-card>
                      <v-img
                        :src="$backendurl(item.file_path+'/'+item.file_name)"
                        width="100%"
                        @click="openImage(item.file_path+'/'+item.file_name)"
                      >
                      </v-img>
                      <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <v-btn @click="openImage(item.file_path+'/'+item.file_name)">View Image</v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </v-hover>
                </v-col>
              </template>
            </v-row> -->
          <v-divider v-if="specie.species_files.length != 0" class="electric_blue"></v-divider>
          <div id="references" class="text-h6 font-bold text-uppercase my-3">
            <span class="avenir-black">References</span>
          </div>
          <p>
            <span class="avenir-book text-break" v-html="specie.species.references"></span>
          </p> 

          <v-dialog
            v-model="dialog"
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable>
            <v-card>
              <v-card-title>
                
              </v-card-title>
              <v-card-text>
                <v-img 
                  :src="selectedImage"
                  class="m-auto"
                  max-width="unset"
                ></v-img>
              </v-card-text>
              <v-card-actions>
                <v-slider
                  class="align-self-stretch"
                  min="500"
                  max="5000"
                  value="500"
                  step="1"
                ></v-slider>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-row>
            <v-col cols="6">
              <a style="width: fit-content;" href="javascript:void(0);" @click="redirectBack()">Back</a>
            </v-col>
            <v-col cols="6">
              <div class="float-right">
                <a style="width: fit-content;" href="javascript:void(0);" onclick="window.scrollTo(0, 0)">Scroll to top</a>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <!-- <div>
        Species View {{ $route.params.id }}

      <pre>{{ specie }}</pre> -->
    </div>
  </div>
</template>

<style scoped>
  .text-shadow{
    text-shadow: -1px 1px 0 #08527b, 1px 1px 0 #08527b, 1px -1px 0 #08527b, -1px -1px 0 #08527b;
  }

  .card-sticky{
    position: sticky;
    overflow: auto;
    top: 70px;
    display: flex;
    flex-direction: column;
  }

  .images_row .v-card {
    transition: opacity .4s ease-in-out;
  }

  /* .images_row .v-card:not(.on-hover) {
    opacity: 0.7;
  } */

  .conservation-status-container{
    height: 120px;
    display: flex;
    overflow: auto;
    width: 100%;
    position: relative;
  }

  .v-application .conservation-status-section{
    border-width: 3px !important;
    border-color: #000000 !important;
    min-width: 950px;
    max-width: 950px;
    margin: auto;
  }

  .v-application .v-card .selected-conservation-status{
    justify-content: center;
    border-radius: 50% !important;
    width: 100px;
    height: 100px;
    text-align: center !important;
    background: gray;
    position: absolute;
    display: flex;
    align-items: center!important;
    top: -30px;
    left: 0px;
  }








  .other-photo-container {
    box-sizing: border-box;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
    text-align: center;
  }

  .flex-item {
    padding: 10px;
    flex: 50%;
  }

  .flex-img {
    width: 100% !important;
    height: 100% !important;
  }

  /* Responsive layout - makes a one column-layout instead of a two-column layout */
  @media (max-width: 800px) {
    .flex-item {
      flex: 100%;
    }
  }

</style>
<style>
    .lg-backdrop.in:has(+ .speciesDisplayPhoto) {
      opacity: 0.85;
    }
    .speciesDisplayPhoto.lg-outer .lg-inner {
      background-color: rgb(255, 255, 255, 1);
      border-radius: 20px;
    }
    .speciesDisplayPhoto.lg-outer .lg-sub-html {
      position: absolute;
      text-align: left;
    }
    .speciesDisplayPhoto.lg-outer .lg-toolbar {
      background-color: transparent;
      height: 0;
    }
    .speciesDisplayPhoto.lg-outer .lg-toolbar .lg-icon {
      color: #000;
    }
    .speciesDisplayPhoto.lg-outer .lg-img-wrap {
      padding: 12px;
    }
</style>