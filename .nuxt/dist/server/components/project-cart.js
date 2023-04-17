exports.ids = [1];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7d6d5ab3", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCart_vue_vue_type_style_index_0_id_fff22700_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCart_vue_vue_type_style_index_0_id_fff22700_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCart_vue_vue_type_style_index_0_id_fff22700_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCart_vue_vue_type_style_index_0_id_fff22700_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCart_vue_vue_type_style_index_0_id_fff22700_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".project[data-v-fff22700]{width:100%;height:100px;background-color:#fff;border:1px solid #dbdbdb;padding:20px;margin-bottom:10px;display:flex}.project__first-part[data-v-fff22700]{width:33%;display:flex;justify-content:center;align-items:center}.project__first-part__logo[data-v-fff22700]{width:50px;height:50px}.project__first-part__name[data-v-fff22700]{margin-left:15px;font-weight:600;cursor:pointer}.project__second-part[data-v-fff22700]{width:33%;display:flex;justify-content:center;align-items:center;font-weight:600}.project__second-part__active-status[data-v-fff22700]{color:green}.project__second-part__inactive-status[data-v-fff22700]{color:red}.project__third-part[data-v-fff22700]{width:33%;display:flex;justify-content:center;align-items:center}.project__third-part__times[data-v-fff22700]{margin-left:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCart.vue?vue&type=template&id=fff22700&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project"},[_vm._ssrNode("<div class=\"project__first-part\" data-v-fff22700><img"+(_vm._ssrAttr("src",_vm.projectData.logo_url))+" alt=\"project-logo\" class=\"project__first-part__logo\" data-v-fff22700> <div class=\"project__first-part__name\" data-v-fff22700>"+_vm._ssrEscape("\n      "+_vm._s(_vm.projectData.name)+"\n    ")+"</div></div> <div class=\"project__second-part\" data-v-fff22700>"+((_vm.projectData.is_active)?("<div class=\"project__second-part__active-status\" data-v-fff22700>\n      Active\n    </div>"):("<div class=\"project__second-part__inactive-status\" data-v-fff22700>\n      Inactive\n    </div>"))+"</div> <div class=\"project__third-part\" data-v-fff22700><div class=\"project__third-part__labels\" data-v-fff22700><div data-v-fff22700>time this week</div> <div data-v-fff22700>this month</div> <div data-v-fff22700>total</div></div> <div class=\"project__third-part__times\" data-v-fff22700><div data-v-fff22700>"+_vm._ssrEscape(_vm._s(_vm.convertHMS(_vm.projectData.spent_sec_all_time)))+"</div> <div data-v-fff22700>"+_vm._ssrEscape(_vm._s(_vm.convertHMS(_vm.projectData.spent_sec_all_time)))+"</div> <div data-v-fff22700>"+_vm._ssrEscape(_vm._s(_vm.convertHMS(_vm.projectData.spent_sec_all_time)))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProjectCart.vue?vue&type=template&id=fff22700&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProjectCartvue_type_script_lang_js_ = ({
  name: "ProjectCart",
  props: {
    projectData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    convertHMS(value) {
      const sec = parseInt(value, 10);
      let hours = Math.floor(sec / 3600);
      let minutes = Math.floor((sec - hours * 3600) / 60);
      let seconds = sec - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return hours + ':' + minutes + ':' + seconds;
    }

  }
});
// CONCATENATED MODULE: ./components/ProjectCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectCartvue_type_script_lang_js_ = (ProjectCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fff22700",
  "23fce464"
  
)

/* harmony default export */ var ProjectCart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-cart.js.map