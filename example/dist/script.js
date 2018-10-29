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
/******/ 	__webpack_require__.p = "/";
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

const createTooltip = __webpack_require__(/*! ./src/createTooltip */ "../src/createTooltip.js");
const removeTooltip = __webpack_require__(/*! ./src/removeTooltip */ "../src/removeTooltip.js");
const insertElement = __webpack_require__(/*! ./src/helpers/insertElement */ "../src/helpers/insertElement.js");
const getDefaultConfig = __webpack_require__(/*! ./src/helpers/getDefaultConfig */ "../src/helpers/getDefaultConfig.js");
const objectAssign = __webpack_require__(/*! ./src/helpers/objectAssignPolyfill */ "../src/helpers/objectAssignPolyfill.js");

objectAssign.polyfill();

/**
 * global class for creating tooltip
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {void}
 */
class Tooltip {
  constructor(element, config) {
    const defaultConfig = getDefaultConfig();
    this.element = element;
    this.message = config.message;
    this.config = Object.assign({}, defaultConfig, config);
    this.config.style = Object.assign({}, defaultConfig.style, config.style);
    this.config.arrowStyle = Object.assign({}, defaultConfig.arrowStyle, config.arrowStyle);
    if (config.where) {
      this.config.where = config.where;
    }
  }

  /**
   * Rendering tooltip
   *
   * @returns {void}
   */
  render() {
    let tooltip = createTooltip(this.element, this.message, this.config);
    this.content = tooltip;
    insertElement(document.body, tooltip);
    removeTooltip(tooltip);
  }

}

module.exports = Tooltip;


/***/ }),

/***/ "../src/createTooltip.js":
/*!*******************************!*\
  !*** ../src/createTooltip.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createTooltipArrow = __webpack_require__(/*! ./createTooltipArrow */ "../src/createTooltipArrow.js");
const createTooltipContent = __webpack_require__(/*! ./createTooltipContent */ "../src/createTooltipContent.js");
const getTooltipStyles = __webpack_require__(/*! ./helpers/getTooltipStyles */ "../src/helpers/getTooltipStyles.js");
const insertElement = __webpack_require__(/*! ./helpers/insertElement */ "../src/helpers/insertElement.js");

/**
 * Creating tooltip function
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {HTMLElement}
 */
function createTooltip(element, message, config) {
  
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  if (config.class) {
    config.class.forEach(el => {
      tooltip.classList.add(el);
    });
  }
 
  const tooltipStyles = getTooltipStyles(config.where, config.position, element);

  /**
   * create tooltip content;
   */
  const tooltipContent = createTooltipContent(config.style, message, element);
  
  /**
   * if arrow exist - create it
   */
  if(config.isArrow) {
    let arrow = createTooltipArrow(tooltip, config);
    insertElement(tooltipContent, arrow);
  }

  tooltipStyles.arrowOffset = config.arrowOffset;
  insertElement(tooltip, tooltipContent, tooltipStyles);

  return tooltip;
}

module.exports = createTooltip;

/***/ }),

/***/ "../src/createTooltipArrow.js":
/*!************************************!*\
  !*** ../src/createTooltipArrow.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getArrowPosition = __webpack_require__(/*! ./helpers/getArrowPosition */ "../src/helpers/getArrowPosition.js");
const setStyles = __webpack_require__(/*! ./helpers/setStyles */ "../src/helpers/setStyles.js");

function createTooltipArrow(tooltip, config) {
  const style = config.arrowStyle;
  const position = config.where;
  const size = +style.size;

  config.arrowOffset = size;

  style.width = 'width: ' + size + 'px;';
  style.height = 'height: ' + size + 'px;';

  const arrow = document.createElement('div');
  arrow.classList.add('tooltip__arrow');

  const arrowPosition = getArrowPosition(position, size);

  style.x = arrowPosition.x;
  style.y = arrowPosition.y;

  setStyles(arrow, style);

  return arrow;
}

module.exports = createTooltipArrow;


/***/ }),

/***/ "../src/createTooltipContent.js":
/*!**************************************!*\
  !*** ../src/createTooltipContent.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setStyles = __webpack_require__(/*! ./helpers/setStyles */ "../src/helpers/setStyles.js");
const getStyleProperty = __webpack_require__(/*! ./helpers/getStyleProperty */ "../src/helpers/getStyleProperty.js");

function createTooltipContent(styles, message, element) {
  const tooltipContent = document.createElement('div');

  tooltipContent.classList.add('tooltip__content');
  tooltipContent.innerHTML = message;

  const width = getStyleProperty(element, 'width');
  styles.width = 'width: ' + width + 'px';
  styles.marginLeft = 'margin-left: calc((' + width + 'px - 100%) / 2)';

  setStyles(tooltipContent, styles);

  return tooltipContent;
}

module.exports = createTooltipContent;


/***/ }),

