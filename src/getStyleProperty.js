/**
 * Getting style value by property name
 * @param {HTMLElement} element
 * @param {String} property
 *
 * @returns {Number}
 */
function getStyleProperty(element, property) {
  const style = window.getComputedStyle(element);
  const result = style.getPropertyValue(property);
  return Number.parseInt(result);
}

module.exports = getStyleProperty;