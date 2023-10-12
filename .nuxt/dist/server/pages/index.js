exports.ids = [8];
exports.modules = {

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__[/* factory */ "a"])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__[/* BaseItemGroup */ "a"].extend({
  name: 'v-window',

  provide() {
    return {
      windowGroup: this
    };
  },

  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: {
      type: Boolean,
      default: undefined
    },
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },

  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },

  computed: {
    isActive() {
      return this.transitionCount > 0;
    },

    classes() {
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },

    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.$vuetify.rtl && axis === 'x' ? !this.internalReverse : this.internalReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },

    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },

    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },

    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },

    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },

    internalReverse() {
      return this.reverse ? !this.isReverse : this.isReverse;
    }

  },
  watch: {
    internalIndex: 'updateReverse'
  },

  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    genContainer() {
      const children = [this.$slots.default];

      if (this.showArrows) {
        children.push(this.genControlIcons());
      }

      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },

    genIcon(direction, icon, fn) {
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, [this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          icon: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
        },
        on: {
          click: () => {
            this.changedByDelimiters = true;
            fn();
          }
        }
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        props: {
          large: true
        }
      }, icon)])]);
    },

    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }

      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }

      return icons;
    },

    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },

    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },

    next() {
      this.isReverse = this.$vuetify.rtl;
      /* istanbul ignore if */

      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },

    prev() {
      this.isReverse = !this.$vuetify.rtl;
      /* istanbul ignore if */

      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },

    updateReverse(val, oldVal) {
      if (this.changedByDelimiters) {
        this.changedByDelimiters = false;
        return;
      }

      this.isReverse = val < oldVal;
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };

    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }

    return h('div', data, [this.genContainer()]);
  }

}));

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0d135400", content, true)

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-window__container{height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  head: {
    title: 'Welcome'
  },
  auth: false,
  layout: 'landing',

  data() {
    return {
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      icons: [{
        icon: 'mdi-link',
        link: '/species'
      }],
      items: [{
        title: 'Swollen Olive',
        description: `Dead Agaronia gibbosa form shallow marine sediments.
            They are carnivores.
            Individuals can grow to 48.5 mm.
            They have sexual reproduction.`,
        src: '/img/shells/seashell-wallpaper1-1080p.jpg'
      }, {
        title: 'Blunt Tellin',
        description: `They are surficial modifiers.
            Individuals can grow to 60 mm.
            They have sexual reproduction.
            They are facultatively mobile animals. (eol.org)`,
        src: '/img/shells/seashell-wallpaper2.jpg'
      }, {
        title: 'Dusky Cone',
        description: `Brown to white ground color.
            The last whorl's pattern varies from spiral banding in a blackish brown color to uniform white color.`,
        src: '/img/shells/seashell-wallpaper3-1080p.jpg'
      }, {
        title: 'Elegant Goblet',
        description: 'Individuals can grow to 33.3 mm. (eol.org)',
        src: '/img/shells/seashell-wallpaper4-1080p.jpg'
      }],
      bivalveItems: [],
      gastropodItems: [],
      // bivalveItems: [
      //   {
      //     title: 'Shell 1',
      //     text: `This is shell 1`,
      //     subtext: 'Description shell 1',
      //     img: '/img/sample-shells/shell1.jpg',
      //   },
      //   {
      //     title: 'Shell 2',
      //     text: `This is shell 2`,
      //     subtext: 'Description shell 2',
      //     img: '/img/sample-shells/shell2.jpg',
      //   },
      //   {
      //     title: 'Shell 3',
      //     text: `This is shell 3`,
      //     subtext: 'Description shell 3',
      //     img: '/img/sample-shells/shell3.jpg',
      //   },
      //   {
      //     title: 'Shell 4',
      //     text: `This is shell 4`,
      //     subtext: 'Description shell 4',
      //     img: '/img/sample-shells/shell4.jpg',
      //   },
      //   {
      //     title: 'Shell 5',
      //     text: `This is shell 5`,
      //     subtext: 'Description shell 5',
      //     img: '/img/sample-shells/shell5.jpg',
      //   },
      //   {
      //     title: 'Shell 6',
      //     text: `This is shell 6`,
      //     subtext: 'Description shell 6',
      //     img: '/img/sample-shells/shell6.jpg',
      //   },
      // ],
      transparent: 'rgba(255, 255, 255, 0)'
    };
  },

  methods: {
    getBivalveSpecies() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/web/get_random_species', {
        params: {
          species_class_id: 2,
          limit: 4
        }
      }).then(response => {
        console.log(response.data);
        this.bivalveItems = response.data;
      }, error => {// this.isUnauthorized(error);
      });
    },

    getGastropodSpecies() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/web/get_random_species', {
        params: {
          species_class_id: 1,
          limit: 4
        }
      }).then(response => {
        console.log(response.data);
        this.gastropodItems = response.data;
      }, error => {// this.isUnauthorized(error);
      });
    },

    speciesView(id) {
      // window.location.href = '/#/species/' + id;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      this.$router.push(`/species/${id}?${urlParams}`);
    },

    speciesList(id) {
      this.$router.push(`/species?shell_class=` + id);
    }

  },

  mounted() {
    this.getBivalveSpecies();
    this.getGastropodSpecies();
  },

  computed: {
    parallaxHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '850';

        case 'sm':
          return '900';

        case 'md':
          return '900';

        case 'lg':
          return '1050';

        case 'xl':
          return '1200';
      }
    },

    responsiveBorderRadius() {
      let data = this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'bottom-rounded-sm' : 'bottom-rounded-lg';
      return data;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(231)["URLSearchParams"]))

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6aad1374", content, true, context)
};

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
  add("cd60204a", content, true, context)
};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8cbd946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8cbd946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8cbd946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8cbd946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8cbd946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8cbd946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-card[data-v-e8cbd946]{transition:opacity .4s ease-in-out}.v-card[data-v-e8cbd946]:not(.on-hover){opacity:.7}.show-btns[data-v-e8cbd946]{color:#fff!important}.fade-transition-leave-active[data-v-e8cbd946]{position:absolute;width:100%}.shell-section-bg[data-v-e8cbd946]{background:url(/img/shells/landingpage/shell-section-bg.jpg);background-repeat:no-repeat;background-size:cover;background-position:right 50% bottom 40%}.custom-ul[data-v-e8cbd946]{list-style:none}.custom-ul li[data-v-e8cbd946]{line-height:40px}.custom-ul li a[data-v-e8cbd946]{font-family:Kollektif!important;font-size:16px;color:var(--electric_blue);text-decoration:none}.custom-ul li a[data-v-e8cbd946]:hover{text-decoration:underline}.bintan-img-100[data-v-e8cbd946]{width:100%}.bintan-img-50[data-v-e8cbd946]{float:left;width:50%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-parallax__image{bottom:20%!important;height:90%!important;min-height:unset}.xs-parallax .v-parallax__image{bottom:20%!important;height:85%!important;min-height:unset}.lg-parallax .v-parallax__image{bottom:7%!important;height:100%!important;min-height:unset}.xl-parallax .v-parallax__image{bottom:-7%!important;height:130%!important;min-height:unset}.kollektif-font div{font-family:Kollektif!important;line-height:17px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2d62e390", content, true)

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}", ""]);
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
__webpack_require__(5).default("0cd63bd9", content, true)

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=e8cbd946&scoped=true&
var lib_vue_loader_options_pagesvue_type_template_id_e8cbd946_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("mt-n16 shadow-xl",_vm.responsiveBorderRadius))+" style=\"background-color: grey; position: relative; z-index: 53 !important; height: 100vh;\" data-v-e8cbd946>","</div>",[_c('v-carousel',{class:_vm.responsiveBorderRadius,staticStyle:{"z-index":"55 !important"},attrs:{"cycle":"","hide-delimiters":"","show-arrows":false,"height":"100vh"}},_vm._l((_vm.items),function(item,i){return _c('v-carousel-item',{key:i,attrs:{"src":item.src,"reverse-transition":"fade-transition","transition":"fade-transition","eager":""}},[_c('div',{staticClass:"transparent-bg-black d-flex flex-column align-center justify-center",staticStyle:{"width":"100%","height":"100vh"}},[_c('div',{staticClass:"mt-auto text-center"},[_c('div',{staticClass:"soul-seashell white--text",staticStyle:{"line-height":"80% !important"},style:(("" + (_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm ? 'font-size: 85px;' : (_vm.$vuetify.breakpoint.xl ? 'font-size: 240px;' : 'font-size: 180px;'))))},[_vm._v("\n                Shoreline Gems\n              ")]),_vm._v(" "),_c('v-btn',{staticClass:"text-lowercase white--text mt-5 rounded-lg",attrs:{"outlined":"","large":_vm.$vuetify.breakpoint.xl}},[_vm._v("\n                explore\n              ")])],1),_vm._v(" "),_c('div',{staticClass:"mb-0 mt-auto px-md-16 white--text text-body-1 text-xl-h6",class:(_vm.$vuetify.breakpoint.sm || _vm.$vuetify.breakpoint.xs) && 'text-caption mb-10',staticStyle:{"width":"100%","white-space":"pre-line"}})]),_vm._v(" "),_c('v-img',{attrs:{"src":item.src,"height":"100%","eager":""}})],1)}),1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("shell-section-bg",_vm.responsiveBorderRadius))+" style=\"position: relative; margin-top: -100px; z-index: 52 !important;\" data-v-e8cbd946>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("shadow-xl px-md-16 px-5 w-100 mx-0 pb-16 white--text transparent-bg-black-dark",_vm.responsiveBorderRadius))+" style=\"width: 100%; padding-top: 100px;\" data-v-e8cbd946>","</div>",[_vm._ssrNode("<div class=\"px-md-16 px-0\" data-v-e8cbd946>","</div>",[_vm._ssrNode("<div class=\"soul-seashell\""+(_vm._ssrStyle(null,_vm.$vuetify.breakpoint.xl ? 'font-size: 175px' : 'font-size: 125px', null))+" data-v-e8cbd946>\n            shells\n          </div> "),_c('v-row',{staticClass:"kollektif-font text-sm-body-2 text-md-body-1 text-xl-h6"},[_c('v-col',{attrs:{"cols":"12","md":"12","sm":"12"}},[_c('div',[_vm._v("\n              Seashells are the protective outer layer of marine mollusks, \n              such as snails, clams, and oysters. They are made of calcium \n              carbonate and come in various shapes, sizes, and colors.\n              ")]),_vm._v(" "),_c('div',{staticClass:"mt-5"},[_vm._v("\n              For millennia, humans have been fascinated by seashells. \n              They have been collected and used as currency, jewelry, tools, \n              and religious artifacts. Seashells also play an important \n              ecological role, providing habitat and protection for \n              marine organisms and contributing to the overall health \n              and balance of marine ecosystems.\n              ")]),_vm._v(" "),_c('div',{staticClass:"mt-5"},[_vm._v("\n              Today, seashells are still appreciated for their beauty, \n              but it is important to collect them responsibly.\n              Many beaches and marine environments are protected, \n              and it is crucial to respect these habitats and not \n              disturb the delicate balance of marine life.\n              ")])])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"position:absolute;\\n        width: 100%;\\n        height: 100%;\\n        bottom: 0;\\n        right: 0;\" data-v-e8cbd946>","</div>",[(!_vm.$vuetify.breakpoint.sm && !_vm.$vuetify.breakpoint.xs)?_c('v-img',{staticStyle:{"position":"absolute","right":"5rem","z-index":"55 !important"},style:(_vm.$vuetify.breakpoint.lg || _vm.$vuetify.breakpoint.xl ? 'bottom: -14rem;' : 'bottom: -10rem;'),attrs:{"src":"/img/shells/landingpage/shell_combined.png","width":_vm.$vuetify.breakpoint.lg || _vm.$vuetify.breakpoint.xl ? '300' : '200'}}):_vm._e()],1)],2),_vm._ssrNode(" "),_c('v-row',{staticClass:"shadow-xl px-md-16 px-5 py-5 electric_blue w-100 mx-0 py-16",class:_vm.responsiveBorderRadius,staticStyle:{"position":"relative","z-index":"51 !important","margin-top":"-100px"}},[_c('div',{staticClass:"px-md-16 white--text",staticStyle:{"padding-top":"90px","width":"100% !important"}},[_c('p',{staticClass:"avenir-book text-xs-caption text-lg-body-1 text-xl-h6 text-md-body-2",style:(("" + ((!_vm.$vuetify.breakpoint.xs && !_vm.$vuetify.breakpoint.sm) && 'white-space: pre-line')))},[_c('span',[_vm._v("\n            The anatomy of a shell refers to the detailed structure and feathers of the protective outer\n            covering found in various marine mollusks, including snails, clams, oysters, and others.\n          ")]),_vm._v(" "),_c('span',[_vm._v("\n            Although the specific anatomy may vary among different species, the fundamental\n            components of a shell are standard across most mollusks.\n          ")])]),_vm._v(" "),_c('div',{staticClass:"d-flex align-center float-right w-100"},[_c('div',{staticClass:"avenir-black text-h1"},[_vm._v("—     ")]),_vm._v(" "),_c('div',{staticClass:"float-right avenir-book text-md-h5 text-lg-h6 text-xl-h5",style:(("" + (_vm.$vuetify.breakpoint.sm && 'white-space: pre-line')))},[_vm._v("Let’s explore the critical parts of a\n            typical bivalve and gastropod shell!\n          ")])])])]),_vm._ssrNode(" "),( false)?undefined:_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,(_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? 'bottom-rounded-sm shadow-xl' : 'bottom-rounded-lg shadow-xl'))+" style=\"position: relative; z-index: 49 !important;\" data-v-e8cbd946>","</div>",[_c('v-row',{staticStyle:{"margin-top":"-200px"},attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","md":"7"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{class:_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm ? 'faded-bg-fix' : 'faded-bg-white-left',staticStyle:{"padding-top":"200px"}},[_c('div',{staticClass:"px-md-16 px-6 electric_blue--text d-flex flex-column align-left justify-center",staticStyle:{"width":"100%","height":"100%"}},[_c('div',{staticClass:"mb-auto mt-10"},[_c('div',{staticClass:"font-weight-black text-xs-text-h4 text-h3 text-lg-h1",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.speciesList(2)}}},[_vm._v("gas."),_c('span',{staticClass:"stroke-1 stroke-transparent-eblue"},[_vm._v("tro.")]),_vm._v("pod")]),_vm._v(" "),_c('div',{staticClass:"text-h6 font-weight-bold font-italic"},[_vm._v("noun")]),_vm._v(" "),_c('div',{staticClass:"pr-16"},_vm._l((_vm.gastropodItems.data),function(item,i){return _c('ul',{staticClass:"custom-ul text-right electric_blue--text"},[_c('li',[_c('a',{on:{"click":function($event){return _vm.speciesView(item.id)}}},[_vm._v(_vm._s(item.common_name))])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"mt-auto mb-10"},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"8"}},[_c('div',{staticClass:"text-body-1 text-xl-h6 font-italic kollektif",class:("" + (_vm.$vuetify.breakpoint.xs ? 'white--text' : 'electric_blue--text'))},[_vm._v("\n                        any of a large class (Gastropoda) of mollusks\n                        (such as snails and slugs) usually with a univalve shell or\n                        none and a distinct head bearning sensory organs\n                      ")])])],1)],1)])]),_vm._v(" "),_c('v-parallax',{class:(((_vm.$vuetify.breakpoint.xl) ? 'xl-parallax' : (_vm.$vuetify.breakpoint.lg ? 'lg-parallax' : (_vm.$vuetify.breakpoint.xs && 'xs-parallax'))) + " " + ((_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? 'bottom-rounded-sm' : 'bottom-left-rounded-lg')),staticStyle:{"padding-top":"220px"},attrs:{"dark":"","height":_vm.parallaxHeight,"src":"/img/shells/landingpage/gastropod.png"}})],1)]),_vm._v(" "),(!_vm.$vuetify.breakpoint.xs && !_vm.$vuetify.breakpoint.sm)?_c('v-col',{staticClass:"white bottom-right-rounded-lg",staticStyle:{"padding-top":"220px"},attrs:{"cols":"12","md":"5"}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"100%"}},[_c('div',[_c('v-img',{staticClass:"mt-16",attrs:{"width":("" + (!_vm.$vuetify.breakpoint.xl ? '400' : '500')),"cover":"","src":"/img/shells/gastropod.png"}})],1)])]):_vm._e()],1)],1),_vm._ssrNode(" "),(_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm)?_vm._ssrNode("<div class=\"bottom-rounded-sm shadow-xl\" style=\"position: relative; background-color: white; margin-top: -200px; z-index: 48 !important; padding-bottom: 50px;\" data-v-e8cbd946>","</div>",[_c('v-row',{staticClass:"px-md-16",staticStyle:{"padding-top":"200px"}},[_c('v-col',{attrs:{"cols":"10","offset":"1"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"6"}},[_c('v-img',{attrs:{"width":"650","cover":"","src":"/img/shells/gastropod.png"}})],1),_vm._v(" "),_c('v-col',{staticClass:"d-flex align-center",attrs:{"cols":"6"}},[_c('v-img',{attrs:{"width":"750","cover":"","src":"/img/shells/bivalve.png"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('span',{staticClass:"avenir-book font-weight-bold electric_blue--text text-body-1"},[_vm._v("\n                Let’s explore the critical parts of a typical bivalve and gastropod shell\n              ")])])],1)],1)],1)],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("shadow-xl mb-6",(_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? 'bottom-rounded-sm' : 'bottom-rounded-lg'))+" style=\"position: relative; z-index: 46 !important;\" data-v-e8cbd946>","</div>",[_c('v-row',{staticStyle:{"margin-top":"-200px"},attrs:{"no-gutters":""}},[(!_vm.$vuetify.breakpoint.xs && !_vm.$vuetify.breakpoint.sm)?_c('v-col',{staticStyle:{"padding-top":"220px"},attrs:{"cols":"12","md":"5"}},[_c('div',{staticClass:"px-md-16 px-6 d-flex align-center justify-center",staticStyle:{"width":"100%","height":"100%"}},[_c('div',{staticClass:"d-flex flex-column align-center justify-center",staticStyle:{"width":"100%","height":"100%"}},[_c('div',{staticClass:"mb-auto mt-auto"},[_c('v-img',{staticClass:"mt-16",attrs:{"width":("" + (_vm.$vuetify.breakpoint.xl ? '650' : (_vm.$vuetify.breakpoint.md ? '350' : '550'))),"cover":"","src":"/img/shells/bivalve.png"}})],1)])])]):_vm._e(),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"7"}},[_c('div',{staticStyle:{"position":"relative","z-index":"40 !important"}},[_c('div',{staticClass:"pl-lg-16",class:_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm ? 'faded-bg-fix' : 'faded-bg-white-right',staticStyle:{"padding-top":"220px"}},[_c('div',{staticClass:"px-md-16 px-6 electric_blue--text d-flex flex-column align-left justify-center",staticStyle:{"width":"100%","height":"100%"}},[_c('div',{staticClass:"pl-lg-3 mb-auto mt-10"},[_c('div',{staticClass:"font-weight-black text-xs-text-h4 text-h3 text-lg-h1",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.speciesList(1)}}},[_vm._v("bi."),_c('span',{staticClass:"stroke-1 stroke-transparent-eblue"},[_vm._v("valve")])]),_vm._v(" "),_c('div',{staticClass:"text-h6 font-weight-bold font-italic"},[_vm._v("noun")]),_vm._v(" "),_c('div',{staticClass:"pr-16"},_vm._l((_vm.bivalveItems.data),function(item,i){return _c('ul',{staticClass:"custom-ul text-right electric_blue--text"},[_c('li',[_c('a',{on:{"click":function($event){return _vm.speciesView(item.id)}}},[_vm._v(_vm._s(item.common_name))])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"pl-lg-3 mt-auto mb-10"},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"8"}},[_c('div',{staticClass:"text-body-1 text-xl-h6 font-italic kollektif",class:("" + (_vm.$vuetify.breakpoint.xs ? 'white--text' : 'electric_blue--text'))},[_vm._v("\n                        an aquatic mollusk that has a compressed body enclosed within a\n                        hinged shell, such as oysters, clams, mussels, and scallops.\n                      ")])])],1)],1)])]),_vm._v(" "),_c('v-parallax',{class:(((_vm.$vuetify.breakpoint.xl) ? 'xl-parallax' : (_vm.$vuetify.breakpoint.lg ? 'lg-parallax' : (_vm.$vuetify.breakpoint.xs && 'xs-parallax'))) + " " + ((_vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm) ? 'bottom-rounded-sm' : 'bottom-right-rounded-lg')),staticStyle:{"padding-top":"220px"},attrs:{"height":_vm.parallaxHeight,"src":"/img/shells/landingpage/bivalve.png"}})],1)])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=e8cbd946&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(275);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCarousel/VCarousel.sass
var VCarousel = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
var VWindow = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var components_VBtn = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/index.js + 1 modules
var VProgressLinear = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/button-group/index.js
// Extensions

/* @vue/component */

/* harmony default export */ var button_group = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'button-group',

  provide() {
    return {
      btnToggle: this
    };
  },

  computed: {
    classes() {
      return VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this);
    }

  },
  methods: {
    // Isn't being passed down through types
    genData: VItemGroup["a" /* BaseItemGroup */].options.methods.genData
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
// Styles
 // Extensions

 // Components



 // Mixins
// TODO: Move this into core components v2.0

 // Utilities



/* harmony default export */ var VCarousel_VCarousel = (VWindow["a" /* default */].extend({
  name: 'v-carousel',
  props: {
    continuous: {
      type: Boolean,
      default: true
    },
    cycle: Boolean,
    delimiterIcon: {
      type: String,
      default: '$delimiter'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    progress: Boolean,
    progressColor: String,
    showArrows: {
      type: Boolean,
      default: true
    },
    verticalDelimiters: {
      type: String,
      default: undefined
    }
  },

  data() {
    return {
      internalHeight: this.height,
      slideTimeout: undefined
    };
  },

  computed: {
    classes() {
      return { ...VWindow["a" /* default */].options.computed.classes.call(this),
        'v-carousel': true,
        'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
        'v-carousel--vertical-delimiters': this.isVertical
      };
    },

    isDark() {
      return this.dark || !this.light;
    },

    isVertical() {
      return this.verticalDelimiters != null;
    }

  },
  watch: {
    internalValue: 'restartTimeout',
    interval: 'restartTimeout',

    height(val, oldVal) {
      if (val === oldVal || !val) return;
      this.internalHeight = val;
    },

    cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = undefined;
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('hide-controls')) {
      Object(console["a" /* breaking */])('hide-controls', ':show-arrows="false"', this);
    }
  },

  mounted() {
    this.startTimeout();
  },

  methods: {
    genControlIcons() {
      if (this.isVertical) return null;
      return VWindow["a" /* default */].options.methods.genControlIcons.call(this);
    },

    genDelimiters() {
      return this.$createElement('div', {
        staticClass: 'v-carousel__controls',
        style: {
          left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
          right: this.verticalDelimiters === 'right' ? 0 : 'auto'
        }
      }, [this.genItems()]);
    },

    genItems() {
      const length = this.items.length;
      const children = [];

      for (let i = 0; i < length; i++) {
        const child = this.$createElement(components_VBtn["a" /* default */], {
          staticClass: 'v-carousel__controls__item',
          attrs: {
            'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
          },
          props: {
            icon: true,
            small: true,
            value: this.getValue(this.items[i], i)
          }
        }, [this.$createElement(VIcon["a" /* default */], {
          props: {
            size: 18
          }
        }, this.delimiterIcon)]);
        children.push(child);
      }

      return this.$createElement(button_group, {
        props: {
          value: this.internalValue,
          mandatory: this.mandatory
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, children);
    },

    genProgress() {
      return this.$createElement(VProgressLinear["a" /* default */], {
        staticClass: 'v-carousel__progress',
        props: {
          color: this.progressColor,
          value: (this.internalIndex + 1) / this.items.length * 100
        }
      });
    },

    restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = undefined;
      window.requestAnimationFrame(this.startTimeout);
    },

    startTimeout() {
      if (!this.cycle) return;
      this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
    }

  },

  render(h) {
    const render = VWindow["a" /* default */].options.render.call(this, h);
    render.data.style = `height: ${Object(helpers["g" /* convertToUnit */])(this.height)};`;
    /* istanbul ignore else */

    if (!this.hideDelimiters) {
      render.children.push(this.genDelimiters());
    }
    /* istanbul ignore else */


    if (this.progress || this.progressColor) {
      render.children.push(this.genProgress());
    }

    return render;
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
var VWindowItem = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
// Extensions
 // Components

 // Utilities



 // Types

const baseMixins = Object(mixins["a" /* default */])(VWindowItem["a" /* default */], routable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VCarouselItem = (baseMixins.extend({
  name: 'v-carousel-item',
  inheritAttrs: false,
  methods: {
    genDefaultSlot() {
      return [this.$createElement(VImg["a" /* default */], {
        staticClass: 'v-carousel__item',
        props: { ...this.$attrs,
          height: this.windowGroup.internalHeight
        },
        on: this.$listeners,
        scopedSlots: {
          placeholder: this.$scopedSlots.placeholder
        }
      }, Object(helpers["s" /* getSlot */])(this))];
    },

    genWindowItem() {
      const {
        tag,
        data
      } = this.generateRouteLink();
      data.staticClass = 'v-window-item';
      data.directives.push({
        name: 'show',
        value: this.isActive
      });
      return this.$createElement(tag, data, this.genDefaultSlot());
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VParallax/VParallax.sass
var VParallax = __webpack_require__(322);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/translatable/index.js

/* harmony default export */ var translatable = (external_vue_default.a.extend({
  name: 'translatable',
  props: {
    height: Number
  },
  data: () => ({
    elOffsetTop: 0,
    parallax: 0,
    parallaxDist: 0,
    percentScrolled: 0,
    scrollTop: 0,
    windowHeight: 0,
    windowBottom: 0
  }),
  computed: {
    imgHeight() {
      return this.objHeight();
    }

  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.translate, false);
    window.removeEventListener('resize', this.translate, false);
  },

  methods: {
    calcDimensions() {
      const offset = this.$el.getBoundingClientRect();
      this.scrollTop = window.pageYOffset;
      this.parallaxDist = this.imgHeight - this.height;
      this.elOffsetTop = offset.top + this.scrollTop;
      this.windowHeight = window.innerHeight;
      this.windowBottom = this.scrollTop + this.windowHeight;
    },

    listeners() {
      window.addEventListener('scroll', this.translate, false);
      window.addEventListener('resize', this.translate, false);
    },

    /** @abstract **/
    objHeight() {
      throw new Error('Not implemented !');
    },

    translate() {
      this.calcDimensions();
      this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight);
      this.parallax = Math.round(this.parallaxDist * this.percentScrolled);
    }

  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VParallax/VParallax.js
// Style
 // Mixins



const VParallax_baseMixins = Object(mixins["a" /* default */])(translatable);
/* @vue/component */

/* harmony default export */ var VParallax_VParallax = (VParallax_baseMixins.extend().extend({
  name: 'v-parallax',
  props: {
    alt: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 500
    },
    src: String,
    srcset: String
  },
  data: () => ({
    isBooted: false
  }),
  computed: {
    styles() {
      return {
        display: 'block',
        opacity: this.isBooted ? 1 : 0,
        transform: `translate(-50%, ${this.parallax}px)`
      };
    }

  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const img = this.$refs.img;
      if (!img) return;

      if (img.complete) {
        this.translate();
        this.listeners();
      } else {
        img.addEventListener('load', () => {
          this.translate();
          this.listeners();
        }, false);
      }

      this.isBooted = true;
    },

    objHeight() {
      return this.$refs.img.naturalHeight;
    }

  },

  render(h) {
    const imgData = {
      staticClass: 'v-parallax__image',
      style: this.styles,
      attrs: {
        src: this.src,
        srcset: this.srcset,
        alt: this.alt
      },
      ref: 'img'
    };
    const container = h('div', {
      staticClass: 'v-parallax__image-container'
    }, [h('img', imgData)]);
    const content = h('div', {
      staticClass: 'v-parallax__content'
    }, this.$slots.default);
    return h('div', {
      staticClass: 'v-parallax',
      style: {
        height: `${this.height}px`
      },
      on: this.$listeners
    }, [container, content]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(248);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(316)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(318)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  lib_vue_loader_options_pagesvue_type_template_id_e8cbd946_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "e8cbd946",
  "444238ef"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCarousel: VCarousel_VCarousel,VCarouselItem: VCarouselItem,VCol: VCol["a" /* default */],VImg: VImg["a" /* default */],VParallax: VParallax_VParallax,VRow: VRow["a" /* default */]})


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=index.js.map