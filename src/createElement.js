const isElementFixed = require('./isElementFixed');
const getStyleProperty = require('./getStyleProperty');
const getOffsetProperty = require('./getOffsetProperty');

/**
 * Creating tooltip function
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {HTMLElement}
 */
function createElement(element, message) {
  const isFixed = isElementFixed(element);
  const minWidth = 136;
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = message;
  const width = getStyleProperty(element, 'width');
  const height = getStyleProperty(element, 'height');
  let top = getOffsetProperty(element, 'top', isFixed);
  let left = getOffsetProperty(element, 'left', isFixed);
  if (width < minWidth) {
    left = left - (minWidth - width) / 2;
  }
  if (isFixed) {
    tooltip.classList.add('tooltip--fixed');
  }
  tooltip.style.width = width + 'px';
  tooltip.style.top = top + height + 7 + 'px';
  tooltip.style.left = left + 'px';

  return tooltip;
}


module.exports = createElement;