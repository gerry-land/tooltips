/**
 * Injecting tooltip to the bottom of body
 * @param {HTMLElement} tooltip
 *
 * @returns {void}
 */
function injectElement(tooltip) {
  document.body.insertAdjacentElement('beforeEnd', tooltip);
}

module.exports = injectElement;