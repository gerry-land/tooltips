const createTooltip = require('./src/createTooltip');
const removeTooltip = require('./src/removeTooltip');
const insertElement = require('./src/helpers/insertElement');
const getDefaultConfig = require('./src/helpers/getDefaultConfig');
const objectAssign = require('./src/helpers/objectAssignPolyfill');

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
