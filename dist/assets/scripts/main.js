/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/selectPercentage.js":
/*!*************************************************!*\
  !*** ./src/scripts/modules/selectPercentage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSelectPrecentage: () => (/* binding */ initSelectPrecentage)
/* harmony export */ });
function initSelectPrecentage() {
  var percetage = document.querySelector('.field-range__percent');
  var input = document.querySelector('.field-range__input');
  input.addEventListener('input', function () {
    percetage.innerHTML = "".concat(input.value, "%");
  });
}

/***/ }),

/***/ "./src/scripts/utils/classNames.js":
/*!*****************************************!*\
  !*** ./src/scripts/utils/classNames.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ classNames)
/* harmony export */ });
var classNames = {
  header: {
    block: 'header',
    blur: 'header_blur',
    hide: 'header_hide'
  },
  select: 'select'
};

/***/ }),

/***/ "./src/scripts/vendor/headerBehavior.js":
/*!**********************************************!*\
  !*** ./src/scripts/vendor/headerBehavior.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateHeaderOnScroll: () => (/* binding */ updateHeaderOnScroll)
/* harmony export */ });
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/classNames */ "./src/scripts/utils/classNames.js");

function updateHeaderOnScroll() {
  var headerClass = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.header;
  var headerElement = document.querySelector(".".concat(headerClass.block));
  var lastScrollY = window.scrollY;
  var updateHeader = function updateHeader() {
    var isScrolled = window.scrollY > 0;
    var isScrollingDown = window.scrollY > lastScrollY;
    headerElement.classList.toggle(headerClass.blur, isScrolled);
    headerElement.classList.toggle(headerClass.hide, isScrolled && isScrollingDown);
    lastScrollY = window.scrollY;
  };
  updateHeader();
  document.addEventListener("scroll", updateHeader);
}

/***/ }),

/***/ "./src/scripts/vendor/select/Select.js":
/*!*********************************************!*\
  !*** ./src/scripts/vendor/select/Select.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _SingleSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleSelect */ "./src/scripts/vendor/select/SingleSelect.js");
/* harmony import */ var _styles_vendor_select_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/vendor/select.scss */ "./src/styles/vendor/select.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Select = /*#__PURE__*/function () {
  function Select(selector) {
    _classCallCheck(this, Select);
    this.selects = document.querySelectorAll(selector);
    this.selectInstances = [];
    this.init();
  }
  _createClass(Select, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.selects.forEach(function (select) {
        _this.selectInstances.push(new _SingleSelect__WEBPACK_IMPORTED_MODULE_0__.SingleSelect(select));
      });
    }
  }]);
  return Select;
}();

/*
<div class="select" data-name="contact">
  <div data-value="">Предпочтительный способ связи</div>
  <div data-value="telegram">Telegram</div>
  <div data-value="whatsApp">WhatsApp</div>
  <div data-value="tel">Телефон</div>
  <div data-value="viber">Viber</div>
</div>
*/

/***/ }),

/***/ "./src/scripts/vendor/select/SingleSelect.js":
/*!***************************************************!*\
  !*** ./src/scripts/vendor/select/SingleSelect.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleSelect: () => (/* binding */ SingleSelect)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _initializeStructure = /*#__PURE__*/new WeakSet();