/***/ "../src/helpers/getArrowPosition.js":
/*!******************************************!*\
  !*** ../src/helpers/getArrowPosition.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getPosition(position, size) { 
  
  let x, y;

  const offset = Math.round(size/2) + 'px';

  const left = 'calc((100% - ' + size + 'px) / 2)';
  const top = 'calc((100% - ' + size + 'px) / 2)';
  
  switch (position) {
    case 'top': {
      y = 'bottom: -' + offset;
      x = 'left: ' + left;
      break;
    }

    case 'left': {
      y = 'top: ' + top;
      x = 'right: -' + offset;

      break;
    }
    
    case 'bottom': {
      y = 'top: -' + offset;
      x = 'left: ' + left;
      break;
    }

    case 'right': {
      y = 'top: ' + top;
      x = 'left: -' + offset;
      break;
    }

    default: {
      x = 'left: 50%';
      y = 'top: 50%';
    }
  }
  
  return {
    x: x,
    y: y
  }
}

module.exports = getPosition;

/***/ }),

/***/ "../src/helpers/getDefaultConfig.js":
/*!******************************************!*\
  !*** ../src/helpers/getDefaultConfig.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Set up default config for tooltip
 */
function getDefaultConfig() {

  const config = {
    where: 'bottom',
    position: 'absolute',
    isArrow: true,
    style: {
      position: 'position: relative',
      minHeight: '30px',
      padding: 'padding: 10px',
      boxSizing: 'box-sizing: border-box',
      borderRadius: 'border-radius: 10px',
      background: 'background: white', 
      color: 'color: black',
      fontSize: 'font-size: 11px',
      lineHeight: 'line-height: 16px',
      textAlign: 'text-align: center',
      fontFamily: 'font-family: Montserrat, arial'
    },
    arrowStyle: {
      position: 'position: absolute',
      background: 'background: inherit',
      color: 'color: inherit',
      size: '10',
      zIndex: 'z-index: -1',
      transform: 'transform: rotate(45deg)'
    }
  }

  return config;
}
module.exports = getDefaultConfig;

/***/ }),

/***/ "../src/helpers/getOffsetProperty.js":
/*!*******************************************!*\
  !*** ../src/helpers/getOffsetProperty.js ***!
  \*******************************************/
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

/***/ "../src/helpers/getStyleProperty.js":
/*!******************************************!*\
  !*** ../src/helpers/getStyleProperty.js ***!
  \******************************************/
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
  return parseInt(result);
}

module.exports = getStyleProperty;


/***/ }),

/***/ "../src/helpers/getTooltipPosition.js":
/*!********************************************!*\
  !*** ../src/helpers/getTooltipPosition.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Get tooltip position from element
 * 
 * And set up difference value for top, left, right positioned tooltips
 * 
 * @param {Object} dimension 
 * @param {String} where 
 * 
 * @return {Object}
 */

function getTooltipPosition(dimension, where) {

  const offset = {};

  switch (where) {
    case 'top': {
      offset.x = dimension.left;
      offset.y = dimension.top - dimension.height;
      // offset.difference = 'whole';

      break;
    }

    case 'bottom': {
      offset.x = dimension.left;
      offset.y = dimension.top + dimension.height;

      break;
    }

    case 'left': {
      offset.x = dimension.left - dimension.width - 4;
      offset.y = dimension.top;
      // offset.difference = 'half';

      break;
    }

    case 'right': {
      offset.x = dimension.left + dimension.width + 4;
      offset.y = dimension.top;
      // offset.difference = 'half';

      break;
    }
  }

  return offset;
}

module.exports = getTooltipPosition;

/***/ }),

/***/ "../src/helpers/getTooltipStyles.js":
/*!******************************************!*\
  !*** ../src/helpers/getTooltipStyles.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getStyleProperty = __webpack_require__(/*! ./getStyleProperty */ "../src/helpers/getStyleProperty.js");
const getOffsetProperty = __webpack_require__(/*! ./getOffsetProperty */ "../src/helpers/getOffsetProperty.js");
const isElementFixed = __webpack_require__(/*! ./isElementFixed */ "../src/helpers/isElementFixed.js");
const getTooltipPosition = __webpack_require__(/*! ./getTooltipPosition */ "../src/helpers/getTooltipPosition.js");

function getTooltipStyle(where, position, element) {

  const isFixed = isElementFixed(element);  

  const styles = {
    position: 'position: ' + position,
    zIndex: 'z-index: 1',
    display: 'display: none'
  }
  
  if (isFixed) {
    styles.position = 'position: fixed';
  }
  
  const height = getStyleProperty(element, 'height');
  let width = getStyleProperty(element, 'width');
  
  let top = getOffsetProperty(element, 'top', isFixed);
  let left = getOffsetProperty(element, 'left', isFixed);
  

  const dimension = {
    width: width,
    height: height,
    top: top,
    left: left
  }

  const offset = getTooltipPosition(dimension, where);

  styles.elementHeight = height;
  styles.where = where;

  return Object.assign(styles, offset)
}

