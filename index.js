const createElement = require('./src/createElement');
const removeTooltip = require('./src/removeTooltip');
const injectElement = require('./src/injectElement');

/**
 * global class for creating tooltip
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {void}
 */
class Tooltip {
  constructor(element, message) {
    this.element = element;
    this.message = message;
  }

  /**
   * Rendering tooltip
   *
   * @returns {void}
   */
  render() {
    let tooltip = createElement(this.element, this.message);
    injectElement(tooltip);
    removeTooltip(tooltip);
  }

}

module.exports = Tooltip;
