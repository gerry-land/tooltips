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
   * Creating tooltip function
   * @param {HTMLElement} element
   * @param {String} message
   *
   * @returns {HTMLElement}
   */
  createElement(element, message) {
    const isFixed = this.isFixed(element);
    const minWidth = 136;
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = message;
    const width = this.getStyleProperty(element, 'width');
    const height = this.getStyleProperty(element, 'height');
    let top = this.getOffsetProperty(element, 'top', isFixed);
    let left = this.getOffsetProperty(element, 'left', isFixed);
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

  /**
   * Injecting tooltip to the bottom of body
   * @param {HTMLElement} tooltip
   *
   * @returns {void}
   */
  injectElement(tooltip) {
    document.body.insertAdjacentElement('beforeEnd', tooltip);
  }

  /**
   * Implementihg close tooltip logic
   * @param {HTMLElement} tooltip
   * @param {HTMLElement} element
   *
   * @returns {void}
   */
  removeTooltip(tooltip) {
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

  /**
   * Getting style value by property name
   * @param {HTMLElement} element
   * @param {String} property
   *
   * @returns {Number}
   */
  getStyleProperty(element, property) {
    const style = window.getComputedStyle(element);
    const result = style.getPropertyValue(property);
    return Number.parseInt(result);
  }

  /**
   * Getting offset value by property name
   * @param {HTMLElement} element
   * @param {String} property
   *
   * @returns {Number}
   */
  getOffsetProperty(element, property, isFixed) {
    let offset = element.getBoundingClientRect()[property];
    if (!isFixed) {
      let bodyOffset = document.body.getBoundingClientRect()[property];
      offset -= bodyOffset;
    }

    return offset;
  }

  /**
   * Detect is element fixed
   * @param {HTMLElement} element
   *
   * @returns {Boolean}
   */

  isFixed(element) {
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

  /**
   * Rendering tooltip
   *
   * @returns {void}
   */
  render() {
    let tooltip = this.createElement(this.element, this.message);
    this.injectElement(tooltip);
    this.removeTooltip(tooltip);
  }
}

module.exports = Tooltip;
