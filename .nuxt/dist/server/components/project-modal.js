exports.ids = [2];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ad928436", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectModal_vue_vue_type_style_index_0_id_fbe11b7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectModal_vue_vue_type_style_index_0_id_fbe11b7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectModal_vue_vue_type_style_index_0_id_fbe11b7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectModal_vue_vue_type_style_index_0_id_fbe11b7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectModal_vue_vue_type_style_index_0_id_fbe11b7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".project-modal[data-v-fbe11b7a]{position:absolute;top:0;width:100%;height:100vh;background-color:rgba(0,0,0,.631372549)}.project-modal .modal-content[data-v-fbe11b7a]{width:400px;background-color:#fff;border-radius:10px;margin:200px auto}.project-modal .modal-content__header[data-v-fbe11b7a]{font-size:22px;color:#655858;font-weight:600;padding:20px;border-bottom:1px solid #655858}.project-modal .modal-content__form[data-v-fbe11b7a]{padding:20px}.project-modal .modal-content__form__input[data-v-fbe11b7a]{width:92%;border:1px solid #dadada;border-radius:5px;outline:none;padding:15px;margin-top:10px}.project-modal .modal-content__form__buttons-area[data-v-fbe11b7a]{display:flex;justify-content:space-between;margin-top:20px}.project-modal .modal-content__form__buttons-area__button[data-v-fbe11b7a]{background:grey;color:#fff;width:40%;padding:15px 0;border:none;border-radius:5px;margin-top:20px;margin-bottom:20px;font-size:14px;font-weight:600;letter-spacing:1px;cursor:pointer}.project-modal .modal-content__form__buttons-area__button[data-v-fbe11b7a]:hover{background:#c0bcbc}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectModal.vue?vue&type=template&id=fbe11b7a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-modal"},[_vm._ssrNode("<div class=\"modal-content\" data-v-fbe11b7a><div class=\"modal-content__header\" data-v-fbe11b7a>\n      Edit Project\n    </div> <div class=\"modal-content__form\" data-v-fbe11b7a><input type=\"text\" placeholder=\"Project name\""+(_vm._ssrAttr("value",(_vm.projectName)))+" class=\"modal-content__form__input\" data-v-fbe11b7a> <div class=\"modal-content__form__buttons-area\" data-v-fbe11b7a><button class=\"modal-content__form__buttons-area__button\" data-v-fbe11b7a>\n          Cancel\n        </button> <button class=\"modal-content__form__buttons-area__button\" data-v-fbe11b7a>\n          Update\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProjectModal.vue?vue&type=template&id=fbe11b7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProjectModalvue_type_script_lang_js_ = ({
  name: "ProjectModal",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    projectName: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('input', val);
      }

    }
  }
});
// CONCATENATED MODULE: ./components/ProjectModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectModalvue_type_script_lang_js_ = (ProjectModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fbe11b7a",
  "4972a16f"
  
)

/* harmony default export */ var ProjectModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-modal.js.map