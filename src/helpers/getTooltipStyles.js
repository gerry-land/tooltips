const getStyleProperty = require('./getStyleProperty');
const getOffsetProperty = require('./getOffsetProperty');
const isElementFixed = require('./isElementFixed');
const getTooltipPosition = require('./getTooltipPosition');

function getTooltipStyle(where, position, element) {

  const isFixed = isElementFixed(element);  

  const styles = {
    position: 'position: ' + position,
    zIndex: 'z-index: 1',
    display: 'display: none'
  }
  
  if (isFixed) {
    styles.position = 'position: fixed';
  }
  
  const height = getStyleProperty(element, 'height');
  let width = getStyleProperty(element, 'width');
  
  let top = getOffsetProperty(element, 'top', isFixed);
  let left = getOffsetProperty(element, 'left', isFixed);
  
  const dimension = {
    width: width,
    height: height,
    top: top,
    left: left
  }

  const offset = getTooltipPosition(dimension, where);

  styles.elementHeight = height;
  styles.where = where;

  return Object.assign({}, styles, offset)
}

module.exports = getTooltipStyle;