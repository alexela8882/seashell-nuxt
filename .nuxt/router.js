import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ed58bca = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _0ed63714 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _636539cc = () => interopDefault(import('..\\pages\\azure.vue' /* webpackChunkName: "pages/azure" */))
const _41f0bdc6 = () => interopDefault(import('..\\pages\\bintan-island\\index.vue' /* webpackChunkName: "pages/bintan-island/index" */))
const _eb62cade = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _583509a6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5a408848 = () => interopDefault(import('..\\pages\\roles\\index.vue' /* webpackChunkName: "pages/roles/index" */))
const _4f027da9 = () => interopDefault(import('..\\pages\\species\\index.vue' /* webpackChunkName: "pages/species/index" */))
const _55fa9c1d = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _dbc26d64 = () => interopDefault(import('..\\pages\\users\\profile\\index.vue' /* webpackChunkName: "pages/users/profile/index" */))
const _d594535e = () => interopDefault(import('..\\pages\\species\\_id.vue' /* webpackChunkName: "pages/species/_id" */))
const _e2e532e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6ed58bca,
    name: "about"
  }, {
    path: "/admin",
    component: _0ed63714,
    name: "admin"
  }, {
    path: "/azure",
    component: _636539cc,
    name: "azure"
  }, {
    path: "/bintan-island",
    component: _41f0bdc6,
    name: "bintan-island"
  }, {
    path: "/dashboard",
    component: _eb62cade,
    name: "dashboard"
  }, {
    path: "/login",
    component: _583509a6,
    name: "login"
  }, {
    path: "/roles",
    component: _5a408848,
    name: "roles"
  }, {
    path: "/species",
    component: _4f027da9,
    name: "species"
  }, {
    path: "/users",
    component: _55fa9c1d,
    name: "users"
  }, {
    path: "/users/profile",
    component: _dbc26d64,
    name: "users-profile"
  }, {
    path: "/species/:id",
    component: _d594535e,
    name: "species-id"
  }, {
    path: "/",
    component: _e2e532e2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