var _initializeOriginStructure = /*#__PURE__*/new WeakSet();
var SingleSelect = /*#__PURE__*/function () {
  function SingleSelect(selectElement) {
    var _this = this;
    _classCallCheck(this, SingleSelect);
    _classPrivateMethodInitSpec(this, _initializeOriginStructure);
    _classPrivateMethodInitSpec(this, _initializeStructure);
    this.originSelect = selectElement;
    this.select = null;
    this.customSelect = null;
    this.selectHead = null;
    this.selectBody = null;
    this.optionsCollection = [];
    this.currentHeadOption = null;
    _classPrivateMethodGet(this, _initializeStructure, _initializeStructure2).call(this);
    document.addEventListener('click', this.toggleSelect.bind(this));
    this.optionsCollection.forEach(function (option) {
      option.addEventListener('click', _this.changeOption.bind(_this, option));
    });
  }
  _createClass(SingleSelect, [{
    key: "toggleSelect",
    value: function toggleSelect(event) {
      if (!this.selectHead.contains(event.target)) {
        this.customSelect.classList.toggle('is-open', false);
        return;
      }
      this.customSelect.classList.toggle('is-open');
    }
  }, {
    key: "changeOption",
    value: function changeOption(currentOption) {
      if (this.selectHead.contains(currentOption)) return;
      this.optionsCollection.forEach(function (option) {
        option.classList.toggle('is-selected', option === currentOption);
      });
      var newHeadOption = currentOption.cloneNode(true);
      newHeadOption.classList.remove('select__option_body');
      newHeadOption.classList.add('select__option_head');
      if (this.currentHeadOption) {
        this.currentHeadOption.replaceWith(newHeadOption);
      } else {
        this.selectHead.append(newHeadOption);
      }
      this.currentHeadOption = newHeadOption;
      var selectedOption = _toConsumableArray(this.select.options).find(function (option) {
        return option.dataset.id === currentOption.dataset.id;
      }) || this.optionsCollection[0];
      selectedOption.selected = true;
    }
  }]);
  return SingleSelect;
}();
function _initializeStructure2() {
  var _this2 = this;
  this.customSelect = document.createElement('div');
  this.customSelect.className = this.originSelect.className;
  this.selectHead = document.createElement('div');
  this.selectHead.classList.add('select__head');
  this.selectBody = document.createElement('div');
  this.selectBody.classList.add('select__body');
  this.customSelect.append(this.selectHead);
  this.customSelect.append(this.selectBody);
  this.optionsCollection = _toConsumableArray(this.originSelect.children).filter(function (option) {
    return option.dataset.value;
  }).map(function (option, idx) {
    var newOption = option.cloneNode(true);
    newOption.classList.add('select__option', 'select__option_body');
    newOption.dataset.id = idx + 1;
    _this2.selectBody.append(newOption);
    return newOption;
  });
  _classPrivateMethodGet(this, _initializeOriginStructure, _initializeOriginStructure2).call(this);
  var placehlderOption = _toConsumableArray(this.originSelect.children).find(function (opt) {
    return !opt.dataset.value;
  }) || this.optionsCollection[0];
  this.changeOption(placehlderOption);
  this.originSelect.replaceWith(this.customSelect);
}
function _initializeOriginStructure2() {
  var select = document.createElement('select');
  select.setAttribute('name', this.originSelect.dataset.name || '');
  select.classList.add('visually-hidden');
  this.optionsCollection.forEach(function (rawOption) {
    var option = document.createElement('option');
    option.textContent = rawOption.textContent;
    option.dataset.id = rawOption.dataset.id;
    option.setAttribute('value', rawOption.dataset.value);
    select.append(option);
  });
  this.select = select;
  this.customSelect.prepend(select);
}

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/vendor/select.scss":
/*!***************************************!*\
  !*** ./src/styles/vendor/select.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _vendor_headerBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/headerBehavior */ "./src/scripts/vendor/headerBehavior.js");
/* harmony import */ var _vendor_select_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/select/Select */ "./src/scripts/vendor/select/Select.js");
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/classNames */ "./src/scripts/utils/classNames.js");
/* harmony import */ var _modules_selectPercentage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/selectPercentage */ "./src/scripts/modules/selectPercentage.js");





(0,_vendor_headerBehavior__WEBPACK_IMPORTED_MODULE_1__.updateHeaderOnScroll)();
(0,_modules_selectPercentage__WEBPACK_IMPORTED_MODULE_4__.initSelectPrecentage)();
new _vendor_select_Select__WEBPACK_IMPORTED_MODULE_2__.Select(".".concat(_utils_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames.select)); // eslint-disable-line
})();

/******/ })()
;
//# sourceMappingURL=main.js.map