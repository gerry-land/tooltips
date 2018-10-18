const createTooltip = require('./src/createTooltip');
const removeTooltip = require('./src/removeTooltip');
const injectElement = require('./src/injectElement');
const defaultConfig = require('./src/defaultConfig');

/**
 * global class for creating tooltip
 * @param {HTMLElement} element
 * @param {String} message
 *
 * @returns {void}
 */
class Tooltip {
  constructor(element, config) {
    this.element = element;
    this.message = config.message;
    this.config = defaultConfig;
    this.config.style = Object.assign(defaultConfig.style, config.style);
    this.config.arrowStyle = Object.assign(defaultConfig.arrowStyle, config.arrowStyle);
    if(config.where) {
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
    injectElement(tooltip);
    // removeTooltip(tooltip);
  }

}

module.exports = Tooltip;
