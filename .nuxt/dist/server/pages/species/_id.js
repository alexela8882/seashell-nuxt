exports.ids = [11];
exports.modules = {

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
// imports
 // import lightGallery from 'lightgallery.js'
// import 'lightgallery.js/dist/css/lightgallery.css'

/* harmony default export */ __webpack_exports__["a"] = ({
  head: {
    title: 'Species View'
  },
  auth: false,
  layout: 'landing',
  data: () => ({
    bcrumbs: [{
      text: 'Home',
      to: '/'
    }, {
      text: 'Species',
      to: '/species',
      exact: true
    }, {
      text: 'View',
      to: null,
      active: true
    }],
    componentLoading: false,
    selectedImage: "",
    dialog: false
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
      specie: 'species/getSpecie'
    }),

    vuetifyBreakpoint() {
      return this.$vuetify.breakpoint.name;
    }

  },
  watch: {
    vuetifyBreakpoint(newVal, oldVal) {
      console.log(oldVal);
      console.log(newVal); // re-initialize lightgallery

      this.initializeLightGallery();
    }

  },

  mounted() {
    // initialize lightgallery
    setTimeout(() => {
      this.initializeLightGallery();
    }, 1000);
    this.initialize();
  },

  methods: {
    initializeLightGallery() {
      // lightgallery
      let el = document.getElementById('speciesGallery');
      window.lightGallery(el, {
        mode: 'lg-fade',
        thumbnail: true,
        exThumbImage: 'data-src',
        zoom: true,
        rotate: true
      });
      let el2 = document.getElementById('speciesDisplayPhoto');
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
      });
    },

    async initialize() {
      await this.$store.dispatch('species/fetchSpecie', {
        id: this.$route.params.id
      });
    },

    redirectBack() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      this.$router.push(`/species?${urlParams}`);
    },

    searchSpecies() {
      this.$router.push('/species?keyword=' + this.keyword);
    },

    openImage(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
      this.dialog = true;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(231)["URLSearchParams"]))

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("50379608", content, true, context)
};

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("80b68bb2", content, true, context)
};

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_a8cf237a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_a8cf237a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_a8cf237a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_a8cf237a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_a8cf237a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_a8cf237a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-shadow[data-v-a8cf237a]{text-shadow:-1px 1px 0 #08527b,1px 1px 0 #08527b,1px -1px 0 #08527b,-1px -1px 0 #08527b}.card-sticky[data-v-a8cf237a]{position:sticky;overflow:auto;top:70px;display:flex;flex-direction:column}.images_row .v-card[data-v-a8cf237a]{transition:opacity .4s ease-in-out}.conservation-status-container[data-v-a8cf237a]{height:120px;display:flex;overflow:auto;width:100%;position:relative}.v-application .conservation-status-section[data-v-a8cf237a]{border-width:3px!important;border-color:#000!important;min-width:950px;max-width:950px;margin:auto}.v-application .v-card .selected-conservation-status[data-v-a8cf237a]{justify-content:center;border-radius:50%!important;width:100px;height:100px;text-align:center!important;background:grey;position:absolute;display:flex;align-items:center!important;top:-30px;left:0}.other-photo-container[data-v-a8cf237a]{box-sizing:border-box}.flex-container[data-v-a8cf237a]{display:flex;flex-wrap:wrap;font-size:30px;text-align:center}.flex-item[data-v-a8cf237a]{padding:10px;flex:50%}.flex-img[data-v-a8cf237a]{width:100%!important;height:100%!important}@media (max-width:800px){.flex-item[data-v-a8cf237a]{flex:100%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lg-backdrop.in[\\:has\\(\\%2B\\%20.speciesDisplayPhoto\\)]{opacity:.85}.lg-backdrop.in:has(+.speciesDisplayPhoto){opacity:.85}.speciesDisplayPhoto.lg-outer .lg-inner{background-color:#fff;border-radius:20px}.speciesDisplayPhoto.lg-outer .lg-sub-html{position:absolute;text-align:left}.speciesDisplayPhoto.lg-outer .lg-toolbar{background-color:transparent;height:0}.speciesDisplayPhoto.lg-outer .lg-toolbar .lg-icon{color:#000}.speciesDisplayPhoto.lg-outer .lg-img-wrap{padding:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("b1bed018", content, true)

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c1d8e262", content, true)

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{position:absolute;width:12px;height:12px;left:-6px;top:50%;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb:before{transition:.3s cubic-bezier(.25,.8,.5,1);content:\"\";color:inherit;width:36px;height:36px;border-radius:50%;background:currentColor;opacity:.3;position:absolute;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/species/_id.vue?vue&type=template&id=a8cf237a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-md-16 pa-5 pt-0"},[(_vm.componentLoading)?_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-center\" style=\"height: 80vh;\" data-v-a8cf237a>","</div>",[_c('v-overlay',{staticClass:"align-center justify-center",attrs:{"model-value":_vm.componentLoading,"opacity":0}},[_c('v-progress-circular',{attrs:{"color":"primary","indeterminate":"","size":"64"}})],1)],1):_vm._ssrNode("<div data-v-a8cf237a>","</div>",[_c('v-breadcrumbs',{attrs:{"items":_vm.bcrumbs},scopedSlots:_vm._u([{key:"item",fn:function(ref){
var item = ref.item;
return [(item.text == 'Species')?_c('v-breadcrumbs-item',{attrs:{"href":"javascript:void(0);","disabled":item.active},on:{"click":function($event){return _vm.redirectBack()}}},[_vm._v("\n          "+_vm._s(item.text)+"\n        ")]):(item.text == 'Species Name')?_c('v-breadcrumbs-item',{staticClass:"text-uppercase",attrs:{"href":"javascript:void(0);","disabled":item.active},on:{"click":function($event){return _vm.redirectBack()}}},[_vm._v("\n          "+_vm._s(_vm.speciesTitle1+' '+_vm.speciesTitle2)+"\n        ")]):_c('v-breadcrumbs-item',{attrs:{"to":item.to,"disabled":item.active}},[_vm._v("\n          "+_vm._s(item.text)+"\n        ")])]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-a8cf237a>","</div>",[_vm._ssrNode("<div class=\"col-md-3\" data-v-a8cf237a>","</div>",[(_vm.specie.species)?_c('v-card',{staticClass:"card-sticky",style:(("" + (!_vm.$vuetify.breakpoint.sm && !_vm.$vuetify.breakpoint.xs && 'max-height: 89vh !important;')))},[(_vm.specie.species.display_photo != null)?_c('v-layout',{attrs:{"id":"speciesDisplayPhoto"}},[_c('v-flex',{attrs:{"data-src":_vm.$backendurl(_vm.specie.species.display_photo),"data-download-url":_vm.$backendurl(_vm.specie.species.display_photo)}},[_c('v-card',{staticStyle:{"cursor":"pointer"}},[(_vm.specie.species.display_photo != null)?_c('v-img',{attrs:{"src":_vm.$backendurl(_vm.specie.species.display_photo)}}):_vm._e()],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-card-text',{staticClass:"card-body"},[_c('span',{staticClass:"kollektif"},[_c('p',{staticClass:"mb-1"},[_vm._v("\n                  "+_vm._s(_vm.specie.species && _vm.specie.species.general_description)+"\n                ")])])]),_vm._v(" "),_c('v-card-text',{staticClass:"card-body electric_blue white--text"},[_c('div',{staticClass:"text-h6 font-bold text-uppercase"},[_c('span',{staticClass:"kollektif"},[_vm._v("Classification")])]),_vm._v(" "),_c('ul',{staticClass:"kollektif"},[_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species['kingdom'])+" (Kingdom)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.phylum)+" (Phylum)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.species_class.name)+" (Class)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.order)+" (Order)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.species_family.name)+" (Family)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.species_genus.name)+" (Genus)")]),_vm._v(" "),_c('li',[_c('span',{staticClass:"font-italic"},[_vm._v(_vm._s(_vm.specie.species.name)+" ")]),_vm._v("(Species Name)")])])]),_vm._v(" "),_c('v-card-text',{staticClass:"card-body"},[_c('span',{staticClass:"kollektif"},[_c('div',{staticClass:"text-h6 font-bold text-uppercase"},[_vm._v("Contents")]),_vm._v(" "),_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#"}},[_vm._v("(TOP)")])]),_vm._v(" "),_vm._l((_vm.specie.species_details),function(item,i){return [_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":'#'+item.title.split(' ').join('_')}},[_vm._v(_vm._s(item.title))])])]}),_vm._v(" "),_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#conservation_status"}},[_vm._v("Conservation Status")])]),_vm._v(" "),(_vm.specie.species_files.length != 0)?_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#other_photos"}},[_vm._v("Other Photos")])]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#references"}},[_vm._v("References")])])],2)])],1):_vm._e()],1),_vm._ssrNode(" "),(_vm.specie.species)?_vm._ssrNode("<div class=\"col-md-9\" data-v-a8cf237a>","</div>",[_vm._ssrNode("<div class=\"d-flex flex-row align-center\" data-v-a8cf237a><div"+(_vm._ssrClass("electric_blue--text text-capitalize mr-3",("" + (_vm.$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'))))+" data-v-a8cf237a><span class=\"avenir-black\" data-v-a8cf237a>"+_vm._ssrEscape(_vm._s(_vm.specie.species.common_name))+"</span></div></div> "),_c('v-divider',{staticClass:"electric_blue my-1"}),_vm._ssrNode(" <div"+(_vm._ssrClass("font-italic",("" + (_vm.$vuetify.breakpoint.xs ? 'text-h6' : 'text-h5'))))+" data-v-a8cf237a><span class=\"kollektif\" data-v-a8cf237a>"+_vm._ssrEscape(_vm._s(_vm.specie.species.name)+" ("+_vm._s(_vm.specie.species.author)+")")+"</span></div> "+((_vm.specie.species.local_name)?("<p class=\"text-capitalize\" data-v-a8cf237a><span class=\"kollektif\" data-v-a8cf237a>"+_vm._ssrEscape("\n            Local Names: "+_vm._s(_vm.specie.species.local_name)+" ")+"</span></p>"):"<!---->")+" "),_c('v-divider',{staticClass:"electric_blue"}),_vm._ssrNode(" "),_vm._l((_vm.specie.species_details),function(item,i){return [_vm._ssrNode("<div"+(_vm._ssrAttr("id",item.title.split(' ').join('_')))+" class=\"text-h6 font-bold text-uppercase my-3\" data-v-a8cf237a><span class=\"avenir-black\" data-v-a8cf237a>"+_vm._ssrEscape(_vm._s(item.title))+"</span></div> <p data-v-a8cf237a><span class=\"avenir-book text-justify\" data-v-a8cf237a>"+(_vm._s(item.description))+"</span></p> "),_c('v-divider',{staticClass:"electric_blue"})]}),_vm._ssrNode(" <div id=\"conservation_status\" class=\"text-h6 font-bold text-uppercase my-3\" data-v-a8cf237a><span class=\"avenir-black\" data-v-a8cf237a>Conservation Status</span></div> "),_vm._ssrNode("<div class=\"conservation-status-container\" data-v-a8cf237a>","</div>",[_c('v-img',{attrs:{"contain":"","max-width":"950","src":'/img/conservation-status/alt-1/'+_vm.specie.species.conservation_status+'.png'}})],1),_vm._ssrNode(" <p data-v-a8cf237a><span class=\"avenir-book text-justify\" data-v-a8cf237a>Source: IUCN Red List of Threatened Species</span></p> "),_c('v-divider',{staticClass:"electric_blue"}),_vm._ssrNode(" "+((_vm.specie.species_files.length != 0)?("<div id=\"other_photos\" class=\"text-h6 font-bold text-uppercase my-3\" data-v-a8cf237a><span class=\"avenir-black\" data-v-a8cf237a>Other Photos</span></div>"):"<!---->")+" "),(_vm.specie.species_files.length != 0)?_c('v-layout',{attrs:{"id":"speciesGallery","align-center":"","justify-left":"","row":"","wrap":""}},_vm._l((_vm.specie.species_files),function(item,i){return _c('v-flex',{key:i,staticClass:"px-2",attrs:{"data-src":_vm.$backendurl(item.file_path+'/'+item.file_name),"data-download-url":_vm.$backendurl(item.file_path+'/'+item.file_name),"sm6":"","xs12":"","md4":""}},[_c('v-card',{staticClass:"rounded-xl mb-5 mx-auto",staticStyle:{"cursor":"pointer"},attrs:{"width":"100%","elevation":"5"}},[_c('v-img',{staticClass:"cover",staticStyle:{"max-height":"300px !important","height":"300px !important"},attrs:{"cover":"","src":_vm.$backendurl(item.file_path+'/'+item.file_name)}})],1)],1)}),1):_vm._e(),_vm._ssrNode(" "),(_vm.specie.species_files.length != 0)?_c('v-divider',{staticClass:"electric_blue"}):_vm._e(),_vm._ssrNode(" <div id=\"references\" class=\"text-h6 font-bold text-uppercase my-3\" data-v-a8cf237a><span class=\"avenir-black\" data-v-a8cf237a>References</span></div> <p data-v-a8cf237a><span class=\"avenir-book text-break\" data-v-a8cf237a>"+(_vm._s(_vm.specie.species.references))+"</span></p> "),_c('v-dialog',{attrs:{"hide-overlay":"","transition":"dialog-bottom-transition","scrollable":""},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title'),_vm._v(" "),_c('v-card-text',[_c('v-img',{staticClass:"m-auto",attrs:{"src":_vm.selectedImage,"max-width":"unset"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-slider',{staticClass:"align-self-stretch",attrs:{"min":"500","max":"5000","value":"500","step":"1"}}),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.dialog = false}}},[_vm._v("\n                Close\n              ")])],1)],1)],1),_vm._ssrNode(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"6"}},[_c('a',{staticStyle:{"width":"fit-content"},attrs:{"href":"javascript:void(0);"},on:{"click":function($event){return _vm.redirectBack()}}},[_vm._v("Back")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"6"}},[_c('div',{staticClass:"float-right"},[_c('a',{staticStyle:{"width":"fit-content"},attrs:{"href":"javascript:void(0);","onclick":"window.scrollTo(0, 0)"}},[_vm._v("Scroll to top")])])])],1)],2):_vm._e()],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/species/_id.vue?vue&type=template&id=a8cf237a&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/species/_id.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(272);

// CONCATENATED MODULE: ./pages/species/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var species_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass
var VBreadcrumbs = __webpack_require__(312);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js


/* @vue/component */

/* harmony default export */ var VBreadcrumbsItem = (Object(mixins["a" /* default */])(routable["a" /* default */]).extend({
  name: 'v-breadcrumbs-item',
  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'v-breadcrumbs__item--disabled'
    },
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs__item': true,
        [this.activeClass]: this.disabled
      };
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    return h('li', [h(tag, { ...data,
      attrs: { ...data.attrs,
        'aria-current': this.isActive && this.isLink ? 'page' : undefined
      }
    }, this.$slots.default)]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js

/* harmony default export */ var VBreadcrumbsDivider = (Object(helpers["i" /* createSimpleFunctional */])('v-breadcrumbs__divider', 'li'));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js
// Styles
 // Components


 // Mixins

 // Utils


/* harmony default export */ var VBreadcrumbs_VBreadcrumbs = (Object(mixins["a" /* default */])(themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    },
    items: {
      type: Array,
      default: () => []
    },
    large: Boolean
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs--large': this.large,
        ...this.themeClasses
      };
    }

  },
  methods: {
    genDivider() {
      return this.$createElement(VBreadcrumbsDivider, this.$slots.divider ? this.$slots.divider : this.divider);
    },

    genItems() {
      const items = [];
      const hasSlot = !!this.$scopedSlots.item;
      const keys = [];

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        keys.push(item.text);
        if (hasSlot) items.push(this.$scopedSlots.item({
          item
        }));else items.push(this.$createElement(VBreadcrumbsItem, {
          key: keys.join('.'),
          props: item
        }, [item.text]));
        if (i < this.items.length - 1) items.push(this.genDivider());
      }

      return items;
    }

  },

  render(h) {
    const children = this.$slots.default || this.genItems();
    return h('ul', {
      staticClass: 'v-breadcrumbs',
      class: this.classes
    }, children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(247);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlider/VSlider.sass
var VSlider = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js
var loadable = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ var VSlider_VSlider = (Object(mixins["a" /* default */])(VInput["a" /* default */], loadable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  mixins: [loadable["a" /* default */]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: () => []
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: () => ({
    app: null,
    oldValue: null,
    keyPressed: 0,
    isFocused: false,
    isActive: false,
    noClick: false
  }),
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      };
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        const value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }

    },

    trackTransition() {
      return this.keyPressed >= 2 ? 'none' : '';
    },

    minValue() {
      return parseFloat(this.min);
    },

    maxValue() {
      return parseFloat(this.max);
    },

    stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },

    inputWidth() {
      const value = (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
      return value;
    },

    trackFillStyles() {
      const startDir = this.vertical ? 'bottom' : 'left';
      const endDir = this.vertical ? 'top' : 'right';
      const valueDir = this.vertical ? 'height' : 'width';
      const start = this.$vuetify.rtl ? 'auto' : '0';
      const end = this.$vuetify.rtl ? '0' : 'auto';
      const value = this.isDisabled ? `calc(${this.inputWidth}% - 10px)` : `${this.inputWidth}%`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end,
        [valueDir]: value
      };
    },

    trackStyles() {
      const startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      const endDir = this.vertical ? 'height' : 'width';
      const start = '0px';
      const end = this.isDisabled ? `calc(${100 - this.inputWidth}% - 10px)` : `calc(${100 - this.inputWidth}%)`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end
      };
    },

    showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },

    numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },

    showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },

    computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },

    computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },

    computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }

  },
  watch: {
    min(val) {
      const parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },

    max(val) {
      const parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },

    value: {
      handler(v) {
        this.internalValue = v;
      }

    }
  },

  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount() {
    this.internalValue = this.value;
  },

  mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(console["c" /* consoleWarn */])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },

  methods: {
    genDefaultSlot() {
      const children = [this.genLabel()];
      const slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },

    genSlider() {
      return this.$createElement('div', {
        class: {
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly,
          ...this.themeClasses
        },
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick
        }
      }, this.genChildren());
    },

    genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onThumbMouseDown, this.onFocus, this.onBlur)];
    },

    genInput() {
      return this.$createElement('input', {
        attrs: {
          value: this.internalValue,
          id: this.computedId,
          disabled: this.isDisabled,
          readonly: true,
          tabindex: -1,
          ...this.$attrs
        }
      });
    },

    genTrackContainer() {
      const children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },

    genSteps() {
      if (!this.step || !this.showTicks) return null;
      const tickSize = parseFloat(this.tickSize);
      const range = Object(helpers["h" /* createRange */])(this.numTicks + 1);
      const direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      const offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      const ticks = range.map(index => {
        const children = [];

        if (this.tickLabels[index]) {
          children.push(this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, this.tickLabels[index]));
        }

        const width = index * (100 / this.numTicks);
        const filled = this.$vuetify.rtl ? 100 - this.inputWidth < width : width < this.inputWidth;
        return this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: {
            width: `${tickSize}px`,
            height: `${tickSize}px`,
            [direction]: `calc(${width}% - ${tickSize / 2}px)`,
            [offsetDirection]: `calc(50% - ${tickSize / 2}px)`
          }
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },

    genThumbContainer(value, valueWidth, isActive, isFocused, onDrag, onFocus, onBlur, ref = 'thumb') {
      const children = [this.genThumb()];
      const thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
          ...this.$attrs
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown,
          keyup: this.onKeyUp,
          touchstart: onDrag,
          mousedown: onDrag
        }
      }), children);
    },

    genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value
      }) : [this.$createElement('span', [String(value)])];
    },

    genThumbLabel(content) {
      const size = Object(helpers["g" /* convertToUnit */])(this.thumbSize);
      const transform = this.vertical ? `translateY(20%) translateY(${Number(this.thumbSize) / 3 - 1}px) translateX(55%) rotate(135deg)` : `translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)`;
      return this.$createElement(transitions["d" /* VScaleTransition */], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform
        }
      }), [this.$createElement('div', content)])])]);
    },

    genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },

    getThumbContainerStyles(width) {
      const direction = this.vertical ? 'top' : 'left';
      let value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return {
        transition: this.trackTransition,
        [direction]: `${value}%`
      };
    },

    onThumbMouseDown(e) {
      e.preventDefault();
      this.oldValue = this.internalValue;
      this.keyPressed = 2;
      this.isActive = true;
      const mouseUpOptions = helpers["C" /* passiveSupported */] ? {
        passive: true,
        capture: true
      } : true;
      const mouseMoveOptions = helpers["C" /* passiveSupported */] ? {
        passive: true
      } : false;

      if ('touches' in e) {
        this.app.addEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
        Object(helpers["a" /* addOnceEventListener */])(this.app, 'touchend', this.onSliderMouseUp, mouseUpOptions);
      } else {
        this.app.addEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
        Object(helpers["a" /* addOnceEventListener */])(this.app, 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      }

      this.$emit('start', this.internalValue);
    },

    onSliderMouseUp(e) {
      e.stopPropagation();
      this.keyPressed = 0;
      const mouseMoveOptions = helpers["C" /* passiveSupported */] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!Object(helpers["j" /* deepEqual */])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },

    onMouseMove(e) {
      const {
        value
      } = this.parseMouseMove(e);
      this.internalValue = value;
    },

    onKeyDown(e) {
      if (!this.isInteractive) return;
      const value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },

    onKeyUp() {
      this.keyPressed = 0;
    },

    onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      const thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    parseMouseMove(e) {
      const start = this.vertical ? 'top' : 'left';
      const length = this.vertical ? 'height' : 'width';
      const click = this.vertical ? 'clientY' : 'clientX';
      const {
        [start]: trackStart,
        [length]: trackLength
      } = this.$refs.track.getBoundingClientRect();
      const clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // Can we get rid of any here?
      // It is possible for left to be NaN, force to number

      let clickPos = Math.min(Math.max((clickOffset - trackStart) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      const isInsideTrack = clickOffset >= trackStart && clickOffset <= trackStart + trackLength;
      const value = parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
      return {
        value,
        isInsideTrack
      };
    },

    parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      const {
        pageup,
        pagedown,
        end,
        home,
        left,
        right,
        down,
        up
      } = helpers["y" /* keyCodes */];
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      const step = this.stepNumeric || 1;
      const steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        this.keyPressed += 1;
        const increase = this.$vuetify.rtl ? [left, up] : [right, up];
        const direction = increase.includes(e.keyCode) ? 1 : -1;
        const multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        const direction = e.keyCode === pagedown ? 1 : -1;
        value = value - direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },

    roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      const trimmedStep = this.step.toString().trim();
      const decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      const offset = this.minValue % this.stepNumeric;
      const newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(245);

// CONCATENATED MODULE: ./pages/species/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(308)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(310)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  species_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a8cf237a",
  "67e70912"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



















installComponents_default()(component, {VBreadcrumbs: VBreadcrumbs_VBreadcrumbs,VBreadcrumbsItem: VBreadcrumbsItem,VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["b" /* VCardText */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VDialog: VDialog["a" /* default */],VDivider: VDivider["a" /* default */],VFlex: VFlex["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */],VSlider: VSlider_VSlider,VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map