import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_e370e09e from 'nuxt_plugin_plugin_e370e09e' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_511c39dd from 'nuxt_plugin_plugin_511c39dd' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_axios_b7f20772 from 'nuxt_plugin_axios_b7f20772' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_workbox_40097ba3 from 'nuxt_plugin_workbox_40097ba3' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_314a6fb6 from 'nuxt_plugin_metaplugin_314a6fb6' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_35f2152a from 'nuxt_plugin_iconplugin_35f2152a' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_moment_28f7c39e from 'nuxt_plugin_moment_28f7c39e' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ../plugins/axios.js (mode: 'all')
import nuxt_plugin_baseurl_d8fa1fa2 from 'nuxt_plugin_baseurl_d8fa1fa2' // Source: ../plugins/baseurl.js (mode: 'all')
import nuxt_plugin_backendurl_6c72c606 from 'nuxt_plugin_backendurl_6c72c606' // Source: ../plugins/backendurl.js (mode: 'all')
import nuxt_plugin_frontendurl_460857b0 from 'nuxt_plugin_frontendurl_460857b0' // Source: ../plugins/frontendurl.js (mode: 'all')
import nuxt_plugin_snackbar_832a94c8 from 'nuxt_plugin_snackbar_832a94c8' // Source: ../plugins/snackbar.js (mode: 'all')
import nuxt_plugin_savingsnackbar_d4c68316 from 'nuxt_plugin_savingsnackbar_d4c68316' // Source: ../plugins/saving-snackbar.js (mode: 'all')
import nuxt_plugin_starrating_3d884675 from 'nuxt_plugin_starrating_3d884675' // Source: ../plugins/star-rating.js (mode: 'all')
import nuxt_plugin_veevalidate_1a0c1998 from 'nuxt_plugin_veevalidate_1a0c1998' // Source: ../plugins/vee-validate.js (mode: 'all')
import nuxt_plugin_getdatafromapis_5883911e from 'nuxt_plugin_getdatafromapis_5883911e' // Source: ../plugins/get-data-from-apis.js (mode: 'all')
import nuxt_plugin_azureauth_2461a0cc from 'nuxt_plugin_azureauth_2461a0cc' // Source: ../plugins/azure-auth.js (mode: 'client')
import nuxt_plugin_vuegalleryclient_76ec8f1a from 'nuxt_plugin_vuegalleryclient_76ec8f1a' // Source: ../plugins/vue-gallery.client.js (mode: 'client')
import nuxt_plugin_lightgallery_9d2b7676 from 'nuxt_plugin_lightgallery_9d2b7676' // Source: ../plugins/lightgallery.js (mode: 'client')
import nuxt_plugin_plugin_11fb7843 from 'nuxt_plugin_plugin_11fb7843' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - Bintan Seashells","title":"bintanseashells","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"## Build Setup"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"default"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Bintan Seashells"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Bintan Seashells"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Bintan Seashells"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## Build Setup"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"favicon.png"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonese_640x1136.02bf5f.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonese"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphone6_50x1334.02bf5f.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphone6"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphoneplus_1080x1920.02bf5f.png","media":"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphoneplus"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonex_1125x2436.02bf5f.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonex"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonexr_828x1792.02bf5f.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonexr"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonexsmax_1242x2688.02bf5f.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonexsmax"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_ipad_1536x2048.02bf5f.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipad"},{"media":"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro1"},{"media":"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro2"},{"media":"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro3"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.6d274a9d.json","hid":"manifest"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.02bf5f.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.02bf5f.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_e370e09e === 'function') {
    await nuxt_plugin_plugin_e370e09e(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_511c39dd === 'function') {
    await nuxt_plugin_plugin_511c39dd(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_b7f20772 === 'function') {
    await nuxt_plugin_axios_b7f20772(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_40097ba3 === 'function') {
    await nuxt_plugin_workbox_40097ba3(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_314a6fb6 === 'function') {
    await nuxt_plugin_metaplugin_314a6fb6(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_35f2152a === 'function') {
    await nuxt_plugin_iconplugin_35f2152a(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_28f7c39e === 'function') {
    await nuxt_plugin_moment_28f7c39e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (typeof nuxt_plugin_baseurl_d8fa1fa2 === 'function') {
    await nuxt_plugin_baseurl_d8fa1fa2(app.context, inject)
  }

  if (typeof nuxt_plugin_backendurl_6c72c606 === 'function') {
    await nuxt_plugin_backendurl_6c72c606(app.context, inject)
  }

  if (typeof nuxt_plugin_frontendurl_460857b0 === 'function') {
    await nuxt_plugin_frontendurl_460857b0(app.context, inject)
  }

  if (typeof nuxt_plugin_snackbar_832a94c8 === 'function') {
    await nuxt_plugin_snackbar_832a94c8(app.context, inject)
  }

  if (typeof nuxt_plugin_savingsnackbar_d4c68316 === 'function') {
    await nuxt_plugin_savingsnackbar_d4c68316(app.context, inject)
  }

  if (typeof nuxt_plugin_starrating_3d884675 === 'function') {
    await nuxt_plugin_starrating_3d884675(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_1a0c1998 === 'function') {
    await nuxt_plugin_veevalidate_1a0c1998(app.context, inject)
  }

  if (typeof nuxt_plugin_getdatafromapis_5883911e === 'function') {
    await nuxt_plugin_getdatafromapis_5883911e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_azureauth_2461a0cc === 'function') {
    await nuxt_plugin_azureauth_2461a0cc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuegalleryclient_76ec8f1a === 'function') {
    await nuxt_plugin_vuegalleryclient_76ec8f1a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lightgallery_9d2b7676 === 'function') {
    await nuxt_plugin_lightgallery_9d2b7676(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_11fb7843 === 'function') {
    await nuxt_plugin_plugin_11fb7843(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
