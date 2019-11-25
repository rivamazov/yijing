/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n\\tmargin: 0;\\n}\\n\\n.dark-mode {\\n\\tbackground: black;\\n\\tcolor: white;\\n}\\n\\n.wrapper {\\n\\tdisplay: flex;\\n    flex-direction: column;    \\n    justify-content: flex-start;\\n\\talign-items: center;\\n\\theight: 100%;\\n}\\n\\n.logo {\\n\\tmin-height: 50px;\\n\\tmargin: 10px;\\n\\tfont-size:2em;\\n}\\n\\n#result {\\n\\tmin-height:22px;\\n\\ttext-align: center;\\n}\\n\\n#reset {\\n\\tdisplay: flex;\\n\\tbackground: 0;\\n\\tcolor: white;\\n\\tjustify-content: flex-end;\\n\\talign-items: center;\\n\\tpadding: 10px;\\n\\topacity: 0;\\n\\ttransition: opacity 2s;\\n}\\n\\n#reset.fade {\\n\\topacity: 1;\\n}\\n\\n.hex-viewer {\\n\\tdisplay: flex;\\n\\tmin-height: 155px;\\n\\twidth: 200px;\\n\\tflex-direction: column;\\n\\tjustify-content: flex-end;\\n}\\n\\n#hexagram {\\n\\topacity: 0;\\n\\ttransition: opacity 2s;\\n}\\n\\n#hexagram.fade {\\n\\topacity: 1;\\n}\\n\\n#secondary {\\n\\topacity: 0;\\n\\ttransition: opacity 2s;\\n}\\n\\n#secondary.fade {\\n\\topacity: 1;\\n}\\n\\n.cast {\\n\\theight: 100%;\\n\\twidth: 100%;\\n}\\n\\n.yang {\\n\\twidth: 200px;\\n\\theight: 20px;\\n\\tbackground: #e7e42a;\\n\\tmargin: 5 0 5 0;\\n}\\n\\n.yin {\\n\\twidth: 85px;\\n\\theight: 20px;\\n\\tbackground:  #e7e42a;\\n\\tborder: 5px;\\n\\tposition:relative;\\n\\tmargin: 5 0 5 0;\\n}\\n\\n.yin:after {\\n\\tcontent: \\\"\\\";\\n\\tposition: absolute;\\n\\tleft: 115px;\\n\\twidth: 85px;\\n\\theight: 20px;\\n\\tbackground:  #e7e42a;\\n}\\n\\n/* this allows yin psuedo element to change colors */\\n.yin.changing:after {\\n\\tbackground: orange;\\n}\\n\\n.changing {\\n\\tbackground: orange;\\n}\\n\\n\\n#yinYang{\\n\\tmargin: auto;\\n    height: 250px;\\n    position: relative;\\n    width: 250px;\\n}\\n\\n#yinYang div{\\n    background: #FFF;\\n    border-radius: 50%;\\n    bottom: 0;\\n    left: 0;\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n}\\n\\n#yinYang div div:first-child{\\n    background: #000;\\n    border-radius: 0 999px 999px 0;\\n    left: 50%;\\n    position: absolute;\\n}\\n\\n#yinYang div div:nth-child(2){\\n    bottom: 50%;\\n    left: 25%;\\n    right: 25%;\\n}\\n\\n#yinYang div div:last-child{\\n    background: #000;\\n    left: 25%;\\n    right: 25%;\\n    top: 50%;\\n}\\n\\n#yinYang div div:nth-child(2) div{\\n    border-radius: 50%;\\n    bottom: 35%;\\n    left: 35%;\\n    right: 35%;\\n    top: 35%;\\n}\\n\\n#yinYang div div:last-child div{\\n    background: #FFF;\\n    border-radius: 50%;\\n    bottom: 35%;\\n    left: 35%;\\n    right: 35%;\\n    top: 35%;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Draw() {\n  var linesAsDecimal = function linesAsDecimal(hexArray) {\n    return \"<div>\".concat(hexArray, \"</div>\");\n  }; // returns css representation of hex lines separated by divs\n\n\n  var linesAsCss = function linesAsCss(hexArray) {\n    var retStr = \"\";\n\n    for (var i = hexArray.length - 1; i >= 0; i--) {\n      retStr += hexLineAsCss(hexArray[i]);\n    }\n\n    return retStr;\n  }; // returns line number as css\n\n\n  var hexLineAsCss = function hexLineAsCss(line) {\n    return \"<div class=\\\"\".concat(getLineClass(line), \"\\\"></div>\");\n  }; // takes a hexagram decimal integer and returns\n  // a css class that draws a shape\n\n\n  var getLineClass = function getLineClass(line) {\n    switch (line) {\n      case 8:\n        return \"yin\";\n\n      case 7:\n        return 'yang';\n\n      case 6:\n        return 'yin changing';\n\n      case 9:\n        return \"yang changing\";\n    }\n  };\n\n  return {\n    linesAsDecimal: linesAsDecimal,\n    linesAsCss: linesAsCss\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Draw);\n\n//# sourceURL=webpack:///./src/draw.js?");

/***/ }),

