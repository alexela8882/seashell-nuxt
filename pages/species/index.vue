<script>
// imports
import { mapState, mapGetters } from 'vuex'

export default {
  head: {
    title: 'Species'
  },

  auth: false,
  layout: 'landing',

  data () {
    return {
      page: 1,
      selected_class: null,
      selected_family: null,
      selected_genus: null,
      filters: {
        cpage: null,
        shell_class: null,
        family: null,
        genus: null,
        keyword: null,
        sort: "common_name",
      },
      sortNames: [
        {
          name: "Name",
          value: "common_name"
        }, {
          name: "Author",
          value: "author"
        }, {
          name: "Scientific Name",
          value: "name"
        }, {
          name: "Date Added",
          value: "created_at"
        },
      ]
    }
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
    }),
    ...mapGetters({
      paged_species: 'species/getPagedSpecies',
      shell_class: 'species/getClass',
      family: 'species/getFamily',
      genus: 'species/getGenus',
    })
  },

  mounted () {
    window.scrollTo(0, 0)

    console.log(document.documentElement.scrollHeight)

    const url_string = window.location.href
    const url = new URL(url_string)
    const searchPage = url.searchParams.get("page")
    const searchKeyword = url.searchParams.get('keyword')
    const searchClass = url.searchParams.get('shell_class')
    const searchFamily = url.searchParams.get('family')
    const searchGenus = url.searchParams.get('genus')
    const searchSort = url.searchParams.get('sort')

    // re-populate filters
    this.page = searchPage ? parseInt(searchPage) : 1
    this.filters.cpage = this.page
    this.filters.keyword = searchKeyword
    this.filters.shell_class = searchClass
    this.filters.family = searchFamily
    this.filters.genus = searchGenus
    this.filters.sort = searchSort ? searchSort : 'common_name'

    // initialize
    this.initialize()
  },

  watch: {
    page (newVal, oldVal) {
      this.filters.cpage = newVal
      this.getSpecies()
    }
  },

  methods: {
    async initialize () {
      await this.$store.dispatch('species/fetchClass')
      await this.$store.dispatch('species/fetchFamily')
      await this.$store.dispatch('species/fetchGenus')

      this.getSpecies()
    },

    async getSpecies () {
      await this.$store.dispatch('species/fetchPagedSpecies', this.filters)

      // push uri
      const searchURL = new URL(window.location)
      searchURL.searchParams.set('page', this.filters.cpage)
      window.history.pushState({}, '', searchURL)
    },

    speciesView (id) {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)

      this.$router.push(`/species/${id}?${urlParams}`)
    },

    sideFilters (args) {
      console.log(this[args.name])
      if (this.filters[args.name] == null) this.deleteUriParam(args.name)
      else {
        // push uri
        const searchURL = new URL(window.location)
        searchURL.searchParams.set('page', 1)
        if(args.name == 'shell_class'){
          searchURL.searchParams.delete('genus')
          searchURL.searchParams.delete('family')
          this.filters.genus = null
          this.filters.family = null
          this.genus = null
          this.family = null
        }
        else if(args.name == 'family'){
          searchURL.searchParams.delete('genus')
          this.filters.genus = null
          this.genus = null
        }
        searchURL.searchParams.set(args.name, this.filters[args.name])
        window.history.pushState({}, '', searchURL)
      }

      this.filters.cpage = 1
      this.getSpecies()
      // this.getClass(this.filters)
      // this.getFamily(this.filters)
      // this.getGenus(this.filters)

      console.log(this.filters)
    },

    deleteUriParam (uriName) {
      const searchURL = new URL(window.location)
      searchURL.searchParams.delete(uriName)
      window.history.pushState({}, '', searchURL)
    },
  }
}

</script>

