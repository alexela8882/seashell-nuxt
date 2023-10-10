import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _91817c9c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _69f1cff7 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _a8622098 = () => interopDefault(import('../pages/azure.vue' /* webpackChunkName: "pages/azure" */))
const _5a420b20 = () => interopDefault(import('../pages/bintan-island/index.vue' /* webpackChunkName: "pages/bintan-island/index" */))
const _7405367c = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _bec280e4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1d8d2c36 = () => interopDefault(import('../pages/roles/index.vue' /* webpackChunkName: "pages/roles/index" */))
const _4b586a64 = () => interopDefault(import('../pages/species/index.vue' /* webpackChunkName: "pages/species/index" */))
const _64b30770 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _86749eec = () => interopDefault(import('../pages/users/profile/index.vue' /* webpackChunkName: "pages/users/profile/index" */))
const _f3f49468 = () => interopDefault(import('../pages/species/_id.vue' /* webpackChunkName: "pages/species/_id" */))
const _5211c712 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _91817c9c,
    name: "about"
  }, {
    path: "/admin",
    component: _69f1cff7,
    name: "admin"
  }, {
    path: "/azure",
    component: _a8622098,
    name: "azure"
  }, {
    path: "/bintan-island",
    component: _5a420b20,
    name: "bintan-island"
  }, {
    path: "/dashboard",
    component: _7405367c,
    name: "dashboard"
  }, {
    path: "/login",
    component: _bec280e4,
    name: "login"
  }, {
    path: "/roles",
    component: _1d8d2c36,
    name: "roles"
  }, {
    path: "/species",
    component: _4b586a64,
    name: "species"
  }, {
    path: "/users",
    component: _64b30770,
    name: "users"
  }, {
    path: "/users/profile",
    component: _86749eec,
    name: "users-profile"
  }, {
    path: "/species/:id",
    component: _f3f49468,
    name: "species-id"
  }, {
    path: "/",
    component: _5211c712,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
