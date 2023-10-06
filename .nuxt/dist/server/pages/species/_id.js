exports.ids = [10];
exports.modules = {

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("b1bed018", content, true)

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/species/_id.vue?vue&type=template&id=0abf868e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-md-16 px-6"},[_c('v-breadcrumbs',{attrs:{"items":_vm.bcrumbs},scopedSlots:_vm._u([{key:"title",fn:function(ref){
var item = ref.item;
return [_vm._v("\n      "+_vm._s(item.title.toUpperCase())+"\n    ")]}}])}),_vm._ssrNode(" <div data-v-0abf868e>"+_vm._ssrEscape("\n    Species View "+_vm._s(_vm.$route.params.id)+"\n\n    ")+"<pre data-v-0abf868e>"+_vm._ssrEscape(_vm._s(_vm.specie))+"</pre></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/species/_id.vue?vue&type=template&id=0abf868e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/species/_id.vue?vue&type=script&lang=js&
// imports

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
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
    }]
  }),
  computed: { ...Object(external_vuex_["mapGetters"])({
      specie: 'species/getSpecie'
    })
  },

  mounted() {
    this.initialize();
  },

  methods: {
    async initialize() {
      await this.$store.dispatch('species/fetchSpecie', {
        id: this.$route.params.id
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/species/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var species_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass
var VBreadcrumbs = __webpack_require__(301);

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
// CONCATENATED MODULE: ./pages/species/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  species_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0abf868e",
  "67e70912"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBreadcrumbs: VBreadcrumbs_VBreadcrumbs})


/***/ })

};;
//# sourceMappingURL=_id.js.map