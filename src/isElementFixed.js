/**
 * Detect is element fixed
 * @param {HTMLElement} element
 *
 * @returns {Boolean}
 */

function isElementFixed(element) {
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

module.exports = isElementFixed;