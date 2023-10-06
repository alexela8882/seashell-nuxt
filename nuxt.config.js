import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  // target: 'static',
  // router: {
  //   middleware: ['auth']
  // },
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
   ** Custom page loader
   */
  loading: '~/components/Loading.vue',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + 'Bintan Seashells',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
    ],
    // script: [
    //   {
    //     hid: 'gtm-script1',
    //     src: 'https://www.googletagmanager.com/gtag/js?id=UA-185450851-4',
    //     defer: true
    //   },
    //   {
    //     hid: 'gtm-script2',
    //     innerHTML: `
    //       window.dataLayer = window.dataLayer || [];
    //       function gtag(){dataLayer.push(arguments);}
    //       gtag('js', new Date());

    //       gtag('config', 'UA-185450851-4');
    //     `,
    //     type: 'text/javascript',
    //     charset: 'utf-8'
    //   }
    // ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: 'material-design-icons-iconfont/dist/material-design-icons.css', lang: 'css' },
    '@/assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/baseurl.js',
    '~/plugins/snackbar.js',
    '~/plugins/saving-snackbar.js',
    '~/plugins/star-rating.js',
    '~/plugins/vee-validate.js',
    '~/plugins/get-data-from-apis.js',
    { src: '~plugins/azure-auth.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/pwa'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
    // '@nuxtjs/auth-next'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://admin.bintanseashells.com'
  },
  auth: {
    watchLoggedIn: true,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/dashboard'
    },
    strategies: {
      local: false,
      password_grant: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/api/nuxt2/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: {
            url: '/api/nuxt2/logout',
            method: 'post'
          },
          user: {
            url: 'api/user',
            method: 'get',
            propertyName: 'user'
          }
        }
      }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    // defaultAssets: {
    //   font: { heading: 'Libre Baskerville' }
    // },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          customAccent: '#2B2424',
          electric_blue: '#08527b',
          alabaster: '#f1f0eb'
        },
        light: {
          primary: '#00467f',
          secondary: '#4d4d4f',
          customAccent: '#2B2424',
          electric_blue: '#08527b',
          alabaster: '#f1f0eb'
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ]
  },
  pwa: {
    meta: {
      mobileAppIOS: true,
    },
    icon: {
      source: '/MULTICOLORDOT SITE LOGO_FINAL-512px.png'
    },
    workbox: {
      // importScripts: [
      //   '/firebase-auth-sw.js'
      // ],
      dev: false
    },
    manifest: {
      name: 'Bintan Seashells',
      lang: 'en',
      short_name: 'Bintan Seashells',
      useWebmanifestExtension: false
    }
  },
}
