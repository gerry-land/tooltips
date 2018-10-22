const getArrowPosition = require('./helpers/getArrowPosition');
const setStyles = require('./helpers/setStyles');

function createTooltipArrow(tooltip, config) {
  
  const style = config.arrowStyle;
  const position = config.where;
  const size = +style.size;

  config.arrowOffset = size;

  style.width = 'width: ' + size + 'px;'
  style.height = 'height: ' + size + 'px;'

  const arrow = document.createElement('div');
  arrow.classList.add('tooltip__arrow');

  const arrowPosition = getArrowPosition(position, size);

  style.x = arrowPosition.x;
  style.y = arrowPosition.y;

  setStyles(arrow, style);

  return arrow;
}

module.exports = createTooltipArrow;