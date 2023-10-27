exports.ids = [13];
exports.modules = {

/***/ 276:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(232)["URLSearchParams"]))

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2a40003f", content, true, context)
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("80b68bb2", content, true, context)
};

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6260b972_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6260b972_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6260b972_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6260b972_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6260b972_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6260b972_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-shadow[data-v-6260b972]{text-shadow:-1px 1px 0 #08527b,1px 1px 0 #08527b,1px -1px 0 #08527b,-1px -1px 0 #08527b}.card-sticky[data-v-6260b972]{position:sticky;overflow:auto;top:70px;display:flex;flex-direction:column}.images_row .v-card[data-v-6260b972]{transition:opacity .4s ease-in-out}.conservation-status-container[data-v-6260b972]{height:120px;display:flex;overflow:auto;width:100%;position:relative}.v-application .conservation-status-section[data-v-6260b972]{border-width:3px!important;border-color:#000!important;min-width:950px;max-width:950px;margin:auto}.v-application .v-card .selected-conservation-status[data-v-6260b972]{justify-content:center;border-radius:50%!important;width:100px;height:100px;text-align:center!important;background:grey;position:absolute;display:flex;align-items:center!important;top:-30px;left:0}.other-photo-container[data-v-6260b972]{box-sizing:border-box}.flex-container[data-v-6260b972]{display:flex;flex-wrap:wrap;font-size:30px;text-align:center}.flex-item[data-v-6260b972]{padding:10px;flex:50%}.flex-img[data-v-6260b972]{width:100%!important;height:100%!important}@media (max-width:800px){.flex-item[data-v-6260b972]{flex:100%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lg-backdrop.in[\\:has\\(\\%2B\\%20.speciesDisplayPhoto\\)]{opacity:.85}.lg-backdrop.in:has(+.speciesDisplayPhoto){opacity:.85}.speciesDisplayPhoto.lg-outer .lg-inner{background-color:#fff;border-radius:20px}.speciesDisplayPhoto.lg-outer .lg-sub-html{position:absolute;text-align:left}.speciesDisplayPhoto.lg-outer .lg-toolbar{background-color:transparent;height:0}.speciesDisplayPhoto.lg-outer .lg-toolbar .lg-icon{color:#000}.speciesDisplayPhoto.lg-outer .lg-img-wrap{padding:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("b1bed018", content, true)

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/species/_id.vue?vue&type=template&id=6260b972&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-md-16 pa-5 pt-0"},[(_vm.componentLoading)?_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-center\" style=\"height: 80vh;\" data-v-6260b972>","</div>",[_c('v-overlay',{staticClass:"align-center justify-center",attrs:{"model-value":_vm.componentLoading,"opacity":0}},[_c('v-progress-circular',{attrs:{"color":"primary","indeterminate":"","size":"64"}})],1)],1):_vm._ssrNode("<div data-v-6260b972>","</div>",[_c('v-breadcrumbs',{attrs:{"items":_vm.bcrumbs},scopedSlots:_vm._u([{key:"item",fn:function(ref){
var item = ref.item;
return [(item.text == 'Species')?_c('v-breadcrumbs-item',{attrs:{"href":"javascript:void(0);","disabled":item.active},on:{"click":function($event){return _vm.redirectBack()}}},[_vm._v("\n          "+_vm._s(item.text)+"\n        ")]):(item.text == 'Species Name')?_c('v-breadcrumbs-item',{staticClass:"text-uppercase",attrs:{"href":"javascript:void(0);","disabled":item.active},on:{"click":function($event){return _vm.redirectBack()}}},[_vm._v("\n          "+_vm._s(_vm.speciesTitle1+' '+_vm.speciesTitle2)+"\n        ")]):_c('v-breadcrumbs-item',{attrs:{"to":item.to,"disabled":item.active}},[_vm._v("\n          "+_vm._s(item.text)+"\n        ")])]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-6260b972>","</div>",[_vm._ssrNode("<div class=\"col-md-3\" data-v-6260b972>","</div>",[(_vm.specie.species)?_c('v-card',{staticClass:"card-sticky",style:(("" + (!_vm.$vuetify.breakpoint.sm && !_vm.$vuetify.breakpoint.xs && 'max-height: 89vh !important;')))},[(_vm.specie.species.display_photo != null)?_c('v-layout',{attrs:{"id":"speciesDisplayPhoto"}},[_c('v-flex',{attrs:{"data-src":_vm.$backendurl(_vm.specie.species.display_photo),"data-sub-html":_vm.specie.species.general_description,"data-download-url":_vm.$backendurl(_vm.specie.species.display_photo)}},[_c('v-card',{staticStyle:{"cursor":"pointer"}},[(_vm.specie.species.display_photo != null)?_c('v-img',{attrs:{"src":_vm.$backendurl(_vm.specie.species.display_photo),"lazy-src":"/img/sample_shell.jpg"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var placeholder = ref.placeholder;
return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"grey-lighten-5"}})],1)]}}],null,false,650708559)}):_vm._e()],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-card-text',{staticClass:"card-body"},[_c('span',{staticClass:"kollektif"},[_c('p',{staticClass:"mb-1"},[_vm._v("\n                  "+_vm._s(_vm.specie.species && _vm.specie.species.general_description)+"\n                ")])])]),_vm._v(" "),_c('v-card-text',{staticClass:"card-body electric_blue white--text"},[_c('div',{staticClass:"text-h6 font-bold text-uppercase"},[_c('span',{staticClass:"kollektif"},[_vm._v("Classification")])]),_vm._v(" "),_c('ul',{staticClass:"kollektif"},[_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species['kingdom'])+" (Kingdom)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.phylum)+" (Phylum)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.species_class.name)+" (Class)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.order)+" (Order)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.species_family.name)+" (Family)")]),_vm._v(" "),_c('li',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.specie.species.species_genus.name)+" (Genus)")]),_vm._v(" "),_c('li',[_c('span',{staticClass:"font-italic"},[_vm._v(_vm._s(_vm.specie.species.name)+" ")]),_vm._v("(Species Name)")])])]),_vm._v(" "),_c('v-card-text',{staticClass:"card-body"},[_c('span',{staticClass:"kollektif"},[_c('div',{staticClass:"text-h6 font-bold text-uppercase"},[_vm._v("Contents")]),_vm._v(" "),_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#"}},[_vm._v("(TOP)")])]),_vm._v(" "),_vm._l((_vm.specie.species_details),function(item,i){return [_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":'#'+item.title.split(' ').join('_')}},[_vm._v(_vm._s(item.title))])])]}),_vm._v(" "),_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#conservation_status"}},[_vm._v("Conservation Status")])]),_vm._v(" "),(_vm.specie.species_files.length != 0)?_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#other_photos"}},[_vm._v("Other Photos")])]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"mb-1"},[_c('a',{attrs:{"href":"#references"}},[_vm._v("References")])])],2)])],1):_vm._e()],1),_vm._ssrNode(" "),(_vm.specie.species)?_vm._ssrNode("<div class=\"col-md-9\" data-v-6260b972>","</div>",[_vm._ssrNode("<div class=\"d-flex flex-row align-center\" data-v-6260b972><div"+(_vm._ssrClass("electric_blue--text text-capitalize mr-3",("" + (_vm.$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'))))+" data-v-6260b972><span class=\"avenir-black\" data-v-6260b972>"+_vm._ssrEscape(_vm._s(_vm.specie.species.common_name))+"</span></div></div> "),_c('v-divider',{staticClass:"electric_blue my-1"}),_vm._ssrNode(" <div"+(_vm._ssrClass("font-italic",("" + (_vm.$vuetify.breakpoint.xs ? 'text-h6' : 'text-h5'))))+" data-v-6260b972><span class=\"kollektif\" data-v-6260b972>"+_vm._ssrEscape(_vm._s(_vm.specie.species.name)+" ("+_vm._s(_vm.specie.species.author)+")")+"</span></div> "+((_vm.specie.species.local_name)?("<p class=\"text-capitalize\" data-v-6260b972><span class=\"kollektif\" data-v-6260b972>"+_vm._ssrEscape("\n            Local Names: "+_vm._s(_vm.specie.species.local_name)+" ")+"</span></p>"):"<!---->")+" "),_c('v-divider',{staticClass:"electric_blue"}),_vm._ssrNode(" "),_vm._l((_vm.specie.species_details),function(item,i){return [_vm._ssrNode("<div"+(_vm._ssrAttr("id",item.title.split(' ').join('_')))+" class=\"text-h6 font-bold text-uppercase my-3\" data-v-6260b972><span class=\"avenir-black\" data-v-6260b972>"+_vm._ssrEscape(_vm._s(item.title))+"</span></div> <p data-v-6260b972><span class=\"avenir-book text-justify\" data-v-6260b972>"+(_vm._s(item.description))+"</span></p> "),_c('v-divider',{staticClass:"electric_blue"})]}),_vm._ssrNode(" <div id=\"conservation_status\" class=\"text-h6 font-bold text-uppercase my-3\" data-v-6260b972><span class=\"avenir-black\" data-v-6260b972>Conservation Status</span></div> "),_vm._ssrNode("<div class=\"conservation-status-container\" data-v-6260b972>","</div>",[_c('v-img',{attrs:{"contain":"","max-width":"950","src":'/img/conservation-status/alt-1/'+_vm.specie.species.conservation_status+'.png'}})],1),_vm._ssrNode(" <p data-v-6260b972><span class=\"avenir-book text-justify\" data-v-6260b972>Source: IUCN Red List of Threatened Species</span></p> "),_c('v-divider',{staticClass:"electric_blue"}),_vm._ssrNode(" "+((_vm.specie.species_files.length != 0)?("<div id=\"other_photos\" class=\"text-h6 font-bold text-uppercase my-3\" data-v-6260b972><span class=\"avenir-black\" data-v-6260b972>Other Photos</span></div>"):"<!---->")+" "),(_vm.specie.species_files.length != 0)?_c('v-layout',{attrs:{"id":"speciesGallery","align-center":"","justify-left":"","row":"","wrap":""}},_vm._l((_vm.specie.species_files),function(item,i){return _c('v-flex',{key:i,staticClass:"px-2",attrs:{"data-src":_vm.$backendurl(item.file_path+'/'+item.file_name),"data-download-url":_vm.$backendurl(item.file_path+'/'+item.file_name),"sm6":"","xs12":"","md4":""}},[_c('v-card',{staticClass:"rounded-xl mb-5 mx-auto",staticStyle:{"cursor":"pointer"},attrs:{"width":"100%","elevation":"5"}},[_c('v-img',{staticClass:"cover",staticStyle:{"max-height":"300px !important","height":"300px !important"},attrs:{"cover":"","lazy-src":"/img/sample_shell.jpg","src":_vm.$backendurl(item.file_path+'/'+item.file_name)},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var placeholder = ref.placeholder;
return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"grey-lighten-5"}})],1)]}}],null,true)})],1)],1)}),1):_vm._e(),_vm._ssrNode(" "),(_vm.specie.species_files.length != 0)?_c('v-divider',{staticClass:"electric_blue"}):_vm._e(),_vm._ssrNode(" <div id=\"references\" class=\"text-h6 font-bold text-uppercase my-3\" data-v-6260b972><span class=\"avenir-black\" data-v-6260b972>References</span></div> <p data-v-6260b972><span class=\"avenir-book text-break\" data-v-6260b972>"+(_vm._s(_vm.specie.species.references))+"</span></p> "),_c('v-row',[_c('v-col',{attrs:{"cols":"6"}},[_c('a',{staticStyle:{"width":"fit-content"},attrs:{"href":"javascript:void(0);"},on:{"click":function($event){return _vm.redirectBack()}}},[_vm._v("Back")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"6"}},[_c('div',{staticClass:"float-right"},[_c('a',{staticStyle:{"width":"fit-content"},attrs:{"href":"javascript:void(0);","onclick":"window.scrollTo(0, 0)"}},[_vm._v("Scroll to top")])])])],1)],2):_vm._e()],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/species/_id.vue?vue&type=template&id=6260b972&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/species/_id.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(276);

// CONCATENATED MODULE: ./pages/species/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var species_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass
var VBreadcrumbs = __webpack_require__(322);

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

/* harmony default export */ var VBreadcrumbsDivider = (Object(helpers["h" /* createSimpleFunctional */])('v-breadcrumbs__divider', 'li'));
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
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(250);

// CONCATENATED MODULE: ./pages/species/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(320)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  species_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6260b972",
  "c151ab0a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */













installComponents_default()(component, {VBreadcrumbs: VBreadcrumbs_VBreadcrumbs,VBreadcrumbsItem: VBreadcrumbsItem,VCard: VCard["a" /* default */],VCardText: components_VCard["b" /* VCardText */],VCol: VCol["a" /* default */],VDivider: VDivider["a" /* default */],VFlex: VFlex["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map