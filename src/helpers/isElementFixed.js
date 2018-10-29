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
