exports.ids = [5];
exports.modules = {

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/azure.vue?vue&type=template&id=58300b4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[(_vm.isLoading)?_c('div',{staticClass:"text-h5 text-center"},[_vm._v("Loading...")]):_c('div',[(_vm.isApproved)?_c('div',{staticClass:"text-h5 text-center"},[_vm._v("Logging in. Please wait...")]):_c('div',[_c('v-card',{attrs:{"outlined":""}},[_c('v-card-title',[(_vm.isRequested)?_c('span',[_vm._v("You already requested an access. Please wait for admin to approve")]):_c('span',[_vm._v("Your account doesn't have access to this app")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"label":"E-mail","type":"text","disabled":""},model:{value:(_vm.azureForm.email),callback:function ($$v) {_vm.$set(_vm.azureForm, "email", $$v)},expression:"azureForm.email"}})],1),_vm._v(" "),_c('v-card-actions',[_c('div',{staticClass:"d-flex flex-column",staticStyle:{"width":"100%"}},[_c('div',[_c('v-btn',{attrs:{"color":"primary","disabled":_vm.isRequested},on:{"click":_vm.requestAccess}},[_vm._v("Request Access")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"error","outlined":""},on:{"click":_vm.logout}},[_vm._v("Signout Microsoft")])],1),_vm._v(" "),_c('a',{staticClass:"text-caption mt-2",attrs:{"href":"javascript:location.reload();"}},[_vm._v("Admin approved your request? Click here to refresh this page.")])])])],1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/azure.vue?vue&type=template&id=58300b4c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/azure.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var azurevue_type_script_lang_js_ = ({
  layout: 'guest',

  data() {
    return {
      azureForm: {},
      isRequested: false,
      isApproved: false,
      isLoading: true
    };
  },

  created() {
    this.initialize();
  },

  computed: {
    account: function () {
      if (false) {}
    }
  },
  methods: {
    async initialize() {
      if (this.$auth.user) this.$router.push("/"); // return to home page
      else {
          const account = this.account;
          const email = account ? account.userName : null;
          const aud = account ? account.idToken.aud : null;
          this.azureForm = Object.assign({}, {
            email: email,
            aud: aud
          });
          const res = await this.$axios.post(this.$baseurl('login/azure/check'), this.azureForm);

          if (res.status === 200) {
            this.isLoading = false;
            if (Object.keys(res.data).length === 0) this.isRequested = false;else {
              this.isRequested = true;

              if (res.data.is_approved) {
                this.isApproved = true;
                this.backendLogin(this.azureForm);
              } else this.isApproved = false;
            }
          } else this.$router.push("/login"); // go to login page

        }
    },

    async requestAccess() {
      const url = 'http://localhost:91/api/login/azure';
      window.open(url); // open to new window

      window.close(); // close current window
    },

    logout() {
      if (false) {}
    },

    async backendLogin(azureForm) {
      this.$store.commit('SET_LOADING', true);

      try {
        await this.$auth.loginWith('password_grant', {
          data: {
            username: azureForm.email,
            password: null,
            isAzureLogin: true
          }
        });
        this.$snackbar({
          icon: 'mdi-checkbox-marked-circle.green',
          text: 'You are logged in'
        });
      } catch (e) {
        this.$snackbar({
          icon: 'mdi-close-circle.red',
          text: 'Invalid credentials'
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/azure.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_azurevue_type_script_lang_js_ = (azurevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 2 modules
var VTextField = __webpack_require__(70);

// CONCATENATED MODULE: ./pages/azure.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_azurevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "191a0c2c"
  
)

/* harmony default export */ var azure = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["b" /* VCardText */],VCardTitle: components_VCard["c" /* VCardTitle */],VContainer: VContainer["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=azure.js.map