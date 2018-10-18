const getStyleProperty = require('./getStyleProperty');
const getOffsetProperty = require('./getOffsetProperty');
const isElementFixed = require('./isElementFixed');
const getTooltipPosition = require('./getTooltipPosition');


function getTooltipStyle(where, position, element) {

  const isFixed = isElementFixed(element);  

  const styles = {
    position: 'position: ' + position,
    zIndex: 'z-index: 1'
  }
  
  if (isFixed) {
    styles.position = 'position: fixed';
  }
  
  const height = getStyleProperty(element, 'height');
  
  let top = getOffsetProperty(element, 'top', isFixed);
  let left = getOffsetProperty(element, 'left', isFixed);
  
  const minWidth = 136;
  let width = getStyleProperty(element, 'width');

  if (width < minWidth) {
    left = Math.round(left - ((minWidth - width) / 2));
  } else {
    left = Math.round(left - ((width - minWidth) / 2));
  }

  const dimension = {
    width: width,
    height: height,
    top: top,
    left: left
  }

  const offset = getTooltipPosition(dimension, where);

  styles.left = 'left: ' + offset.x + 'px';
  styles.top = 'top: ' + offset.y + 'px';


  return styles;

}

module.exports = getTooltipStyle;