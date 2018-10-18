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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createElement = __webpack_require__(/*! ./src/createElement */ "../src/createElement.js");
const removeTooltip = __webpack_require__(/*! ./src/removeTooltip */ "../src/removeTooltip.js");
const injectElement = __webpack_require__(/*! ./src/injectElement */ "../src/injectElement.js");

/**
 * global class for creating tooltip
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {void}
 */
class Tooltip {
  constructor(element, message, config) {
    this.element = element;
    this.message = message;
    this.config = Object.assign({
      minWidth: 'min-width: 136px',
      minHeight: '30px',
      position: 'position: absolute',
      zIndex: 'z-index: 10',
      padding: 'padding: 10px',
      borderRadius: 'border-radius: 10px',
      background: 'background: white', 
      color: 'color: black',
      fontSize: 'font-size: 11px',
      lineHeight: 'line-height: 16px',
      textAlign: 'text-align: center',
      fontFamily: 'font-family: Montserrat, arial'
    }, config);
  }

  /**
   * Rendering tooltip
   *
   * @returns {void}
   */
  render() {
    let tooltip = createElement(this.element, this.message, this.config);
    injectElement(tooltip);
    removeTooltip(tooltip);
  }

}

module.exports = Tooltip;


/***/ }),

/***/ "../src/createElement.js":
/*!*******************************!*\
  !*** ../src/createElement.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isElementFixed = __webpack_require__(/*! ./isElementFixed */ "../src/isElementFixed.js");
const getStyleProperty = __webpack_require__(/*! ./getStyleProperty */ "../src/getStyleProperty.js");
const getOffsetProperty = __webpack_require__(/*! ./getOffsetProperty */ "../src/getOffsetProperty.js");
const setStyles = __webpack_require__(/*! ./setStyles */ "../src/setStyles.js");

/**
 * Creating tooltip function
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {HTMLElement}
 */
function createElement(element, message, config) {
  const isFixed = isElementFixed(element);
  const minWidth = 136;
  const tooltip = document.createElement('div');
  const width = getStyleProperty(element, 'width');
  const height = getStyleProperty(element, 'height');
  let top = getOffsetProperty(element, 'top', isFixed);
  let left = getOffsetProperty(element, 'left', isFixed);
  
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = message;
  
  if (width < minWidth) {
    left = left - (minWidth - width) / 2;
  }
  if (isFixed) {
    tooltip.classList.add('tooltip--fixed');
  }

  config.width = 'width: ' + width + 'px';
  config.top = 'top: ' + (top + height + 7) + 'px';
  config.left = 'left: ' + left + 'px';

  setStyles(tooltip, config);

  return tooltip;
}


module.exports = createElement;

/***/ }),

/***/ "../src/getOffsetProperty.js":
/*!***********************************!*\
  !*** ../src/getOffsetProperty.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Getting offset value by property name
 * @param {HTMLElement} element
 * @param {String} property
 *
 * @returns {Number}
 */
function getOffsetProperty(element, property, isFixed) {
  let offset = element.getBoundingClientRect()[property];
  if (!isFixed) {
    let bodyOffset = document.body.getBoundingClientRect()[property];
    offset -= bodyOffset;
  }

  return offset;
}

module.exports = getOffsetProperty;

/***/ }),

/***/ "../src/getStyleProperty.js":
/*!**********************************!*\
  !*** ../src/getStyleProperty.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Getting style value by property name
 * @param {HTMLElement} element
 * @param {String} property
 *
 * @returns {Number}
 */
function getStyleProperty(element, property) {
  const style = window.getComputedStyle(element);
  const result = style.getPropertyValue(property);
  return Number.parseInt(result);
}

module.exports = getStyleProperty;

/***/ }),

/***/ "../src/injectElement.js":
/*!*******************************!*\
  !*** ../src/injectElement.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Injecting tooltip to the bottom of body
 * @param {HTMLElement} tooltip
 *
 * @returns {void}
 */
function injectElement(tooltip) {
  document.body.insertAdjacentElement('beforeEnd', tooltip);
}

module.exports = injectElement;

/***/ }),

/***/ "../src/isElementFixed.js":
/*!********************************!*\
  !*** ../src/isElementFixed.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Detect is element fixed
 * @param {HTMLElement} element
 *
 * @returns {Boolean}
 */

function isElementFixed(element) {
  let isFixed;
  function recurcive(element) {
    let style = window.getComputedStyle(element);
    let position = style.getPropertyValue('position');
    isFixed = position === 'fixed';
    if (position === 'fixed') {
      return true;
    } else {
      if (!element.offsetParent) {
        return false;
      } else {
        return recurcive(element.offsetParent);
      }
    }
  }

  const promise = new Promise(resolve => {
    resolve(recurcive(element));
  });
  promise.then(resolve => {
    return resolve;
  });

  return isFixed;
}

module.exports = isElementFixed;

/***/ }),

/***/ "../src/removeTooltip.js":
/*!*******************************!*\
  !*** ../src/removeTooltip.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Implementihg close tooltip logic
 * @param {HTMLElement} tooltip
 * @param {HTMLElement} element
 *
 * @returns {void}
 */
function removeTooltip(tooltip) {
  let time = setTimeout(removeElement, 5000);
  let clickTimer = setTimeout(addClick, 50);
  function addClick() {
    window.addEventListener('click', checkClosest);
    clearTimeout(clickTimer);
  }

  function checkClosest(event) {
    let target = event.toElement;
    if (target !== tooltip) {
      removeElement();
    }
  }

  function removeElement() {
    tooltip.remove();
    window.removeEventListener('click', checkClosest);
    clearTimeout(time);
  }
}

module.exports = removeTooltip;

/***/ }),

/***/ "../src/setStyles.js":
/*!***************************!*\
  !*** ../src/setStyles.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function setStyles(tooltip, config) {
  let style = '';

  for (let property in config) {
    if (config.hasOwnProperty(property)) {
      style += config[property] + '; ';
    }
  }

  tooltip.style = style;

}

module.exports = setStyles;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Tooltip = __webpack_require__(/*! ../index */ "../index.js");

(() => {
  const button = document.getElementsByClassName('js-button')[0];

  button.addEventListener('click', () => {
    const tooltip = new Tooltip(button, 'hi dude');
    console.log(tooltip);
    tooltip.render();
  });

})();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map