<template>
  <div class="px-md-16 px-6 pb-16">
    <v-row>
      <v-col cols="12" md="3">
        <div style="position: sticky; top: 90px;" class="grey lighten-4 rounded-xl pa-5 pb-0">
          <div class="pb-3 pl-1 text-overline" style="font-size: 18px !important;">
            <div class="avenir-black electric_blue--text">Filters</div>
          </div>
          <v-text-field
            v-model="filters.keyword"
            v-on:keyup.enter="sideFilters({name: 'keyword'})"
            outlined
            label="Search"
            prepend-inner-icon="mdi-magnify"
            class="rounded-xl pa-0 ma-0 text-search"
            color="electric_blue"
          ></v-text-field>
          <v-select
            @change="sideFilters({name: 'sort'})"
            v-model="filters.sort"
            :items="sortNames"
            item-text="name"
            item-value="value"
            label="Sort"
            outlined
            clearable
            class="rounded-xl select-filter"
            bg-color="purple"
          ></v-select>
          <v-select
            @change="sideFilters({name: 'shell_class'})"
            v-model="filters.shell_class"
            :items="shell_class || []"
            item-text="name"
            item-value="classid"
            label="Class"
            outlined
            clearable
            class="rounded-xl select-filter"
          ></v-select>
          <v-select
            v-if="filters.shell_class"
            @change="sideFilters({name: 'family'})"
            v-model="filters.family"
            :items="family || []"
            item-text="name"
            item-value="familyid"
            label="Family"
            outlined
            clearable
            class="rounded-xl select-filter"
          ></v-select>
          <v-select
            v-if="filters.shell_class"
            @change="sideFilters({name: 'genus'})"
            v-model="filters.genus"
            :items="genus || []"
            item-text="name"
            item-value="genusid"
            label="Genus"
            outlined
            clearable
            class="rounded-xl select-filter"
            bg-color="purple"
          ></v-select>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="9">
        <div v-if="loading">
          <v-sheet class="pa-3">
            <v-row>
              <v-col cols="12" md="4" v-for="i in 3" :key="i">
                <v-skeleton-loader
                  type="card"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
        <div v-else-if="(paged_species && paged_species.data) && paged_species.data.data.length > 0">
          <v-layout wrap align-center row fill-height>
            <v-flex
              v-for="(item, ps) in paged_species.data.data"
              :key="ps" md4 sm6 xs12
              class="pa-6 pt-0"
            >
              <v-hover v-slot="{ hover }">
                <div class="pb-8">
                  <v-card
                    class="rounded-xl mb-5 mx-auto"
                    width="100%"
                    :elevation="hover ? 12 : 5"
                    :class="{ 'on-hover': hover }"
                    @click="speciesView(item.id)"
                    style="cursor: pointer;">
                    <v-img :src="item.display_photo ? item.display_photo : '/img/sample_shell.jpg'"></v-img>
                  </v-card>
                  <v-card
                    :elevation="hover ? 12 : 5"
                    width="100%"
                    :class="{ 'on-hover': hover }"
                    class="rounded-xl electric_blue white--text pa-3 mb-6 mx-auto">
                    <div class="kollektif font-weight-bold">
                      <div class="text-h6 font-weight-bold text-truncate">{{ item.common_name && item.common_name }}</div>
                      <div class="text-body-1 font-italic text-truncate">{{ item.name && item.name }}</div>
                    </div>
                  </v-card>
                </div>
              </v-hover>
            </v-flex>
          </v-layout>
          <v-pagination
            v-if="paged_species && paged_species.pagination"
            v-model="page"
            :length="paged_species.pagination.last_page"
            :total-visible="paged_species.pagination.per_page"
            class="float-right pt-n8"
            rounded="circle"
            elevation="0"
          ></v-pagination>
        </div>
        <v-layout
          v-else
          wrap align-center justify-center row fill-height
          class="rounded-lg"
          style="background-color: lightgrey; !important">
          <div class="">
            No items found
          </div>
        </v-layout>
      </v-col>
    </v-row>
  </div>
</template>

<style>

/* .v-list-item--link::before { background-color: red; } */
.text-search.v-text-field fieldset {
  border: 2px solid #08527b !important;
  color: #08527b;
}

.text-search.v-text-field i{
  color: #08527b;
}

.text-search.v-text-field input::placeholder {
  color: #08527b;
  opacity: 1; /* Firefox */
}

.text-search.v-text-field input::-ms-input-placeholder { /* Edge 12 -18 */
  color: #08527b;
}

.select-filter fieldset{
  background-color: #08527b !important;
  border: 2px solid #08527b !important;
}

.select-filter .v-select__selections .v-select__selection {
  color: #fff !important;
}

.select-filter .theme--light.v-label.v-label--active {
  margin-top: 10px !important;
}

.select-filter .theme--light.v-icon,
.select-filter .theme--light.v-label {
  color: #fff !important;
}

</style>