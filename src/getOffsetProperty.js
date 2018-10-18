/**
 * Getting offset value by property name
 * @param {HTMLElement} element
 * @param {String} property
 *
 * @returns {Number}
 */
function getOffsetProperty(element, property, isFixed) {
  let offset = element.getBoundingClientRect()[property];
  if (!isFixed) {
    let bodyOffset = document.body.getBoundingClientRect()[property];
    offset -= bodyOffset;
  }

  return offset;
}

module.exports = getOffsetProperty;