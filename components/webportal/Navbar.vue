<script>
import axios from 'axios'

export default {
  data () {
    return {
      scrollHeight: null,
      backendUrl: 'https://admin.bintanseashells.com',
      seashellImage: { value: null, error: null },
      navbarBg: null,
      containerClass: null,
      outlinedTitle: null,
      appbarClass: null,
      navbarClass: null,
      navbarTheme: null,
      buttonClass: null,
      aiDialog: false,
      aiDialogLoading: false,
      displayProbabilityDialog: false,
      probabilityData: false,
      rawProbabilityData:
        {"IMG_URL":"https://api.bintanseashells.com/download/file?file_name=result_a7c467d7fac5f6ef64745369b0327b96_seashell-wallpaper.jpg","Probability":[61,55,42],"Species":["28"," 8","10"],"Status":200,"data":[{"id":28,"common_name":"Lyrate Mitre","name":"Vexillum lyratum","author":"Lamarck, 1822","local_name":"a","kingdom":"Animalia","phylum":"Mollusca","species_class_id":2,"order":"Cardiida","species_family_id":12,"species_genus_id":17,"general_description":"The shell length ranges from 3.5 cm to 9.0 cm","threats_to_humans":"Hazard unknown","conservation_status":"data deficient","references":"Poppe, G. T., & Tagaro, S. P. (2008). The New Living Volutes: A Guide to the Volutidae of the Indo-Pacific Region. ConchBooks.\n\nKilburn, R. N. (1974). Taxonomic notes on some Indo-Pacific Volutidae (Mollusca: Gastropoda). Annals of the Natal Museum, 22(3), 631-651.\n\nMarais, J. P., & Kilburn, R. N. (2010). Vexillum (Costellaria) lyratum (Linnaeus, 1758) from South Africa and the Indian Ocean. The Nautilus, 124(2), 87-89.\n\nBail, P., Poppe, G. T., & Dekker, H. (2001). A conchological iconography: the family Costellariidae. Hackenheim, Germany: ConchBooks.","class_sequence":28,"unique_code":null,"public":1,"display_photo":null,"created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:14:28.000000Z","probability":61,"species_id":28,"species_files":[],"species_family":{"id":12,"name":"Costellariidae","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_class":{"id":2,"name":"Gastropoda","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_genus":{"id":17,"name":"Vexillum","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_details":[]},{"id":8,"common_name":"Clear Sundial","name":"Architectonica perspectiva","author":"Linnaeus, 1758","local_name":"a","kingdom":"Animalia","phylum":"Mollusca","species_class_id":2,"order":"Cardiida","species_family_id":7,"species_genus_id":8,"general_description":"The shell has approximate size of 7 cm (length) and 5 cm (wide)","threats_to_humans":"None","conservation_status":"not listed","references":"Poppe, G.T., and Poppe, P. (2011). A Conchological Iconography: The Family Epitoniidae. ConchBooks.\n\nLorenz, F., and Fehse, D. (2009). The Living Epitoniidae: Indo-Pacific Region. ConchBooks.\n\nMolluscaBase. (2021). Architectonica perspectiva (Kiener, 1838). Accessed from: http://www.molluscabase.org\n\nOliver, A. P. (1989, September 1). Henry Holt Guide to Shells of the World. Owl Books. https://doi.org/10.1604/9780805011197\n\nHarasewych, M. G., & Moretzsohn, F. (2010, June 30). The Book of Shells: A Life-Size Guide to Identifying and Classifying Six Hundred Seashells.\n\nOliver, A. P. (1989, September 1). Henry Holt Guide to Shells of the World. Owl Books. https://doi.org/10.1604/9780805011197","class_sequence":8,"unique_code":null,"public":1,"display_photo":null,"created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:14:04.000000Z","probability":55,"species_id":8,"species_files":[],"species_family":{"id":7,"name":"Architectonicidae","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_class":{"id":2,"name":"Gastropoda","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_genus":{"id":8,"name":"Achitectonica","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_details":[]},{"id":10,"common_name":"Grey Bonnet","name":"Phalium glaucum","author":"Linnaeus, 1758","local_name":"a","kingdom":"Animalia","phylum":"Mollusca","species_class_id":2,"order":"Cardiida","species_family_id":8,"species_genus_id":10,"general_description":"The shell length ranges from 9 cm to 14 cm","threats_to_humans":"Hazard unknown","conservation_status":"not listed","references":"WILD Fact Sheets. Grey Bonnet Snail (phalium glaucum). (2022, January). http://www.wildsingapore.com/wildfacts/mollusca/gastropoda/cassidae/glaucum.htm\n\nAustralia, A. of L. (n.d.). Species: Phalium glaucum (helmet shell). Phalium glaucum : Helmet Shell | Atlas of Living Australia. https://bie.ala.org.au/species/https://biodiversity.org.au/afd/taxa/982b602f-4ele-48a2-98d6-2cecce690823\n\nH. Oliver, A. P. (2004, August 7). Guide to Seashells of the World. https://doi.org/10.1604/9781552979433\n\nOliver, P. G., & Holmes, A. M. (2006). Non-indigenous marine species of the North Atlantic: an illustrated guide to their identification. IOC Manuals and Guides No. 48, ICES Co-operative Research Report No. 267. 144 pp.\n\nPoppe, G. T., & Tagaro, S. P. (2015). The Cone Shells of the Philippines. ConchBooks.","class_sequence":10,"unique_code":null,"public":1,"display_photo":null,"created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:14:04.000000Z","probability":42,"species_id":10,"species_files":[],"species_family":{"id":8,"name":"Cassidae","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_class":{"id":2,"name":"Gastropoda","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_genus":{"id":10,"name":"Phalium","created_at":"2023-09-29T02:13:37.000000Z","updated_at":"2023-09-29T02:13:37.000000Z"},"species_details":[]}]}
      ,
      navLinks: [
        {
          label: 'identify seashell',
          to: 'aiDialog',
          external: true,
          modal: true,
          leftNav: true,
        }, {
          label: 'bintan island',
          to: '/bintan-island',
          leftNav: true,
        }, {
          separator: true
        }, {
          label: 'home',
          to: '/',
          modal: false
        }, 
        {
          label: 'about us',
          to: '/about-us',
          modal: false
        }, 
        // {
        //   label: 'team',
        //   to: '/team',
        //   modal: false
        // }, 
        {
          label: 'museum',
          to: '/museum',
          modal: false
        }, 
        // {
        //   label: 'contact us',
        //   to: '/contact-us',
        //   modal: false
        // }
      ]
    }
  },

  computed: {
    vuetifyBreakpoint () {
      return this.$vuetify.breakpoint.name
    },
  },

  watch: {
    $route (to, from) {
      this.getNavBarBg()
    },

    vuetifyBreakpoint (newVal, oldVal) {
      console.log(oldVal)
      console.log(newVal)
      this.handleScroll()
      this.getNavBarBg()
    }
  },

  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      this.scrollHeight = window.scrollY

      if (this.$route.name !== 'index' && (!this.$vuetify.breakpoint.sm && !this.$vuetify.breakpoint.xs)) {
        if (this.scrollHeight <= 15) this.appbarClass = 'py-8'
        else this.appbarClass = 'py-0'
      }
    },

    navigateLink (navlink) {
      if (navlink.modal) this[navlink.to] = true
      else this.$router.push(navlink.to)
    },

    clickInfo (id) {
      this.displayProbabilityDialog = false
      this.$router.push(`/species/${id}`)
    },

    identifyAnotherShell () {
      this.displayProbabilityDialog = false
      this.aiDialog = true
    },

    async uploadImage () {
      if (this.seashellImage.value) {
        this.aiDialogLoading = true
        this.seashellImage.error = null

        const tokenUrl = `${this.backendUrl}/oauth/token`
        const { data, status } = await axios({
          method: 'post',
          url: tokenUrl,
          data: {
            grant_type: 'client_credentials',
            client_id: 11,
            client_secret: 'L58lkHPfFbuRncysLPTt1kK5eUA9IVlpMUpwiwHO'
          },
          headers: { 'Content-Type': 'application/json' }
        })

        if (status === 200 && this.seashellImage.value) {
          let formData = new FormData()
          formData.append('file', this.seashellImage.value)

          // get seashell data from api
          this.getShell(data, formData)
        }
      } else {
        this.seashellImage.error = "Please select an image"
      }
    },

    async getShell (payload, formData) {
      formData.forEach(el => console.log(el))
      const uploadUrl = `${this.backendUrl}/api/upload`
      let data = null
      let status = null
      await axios({
        method: 'post',
        url: uploadUrl,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': `${payload.token_type} ${payload.access_token}`
        }
      }).then(response => {
        data = response.data
        status = response.status
      }).catch(err => {
        console.log(err)
      })

      if (status === 200) {
        this.aiDialog = false

        this.probabilityData = data
        this.displayProbabilityDialog = true
        this.aiDialogLoading = false

        console.log(JSON.stringify(data))
      } else {
        this.aiDialogLoading = false
        this.seashellImage.error = "Error fetching using the image provided. Please select another image."
      }
    },

    getNavBarBg () {
      if (this.$route.name === 'index') {
        let fontSize = null
        if (this.$vuetify.breakpoint.xs) fontSize = 'text-h5'
        else fontSize = 'text-h4'

        this.containerClass = "py-0"
        this.appbarClass = "py-0"
        this.navbarBg = "rgba(0, 0, 0, 0)"
        this.navbarClass = `${fontSize} font-weight-black white--text`
        this.outlinedTitle = 'stroke-transparent-white'
        this.navbarTheme = false
      } else if (this.$route.name === 'bintan-island' || this.$route.name === 'about-us') {
        this.containerClass = `${(!this.$vuetify.breakpoint.sm && !this.$vuetify.breakpoint.xs) && 'bottom-rounded-md shadow-xl py-16'} white`
        this.appbarClass = `${this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'py-0' : 'py-8'}`
        this.navbarBg = "white"
        this.navbarClass = "text-h4 electric_blue--text"
        this.outlinedTitle = 'stroke-transparent-eblue'
        this.navbarTheme = true
      } else {
        this.containerClass = `${(!this.$vuetify.breakpoint.sm && !this.$vuetify.breakpoint.xs) && 'bottom-rounded-md shadow-xl py-16'} electric_blue`
        this.appbarClass = `${this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'py-0' : 'py-8'}`
        this.navbarBg = "electric_blue"
        this.navbarClass = "text-h4 white--text"
        this.outlinedTitle = 'stroke-transparent-white'
        this.navbarTheme = true
      }
    },
    openAiDialog () {
      this.displayProbabilityDialog = false
      this.aiDialog = true
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.getNavBarBg()
  }
}
</script>

<template>
  <div class="d-flex align-items-center" :class="containerClass" style="z-index: 54 !important;">
    <v-app-bar
      :dark="navbarTheme"
      clipped-left
      app
      :absolute="$route.name === 'index'"
      :color="navbarBg"
      :elevation="scrollHeight <= 70 ? '0' : '10'"
      class="app-bar px-md-16 py-xl-8"
      :class="appbarClass">

      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer;">
        <div :class="navbarClass" class="avenir-black text-xl-h2">Bintan<span class="stroke-1" :class="outlinedTitle">Seashells</span></div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div
        v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.md"
        class="d-flex align-center">
        <div v-for="(navLink, n) in navLinks" :key="n" class="mr-3">
          <div
            v-if="navLink.separator"
            class="mx-3"
            style="width: 50px;"
            :style="`border: 1px solid ${$route.name == 'bintan-island' || $route.name == 'about-us' ? '#08527b' : 'white'}`"></div>
          <v-btn
            v-else
            @click="navigateLink(navLink)"
            :small="!$vuetify.breakpoint.xl"
            class="rounded-lg text-lowercase"
            :outlined="!navLink.leftNav"
            :class="`${$route.name == 'bintan-island' || $route.name == 'about-us' ? (!navLink.leftNav ? 'electric_blue--text' : 'electric_blue white--text') : (!navLink.leftNav ? 'white--text' : 'white black--text')}`">
            {{ navLink.label }}
          </v-btn>
        </div>
        <v-btn
          @click="$router.push('/species')"
          icon
          plain
          :small="!$vuetify.breakpoint.xl"
          class="text-lowercase rounded-lg"
          :class="$route.name == 'bintan-island' || $route.name == 'about-us' ? 'electric_blue--text' : 'white--text'">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <div v-else>
        <v-menu
          style="z-index: 56 !important;"
          bottom
          left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              icon
              :class="$route.name == 'bintan-island' || $route.name == 'about-us' ? 'electric_blue--text' : 'white--text'"
              v-bind="attrs"
              v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(navLink, i) in navLinks"
              :key="i"
              link
              @click="navigateLink(navLink)">
              <v-list-item-title>{{ navLink.label ? navLink.label : '----' }}</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/species">
              <v-list-item-title>search</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-row justify="center">
      <v-dialog
        v-model="aiDialog"
        scrollable
        persistent
        width="500">
        <v-card>
          <v-card-title>Identify seashell</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-7">
            <div>
              <v-file-input
                :disabled="aiDialogLoading"
                v-model="seashellImage.value"
                placeholder="Upload your image"
                accept="image/*"
                outlined
                dense
                :color="`${seashellImage.error && 'red'}`"
                prepend-icon="mdi-image"
              ></v-file-input>
              <span v-if="seashellImage.error">{{ seashellImage.error }}</span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="aiDialogLoading"
              color="secondary"
              text
              @click="aiDialog = false">
              Close
            </v-btn>
            <v-btn
              :loading="aiDialogLoading"
              color="primary"
              text
              @click="uploadImage">
              Upload
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="displayProbabilityDialog"
        scrollable
        persistent
        :width="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '100%' : '40%'}`">
        <v-card>
          <v-card-title>Results</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pt-8">
            <div v-if="probabilityData && probabilityData.data.length > 0">
              <div v-for="(data, d) in probabilityData.data" :key="d">
                <v-row class="mb-16">
                  <v-col cols="12" md="6">
                    <v-card
                      elevation="2">
                      <img
                        :src="probabilityData.IMG_URL"
                        class="ai-img" />
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div style="height: 100%;" class="d-flex flex-column">
                      <div class="mb-auto mt-0">
                        <span class="text-h5">Probability</span>
                      </div>
                      <div>
                        <span class="text-h1">
                          {{ data.probability }} %
                        </span>
                      </div>
                      <div class="mt-auto mb-0">
                        <a
                          @click="clickInfo(data.id)"
                          href="javascript: void(0);"
                          class="electric_blue--text text-uppercase">
                          Click here for more information
                        </a>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="text-h5 font-weight-bold">
                      <span>{{ data.common_name }}</span>
                      <span>({{ data.author }})</span>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
            <div v-else>
              No records found.
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="secondary"
              text
              @click="displayProbabilityDialog = false">
              Close
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="identifyAnotherShell()">
              Identify another shell
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        scrollable
        persistent
        :width="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '100%' : '40%'}`">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Results
          </v-card-title>

          <v-card-text class="pt-8 mb-n8">
            <div v-if="probabilityData && probabilityData.data.length > 0">
              <div
                v-for="(data, d) in probabilityData.data" :key="d">
                <v-row class="mb-16">
                  <v-col cols="12" md="6">
                    <v-card
                      elevation="2">
                      <img
                        :src="probabilityData.IMG_URL"
                        class="ai-img" />
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div style="height: 100%;" class="d-flex flex-column">
                      <div class="mb-auto mt-0">
                        <span class="text-h5">Probability</span>
                      </div>
                      <div>
                        <span class="text-h1">
                          {{ data.probability }} %
                        </span>
                      </div>
                      <div class="mt-auto mb-0">
                        <a
                          @click="clickInfo(data.id)"
                          href="javascript: void(0);"
                          class="electric_blue--text text-uppercase">
                          Click here for more information
                        </a>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="text-h5 font-weight-bold">
                      <span>{{ data.common_name }}</span>
                      <span>({{ data.author }})</span>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
            <div v-else>
              No records found.
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="py-5">
            <v-btn
              color="primary"
              outlined
              @click="identifyAnotherShell()">
              Identify another shell
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="secondary"
              text
              @click="displayProbabilityDialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<style scoped>
.opaque {
  background-color: rgba(255, 0, 0, 0.9);
}

.avenir-black{
  font-family: Avenir-black !important;
}

.kollektif{
  font-family: Kollektif !important;
}
</style>

<style>
.ai-img {
  height: auto !important;
  width: 100% !important;
  object-fit: 'contain';
}

.app-bar {
  transition: padding .5s;
  z-index: 53 !important;
}
</style>
