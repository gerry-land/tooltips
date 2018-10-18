const setStyles = require('./helpers/setStyles');
const createTooltipArrow = require('./createTooltipArrow');
const createTooltipContent = require('./createTooltipContent');
const getTooltipStyles = require('./helpers/getTooltipStyles');
const getStyleProperty = require('./helpers/getStyleProperty');

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
 
  const tooltipStyles = getTooltipStyles(config.where, config.position, element);
  
  console.log(tooltipStyles);

  setStyles(tooltip, tooltipStyles);
  
  const width = getStyleProperty(element, 'width');
  config.style.width = 'width: ' + width + 'px';

  /**
   * create tooltip content;
   */
  const tooltipContent = createTooltipContent(config.style, message);

  /**
   * if arrow exist - create it
   */
  if(config.isArrow) {
    createTooltipArrow(tooltip, config.arrowStyle, config.where);
  }

  tooltip.insertAdjacentElement('afterBegin', tooltipContent);

  return tooltip;
}

module.exports = createTooltip;