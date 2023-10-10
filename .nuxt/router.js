import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6967d2cf = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _43be5754 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5df780d1 = () => interopDefault(import('../pages/azure.vue' /* webpackChunkName: "pages/azure" */))
const _1410d4cd = () => interopDefault(import('../pages/bintan-island/index.vue' /* webpackChunkName: "pages/bintan-island/index" */))
const _0956714e = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _52c750ab = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _69f41d7c = () => interopDefault(import('../pages/roles/index.vue' /* webpackChunkName: "pages/roles/index" */))
const _37bee2fe = () => interopDefault(import('../pages/species/index.vue' /* webpackChunkName: "pages/species/index" */))
const _3e7f8ecd = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _0410ea32 = () => interopDefault(import('../pages/users/profile/index.vue' /* webpackChunkName: "pages/users/profile/index" */))
const _5fd23d29 = () => interopDefault(import('../pages/species/_id.vue' /* webpackChunkName: "pages/species/_id" */))
const _edc0a4d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6967d2cf,
    name: "about"
  }, {
    path: "/admin",
    component: _43be5754,
    name: "admin"
  }, {
    path: "/azure",
    component: _5df780d1,
    name: "azure"
  }, {
    path: "/bintan-island",
    component: _1410d4cd,
    name: "bintan-island"
  }, {
    path: "/dashboard",
    component: _0956714e,
    name: "dashboard"
  }, {
    path: "/login",
    component: _52c750ab,
    name: "login"
  }, {
    path: "/roles",
    component: _69f41d7c,
    name: "roles"
  }, {
    path: "/species",
    component: _37bee2fe,
    name: "species"
  }, {
    path: "/users",
    component: _3e7f8ecd,
    name: "users"
  }, {
    path: "/users/profile",
    component: _0410ea32,
    name: "users-profile"
  }, {
    path: "/species/:id",
    component: _5fd23d29,
    name: "species-id"
  }, {
    path: "/",
    component: _edc0a4d8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
