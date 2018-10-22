const createTooltipArrow = require('./createTooltipArrow');
const createTooltipContent = require('./createTooltipContent');
const getTooltipStyles = require('./helpers/getTooltipStyles');
const insertElement = require('./helpers/insertElement');

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