exports.ids = [12];
exports.modules = {

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5f757930", content, true)

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{-webkit-animation:loading 1.5s infinite;animation:loading 1.5s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;padding:0 12px;margin:0 auto}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;margin:4px;height:40px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{height:200px;border-radius:0}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image::first-child,.v-skeleton-loader__image::last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3){max-width:70%}.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@-webkit-keyframes loading{to{transform:translateX(100%)}}@keyframes loading{to{transform:translateX(100%)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSkeletonLoader_VSkeletonLoader_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _src_components_VSkeletonLoader_VSkeletonLoader_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSkeletonLoader_VSkeletonLoader_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_elevatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
// Styles
 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_elevatable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).extend({
  name: 'VSkeletonLoader',
  props: {
    boilerplate: Boolean,
    loading: Boolean,
    tile: Boolean,
    transition: String,
    type: String,
    types: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    attrs() {
      if (!this.isLoading) return this.$attrs;
      return !this.boilerplate ? {
        'aria-busy': true,
        'aria-live': 'polite',
        role: 'alert',
        ...this.$attrs
      } : {};
    },

    classes() {
      return {
        'v-skeleton-loader--boilerplate': this.boilerplate,
        'v-skeleton-loader--is-loading': this.isLoading,
        'v-skeleton-loader--tile': this.tile,
        ...this.themeClasses,
        ...this.elevationClasses
      };
    },

    isLoading() {
      return !('default' in this.$scopedSlots) || this.loading;
    },

    rootTypes() {
      return {
        actions: 'button@2',
        article: 'heading, paragraph',
        avatar: 'avatar',
        button: 'button',
        card: 'image, card-heading',
        'card-avatar': 'image, list-item-avatar',
        'card-heading': 'heading',
        chip: 'chip',
        'date-picker': 'list-item, card-heading, divider, date-picker-options, date-picker-days, actions',
        'date-picker-options': 'text, avatar@2',
        'date-picker-days': 'avatar@28',
        heading: 'heading',
        image: 'image',
        'list-item': 'text',
        'list-item-avatar': 'avatar, text',
        'list-item-two-line': 'sentences',
        'list-item-avatar-two-line': 'avatar, sentences',
        'list-item-three-line': 'paragraph',
        'list-item-avatar-three-line': 'avatar, paragraph',
        paragraph: 'text@3',
        sentences: 'text@2',
        table: 'table-heading, table-thead, table-tbody, table-tfoot',
        'table-heading': 'heading, text',
        'table-thead': 'heading@6',
        'table-tbody': 'table-row-divider@6',
        'table-row-divider': 'table-row, divider',
        'table-row': 'table-cell@6',
        'table-cell': 'text',
        'table-tfoot': 'text@2, avatar@2',
        text: 'text',
        ...this.types
      };
    }

  },
  methods: {
    genBone(text, children) {
      return this.$createElement('div', {
        staticClass: `v-skeleton-loader__${text} v-skeleton-loader__bone`
      }, children);
    },

    genBones(bone) {
      // e.g. 'text@3'
      const [type, length] = bone.split('@');

      const generator = () => this.genStructure(type); // Generate a length array based upon
      // value after @ in the bone string


      return Array.from({
        length
      }).map(generator);
    },

    // Fix type when this is merged
    // https://github.com/microsoft/TypeScript/pull/33050
    genStructure(type) {
      let children = [];
      type = type || this.type || '';
      const bone = this.rootTypes[type] || ''; // End of recursion, do nothing

      /* eslint-disable-next-line no-empty, brace-style */

      if (type === bone) {} // Array of values - e.g. 'heading, paragraph, text@2'
      else if (type.indexOf(',') > -1) return this.mapBones(type); // Array of values - e.g. 'paragraph@4'
        else if (type.indexOf('@') > -1) return this.genBones(type); // Array of values - e.g. 'card@2'
          else if (bone.indexOf(',') > -1) children = this.mapBones(bone); // Array of values - e.g. 'list-item@2'
            else if (bone.indexOf('@') > -1) children = this.genBones(bone); // Single value - e.g. 'card-heading'
              else if (bone) children.push(this.genStructure(bone));

      return [this.genBone(type, children)];
    },

    genSkeleton() {
      const children = [];
      if (!this.isLoading) children.push(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "s"])(this));else children.push(this.genStructure());
      /* istanbul ignore else */

      if (!this.transition) return children;
      /* istanbul ignore next */

      return this.$createElement('transition', {
        props: {
          name: this.transition
        },
        // Only show transition when
        // content has been loaded
        on: {
          afterEnter: this.resetStyles,
          beforeEnter: this.onBeforeEnter,
          beforeLeave: this.onBeforeLeave,
          leaveCancelled: this.resetStyles
        }
      }, children);
    },

    mapBones(bones) {
      // Remove spaces and return array of structures
      return bones.replace(/\s/g, '').split(',').map(this.genStructure);
    },

    onBeforeEnter(el) {
      this.resetStyles(el);
      if (!this.isLoading) return;
      el._initialStyle = {
        display: el.style.display,
        transition: el.style.transition
      };
      el.style.setProperty('transition', 'none', 'important');
    },

    onBeforeLeave(el) {
      el.style.setProperty('display', 'none', 'important');
    },

    resetStyles(el) {
      if (!el._initialStyle) return;
      el.style.display = el._initialStyle.display || '';
      el.style.transition = el._initialStyle.transition;
      delete el._initialStyle;
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-skeleton-loader',
      attrs: this.attrs,
      on: this.$listeners,
      class: this.classes,
      style: this.isLoading ? this.measurableStyles : undefined
    }, [this.genSkeleton()]);
  }

}));

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=template&id=4e8b418e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"grid-list-md":"","text-xs-center":""}},[_c('v-row',[_c('v-col',{attrs:{"sm":"12","md":"6"}},[_c('UserCards',{attrs:{"users":_vm.list}}),_vm._v(" "),_c('infinite-loading',{on:{"infinite":_vm.infiniteHandler}},[_c('div',{attrs:{"slot":"spinner"},slot:"spinner"},[_c('v-skeleton-loader',{attrs:{"type":"list-item-avatar-three-line"}})],1),_vm._v(" "),_c('div',{attrs:{"slot":"no-more"},slot:"no-more"},[_c('v-card',[_c('v-card-text',[_c('v-btn',{attrs:{"fab":"","x-small":""}},[_c('v-icon',[_vm._v("mdi-plus")])],1)],1)],1)],1)])],1),_vm._v(" "),_c('v-col',{attrs:{"sm":"12","md":"6"}},[_c('v-card',[_c('v-navigation-drawer',{attrs:{"permanent":""}},[_c('v-list',[_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"title"},[_vm._v("Designation")])],1)],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list',{attrs:{"nav":"","dense":""}},[_c('v-list-item-group',{attrs:{"color":"primary"},model:{value:(_vm.item),callback:function ($$v) {_vm.item=$$v},expression:"item"}},_vm._l((_vm.items),function(item,i){return _c('v-list-item',{key:i},[_c('v-list-item-icon',[_c('v-icon',{domProps:{"textContent":_vm._s(item.icon)}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.text)}})],1)],1)}),1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=template&id=4e8b418e&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(15);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(20);

// EXTERNAL MODULE: external "vue-infinite-loading"
var external_vue_infinite_loading_ = __webpack_require__(234);
var external_vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(external_vue_infinite_loading_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  middleware: ['auth'],
  head: {
    title: 'Users'
  },
  components: {
    InfiniteLoading: external_vue_infinite_loading_default.a,
    UserCards: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 346))
  },
  data: () => ({
    lastPage: false,
    page: 1,
    limit: 1,
    list: [],
    item: 0,
    items: [{
      text: 'My Files',
      icon: 'mdi-folder'
    }, {
      text: 'Shared with me',
      icon: 'mdi-account-multiple'
    }, {
      text: 'Starred',
      icon: 'mdi-star'
    }, {
      text: 'Recent',
      icon: 'mdi-history'
    }, {
      text: 'Offline',
      icon: 'mdi-check-circle'
    }, {
      text: 'Uploads',
      icon: 'mdi-upload'
    }, {
      text: 'Backups',
      icon: 'mdi-cloud-upload'
    }]
  }),
  computed: { ...Object(external_vuex_["mapState"])({
      loading: state => state.loading
    })
  },
  methods: {
    async infiniteHandler($state) {
      if (!this.lastPage) {
        try {
          const res = await this.$axios(this.$baseurl('users'));
          const append = res.data.slice(this.list.length, this.list.length + this.limit);
          this.list = this.list.concat(append);
          this.lastPage = append.length > 0 ? false : true;
          $state.loaded();
        } catch (err) {
          $state.complete();
        }
      } else {
        $state.complete();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
var VNavigationDrawer = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(301);

// CONCATENATED MODULE: ./pages/users/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "590dcc5b"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */

















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["b" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemIcon: VListItemIcon["a" /* default */],VListItemTitle: components_VList["c" /* VListItemTitle */],VNavigationDrawer: VNavigationDrawer["a" /* default */],VRow: VRow["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map