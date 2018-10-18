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