/***/ "./src/hexagram.js":
/*!*************************!*\
  !*** ./src/hexagram.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction Hex() {\n  var hexLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var linesArr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9];\n\n  var addLine = function addLine(hexArray) {\n    if (isComplete(hexArray)) {\n      return hexArray;\n    }\n\n    return [].concat(_toConsumableArray(hexArray), [randomLine()]);\n  };\n\n  var randomLine = function randomLine(hexArray) {\n    var count = linesArr.length;\n\n    while (count > 0) {\n      var i = Math.floor(Math.random() * count);\n      count--;\n      var tmp = linesArr[count];\n      linesArr[count] = linesArr[i];\n      linesArr[i] = tmp;\n    }\n\n    return linesArr[0];\n  };\n\n  var isComplete = function isComplete(hexArray) {\n    if (hexArray.length == 6) return true;else return false;\n  };\n\n  var primary = function primary(hexArray) {\n    return hexArray.map(function (x) {\n      if (x == 6) return x += 2;\n      if (x == 9) return x -= 2;\n      return x;\n    });\n  };\n\n  var secondary = function secondary(hexArray) {\n    return hexArray.map(function (x) {\n      if (x == 6) return x += 1;\n      if (x == 9) return x -= 1;\n      return x;\n    });\n  };\n\n  var lookup = function lookup(hexArray) {\n    var strArray = hexArray.toString().replace(/,/g, '');\n    if (hexArray.length == 0) return '';else {\n      for (var hex in HEXAGRAMS) {\n        if (HEXAGRAMS[hex] == strArray) {\n          return hex;\n        }\n      }\n    }\n  };\n\n  var HEXAGRAMS = {\n    1: '777777',\n    2: '888888',\n    3: '788878',\n    4: '878887',\n    5: '777878',\n    6: '878777',\n    7: '878888',\n    8: '888878',\n    9: '777877',\n    10: '778777',\n    11: '777888',\n    12: '888777',\n    13: '787777',\n    14: '777787',\n    15: '887888',\n    16: '888788',\n    17: '788778',\n    18: '877887',\n    19: '778888',\n    20: '888877',\n    21: '788787',\n    22: '787887',\n    23: '888887',\n    24: '788888',\n    25: '788777',\n    26: '777887',\n    27: '788887',\n    28: '877778',\n    29: '878878',\n    30: '787787',\n    31: '887778',\n    32: '877788',\n    33: '887777',\n    34: '777788',\n    35: '888787',\n    36: '787888',\n    37: '787877',\n    38: '778787',\n    39: '887878',\n    40: '878788',\n    41: '778887',\n    42: '788877',\n    43: '777778',\n    44: '877777',\n    45: '888778',\n    46: '877888',\n    47: '878778',\n    48: '877878',\n    49: '787778',\n    50: '877787',\n    51: '788788',\n    52: '887887',\n    53: '887877',\n    54: '778788',\n    55: '787788',\n    56: '887787',\n    57: '877877',\n    58: '778778',\n    59: '878877',\n    60: '778878',\n    61: '778877',\n    62: '887788',\n    63: '787878',\n    64: '878787'\n  };\n  return {\n    addLine: addLine,\n    isComplete: isComplete,\n    primary: primary,\n    secondary: secondary,\n    lookup: lookup\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hex);\n\n//# sourceURL=webpack:///./src/hexagram.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _hexagram_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hexagram.js */ \"./src/hexagram.js\");\n/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ \"./src/draw.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar hex = Object(_hexagram_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar draw = Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar hexarr = [];\nvar result;\nvar secondary;\nvar link;\nvar link2; // takes in an integer array of hexagram codes that the Hex library will operate on\n\nfunction update(arr) {\n  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  document.querySelector('#hexagram').innerHTML = draw.linesAsCss(arr);\n\n  if (hex.isComplete(arr) || reset == true) {\n    document.getElementById('reset').classList.add('fade');\n    result = hex.lookup(hex.primary(arr));\n    document.querySelector('#result').innerHTML = result;\n    link = 'http://www.jamesdekorne.com/GBCh/hex' + result + '.htm';\n\n    if (result !== hex.lookup(hex.secondary(arr))) {\n      document.getElementById('secondary').classList.add('fade');\n      secondary = hex.lookup(hex.secondary(arr));\n      document.querySelector('#result').innerHTML = result + \" → \" + secondary;\n      document.querySelector('#secondary').innerHTML = draw.linesAsCss(hex.secondary(arr));\n      link2 = 'http://www.jamesdekorne.com/GBCh/hex' + secondary + '.htm';\n    }\n\n    if (reset == true) {\n      document.getElementById('secondary').classList.remove('fade');\n      document.getElementById('reset').classList.remove('fade');\n      document.getElementById('hexagram').classList.remove('fade');\n      hexarr = [];\n      document.getElementById('result').innerHTML = '';\n    }\n  }\n}\nwindow.addEventListener('load', function () {\n  var cast = document.querySelector('.cast');\n  var reset = document.getElementById('reset');\n  var hexagram = document.getElementById('hexagram');\n  var secondary = document.getElementById('secondary');\n\n  cast.onclick = function () {\n    hexarr = hex.addLine(hexarr);\n    document.getElementById('hexagram').classList.add('fade');\n    update(hexarr);\n  };\n\n  reset.onclick = function () {\n    update(hexarr, true);\n  };\n\n  hexagram.onclick = function () {\n    window.open(link);\n  };\n\n  secondary.onclick = function () {\n    window.open(link2);\n  };\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });