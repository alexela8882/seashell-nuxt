exports.ids = [7];
exports.modules = {

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },

    onMouseLeave() {
      this.runDelay('close');
    }

  },

  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }

    if (!this.disabled) {
      element.data = element.data || {};

      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }

    return element;
  }

}));

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bintan-island/index.vue?vue&type=template&id=726ed21a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("shadow-xl px-md-16 px-5 py-5 electric_blue w-100 mx-0 py-16",_vm.responsiveBorderRadius))+" style=\"position: relative; z-index: 51 !important; margin-top: -120px;\" data-v-726ed21a>","</div>",[_vm._ssrNode("<div class=\"px-md-16 white--text\""+(_vm._ssrStyle({"width":"100% !important"},("padding-top: " + ((_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? '50px' : '0px')), null))+" data-v-726ed21a>","</div>",[_vm._ssrNode("<div class=\"soul-seashell\""+(_vm._ssrStyle(null,("" + (_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm ? 'font-size: 85px;' : (_vm.$vuetify.breakpoint.xl ? 'font-size: 175px;' : 'font-size: 125px;'))), null))+" data-v-726ed21a>\n        Bintan Island\n      </div> "),_c('v-row',{staticClass:"w-100"},[_c('v-col',{attrs:{"cols":"12","sm":"6","height":"100%"}},[_c('v-card',{class:_vm.responsiveCorners,attrs:{"width":"100%","elevation":"5","height":"100%"}},[_c('iframe',{staticStyle:{"border":"0"},attrs:{"src":"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d335233.3252070301!2d104.4620116899444!3d1.0310094316343934!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDQnMzYuMCJOIDEwNMKwMzAnMDEuMCJF!5e0!3m2!1sen!2sph!4v1698054848485!5m2!1sen!2sph","width":"100%","height":"100%","allowfullscreen":"true","loading":"lazy","referrerpolicy":"no-referrer-when-downgrade"}})])],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"6","sm":"3"}},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"mb-5",attrs:{"cols":"12"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":"1","cover":"","src":"/img/island-page/1section-1-1-square.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 0}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":"1","cover":"","src":"/img/island-page/1section-1-3-square.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 2}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1)],1)],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"6","sm":"3"}},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"mb-5",attrs:{"cols":"12"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":"1","cover":"","src":"/img/island-page/1section-1-2-square.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 1}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":"1","cover":"","src":"/img/island-page/1section-1-4-square.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 3}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1)],1)],1),_vm._v(" "),_c('v-col',{staticClass:"mt-n3",attrs:{"cols":"12"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"6","md":"4"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.xs ? '1' : '2',"cover":"","src":"/img/island-page/2section-1-1-cropped.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 4}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"6","md":"4"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.xs ? '1' : '2',"cover":"","src":"/img/island-page/2section-1-2-cropped.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 5}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"4"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:((hover && 'on-hover') + " " + _vm.responsiveCorners),staticStyle:{"cursor":"pointer","overflow":"hidden"},attrs:{"elevation":hover ? 5 : 0}},[_c('v-img',{attrs:{"aspect-ratio":"2","cover":"","src":"/img/island-page/2section-1-3-cropped.jpg"}}),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.index = 6}}},[_c('v-icon',[_vm._v("mdi-fullscreen")])],1)],1):_vm._e()],1)],1)]}}])})],1)],1)],1)],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("shadow-xl px-md-16 px-5 py-5 white w-100 mx-0 py-16 pb-0 mb-8",_vm.responsiveBorderRadius))+" style=\"position: relative; z-index: 50 !important; margin-top: -100px;\" data-v-726ed21a>","</div>",[_vm._ssrNode("<div class=\"px-md-16 electric_blue--text\""+(_vm._ssrStyle({"width":"100% !important"},("padding-top: " + (_vm.$vuetify.breakpoint.xs ? '50px' : '70px')), null))+" data-v-726ed21a>","</div>",[_c('v-row',[_c('v-col',{staticClass:"kollektif",class:(_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6',attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"mb-8"},[_vm._v("\n            Bintan Island, also known as Negeri Segantang Lada, is\n            the largest among the 3,200 islands of Riau archipelago\n            of Indonesia, with a land area of 1,173 square kilometers.\n            It is part of the Riau Islands province, and its capital,\n            Tanjung Pinang, is located on the island's south coast. It\n            has a coast line of 105 kilometers and has rolling\n            topography in its landform.\n          ")]),_vm._v(" "),_c('div',{staticClass:"mb-8"},[_vm._v("\n            The most common type of substrate in the Bintan Island is\n            sand. Sand provides a suitable habitat for many shells,\n            allowing them to burrow and hide from predators.\n            However, human activity, such as boat traffic and beach\n            development, can also easily disturb sand. This can lead to\n            a decrease in shell abundance.\n          ")]),_vm._v(" "),_c('div',{staticClass:"mb-8"},[_vm._v("\n            Predators can also play a role in shell abundance. Some\n            predators, such as crabs and fish, prey on shells.\n            However, other predators, such as sea turtles, help keep\n            shell populations in check by eating shells that are already\n            dead or dying.\n          ")])]),_vm._v(" "),_c('v-col',{staticClass:"kollektif",class:(_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6',attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"mb-3 mb-md-8"},[_vm._v("\n            Human disturbance is another factor that can affect shell\n            abundance. Human activities like fishing and collecting\n            shells can reduce shell populations. However, human\n            activity can also benefit shell populations. For example,\n            constructing artificial reefs can provide a new habitat for\n            shells.\n          ")]),_vm._v(" "),_c('div',{staticClass:"mb-3 mb-md-8"},[_vm._v("\n            The overall ecology of the Bintan Island is relatively\n            healthy. However, threats to shell abundance exist, such\n            as human disturbance and climate change. Climate\n            change is causing the sea level to rise, which could\n            inundate some islands and destroy shell habitats.\n          ")]),_vm._v(" "),_c('div',{staticClass:"mb-3 mb-md-8"},[_c('v-img',{attrs:{"height":"250","contain":"","src":"/img/island-page/Shell.png"}})],1)])],1)],1)]),_vm._ssrNode(" "),_c('v-gallery',{attrs:{"images":_vm.images,"index":_vm.index,"options":_vm.options},on:{"close":function($event){_vm.index = null}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/bintan-island/index.vue?vue&type=template&id=726ed21a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bintan-island/index.vue?vue&type=script&lang=js&
/* harmony default export */ var bintan_islandvue_type_script_lang_js_ = ({
  auth: false,
  layout: 'landing',
  head: {
    title: 'Bintan Island'
  },
  data: () => ({
    index: null,
    images: ['/img/island-page/1section-1-1.jpg', '/img/island-page/1section-1-2.jpg', '/img/island-page/1section-1-3.jpg', '/img/island-page/1section-1-4.jpg', '/img/island-page/2section-1-1.jpg', '/img/island-page/2section-1-2.jpg', '/img/island-page/2section-1-3.jpg'],
    options: {
      fullscreen: false
    }
  }),
  computed: {
    responsiveBorderRadius() {
      let data = this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'bottom-rounded-sm' : 'bottom-rounded-lg';
      return data;
    },

    responsiveCorners() {
      let data = !this.$vuetify.breakpoint.xs && !this.$vuetify.breakpoint.sm && 'rounded-xl';
      return data;
    }

  },
  watch: {
    index(newVal, oldVal) {
      console.log(oldVal);
      console.log(newVal);
    }

  },

  mounted() {
    console.log('mounted');
  }

});
// CONCATENATED MODULE: ./pages/bintan-island/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_bintan_islandvue_type_script_lang_js_ = (bintan_islandvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(250);

// CONCATENATED MODULE: ./pages/bintan-island/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_bintan_islandvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "726ed21a",
  "6844501f"
  
)

/* harmony default export */ var bintan_island = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VFadeTransition: transitions["c" /* VFadeTransition */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VOverlay: VOverlay["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map