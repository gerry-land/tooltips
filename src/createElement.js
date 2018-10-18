const isElementFixed = require('./isElementFixed');
const getStyleProperty = require('./getStyleProperty');
const getOffsetProperty = require('./getOffsetProperty');
const setStyles = require('./setStyles');

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