module.exports = getTooltipStyle;

/***/ }),

/***/ "../src/helpers/insertElement.js":
/*!***************************************!*\
  !*** ../src/helpers/insertElement.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setStyles = __webpack_require__(/*! ./setStyles */ "../src/helpers/setStyles.js");

/**
 * Inserting element to DOM
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} element
 * @param {Object} config
 *
 * @return {void}
 */

function insertElement(parent, element, config) {
  if (config) {
    insert();
  } else {
    parent.insertAdjacentElement('beforeEnd', element);
  }

  function insert() {
    parent.insertAdjacentElement('afterBegin', element);
    document.body.addEventListener('DOMNodeInserted', ev => {
      if (ev.srcElement === parent) {
        computeStyles();
      }
    });
  };

  function computeStyles() {
    let arrow = config.arrowOffset || 0;
    config.display = 'display: block';
    let top;
    const contentHeight = element.clientHeight;

    switch (config.where) {
      case 'right': {
        top = config.y  - ((contentHeight - config.elementHeight) / 2);
        config.top = 'top: ' + top + 'px';
        config.left = 'left: ' + (config.x + arrow) + 'px';

        break;
      }

      case 'left': {
        top = config.y - ((config.elementHeight - contentHeight) / 2);
        config.top = 'top: ' + top + 'px';
        config.left = 'left: ' + (config.x - arrow) + 'px';

        break;
      }

      case 'top': {
        top = config.y - (contentHeight - config.elementHeight);
        config.top = 'top: ' + (top - arrow) + 'px';
        config.left = 'left: ' + config.x + 'px';
        break;
      }

      default: {
        config.top = 'top: ' + (config.y + arrow) + 'px';
        config.left = 'left: ' + config.x + 'px';

        break;
      }
    }

    setStyles(parent, config);
  };
}

module.exports = insertElement;


/***/ }),

/***/ "../src/helpers/isElementFixed.js":
/*!****************************************!*\
  !*** ../src/helpers/isElementFixed.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Detect is element fixed
 * @param {HTMLElement} element
 *
 * @returns {Boolean}
 */

function isElementFixed(element) {
  function recurcive(element) {
    let style = window.getComputedStyle(element);
    let position = style.getPropertyValue('position');
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

  return recurcive(element);
}

module.exports = isElementFixed;


/***/ }),

/***/ "../src/helpers/objectAssignPolyfill.js":
/*!**********************************************!*\
  !*** ../src/helpers/objectAssignPolyfill.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),

/***/ "../src/helpers/removePolyfill.js":
/*!****************************************!*\
  !*** ../src/helpers/removePolyfill.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createRemoveMethod() {
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
};

module.exports = createRemoveMethod;


/***/ }),

/***/ "../src/helpers/setStyles.js":
/*!***********************************!*\
  !*** ../src/helpers/setStyles.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function setStyles(element, config) {
  let style = '';

  for (let property in config) {
    if (config.hasOwnProperty(property)) {
      style += config[property] + '; ';
    }
  }

  element.setAttribute('style', style);
}

module.exports = setStyles;


/***/ }),

/***/ "../src/removeTooltip.js":
/*!*******************************!*\
  !*** ../src/removeTooltip.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const removeMethod = __webpack_require__(/*! ./helpers/removePolyfill */ "../src/helpers/removePolyfill.js");

/**
 * Implementihg close tooltip logic
 * @param {HTMLElement} tooltip
 * @param {HTMLElement} element
 *
 * @returns {void}
 */
function removeTooltip(tooltip) {
  removeMethod();
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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Tooltip = __webpack_require__(/*! ../index */ "../index.js");

(() => {
  const button_1 = document.getElementsByClassName('js-button-1')[0];

  button_1.addEventListener('click', () => {
    const tooltip = new Tooltip(button_1, {
      message: 'hi dude from 1 button',
      where: 'top',
      arrowOffset: 10,
      class: ['test', 'test1'],
      style: {
        background: 'background: red',
        minWidth: 'min-width: 136px',
      }, 
      arrowStyle: {
        border: 'border: 2px solid green'
      }
    });
    tooltip.render();
  });
  
  const button_2 = document.getElementsByClassName('js-button-2')[0];

  button_2.addEventListener('click', () => {
    const tooltip = new Tooltip(button_2, {
      message: 'hi dude from 2 button',
      where: 'right'
    });
    tooltip.render();
  });

  const button_3 = document.getElementsByClassName('js-button-3')[0];

  button_3.addEventListener('click', () => {
    const tooltip = new Tooltip(button_3, {
      message: 'hi dude from 3 button',
      where: 'bottom'
    });
    tooltip.render();
  });

  const button_4 = document.getElementsByClassName('js-button-4')[0];

  button_4.addEventListener('click', () => {
    const tooltip = new Tooltip(button_4, {
      message: 'hi dude from 4 button',
      where: 'left'
    });
    tooltip.render();
  });


  

})();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map