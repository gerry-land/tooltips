const getArrowPosition = require('./helpers/getArrowPosition');
const setStyles = require('./helpers/setStyles');

function createTooltipArrow(tooltip, style, position) {
  
  const size = parseInt(style.width.split(':')[1], 10);

  const arrow = document.createElement('div');
  arrow.classList.add('tooltip__arrow');

  style.background = 'background: red';

  const arrowPosition = getArrowPosition(position, size);

  console.log(arrowPosition);

  style.x = arrowPosition.x;
  style.y = arrowPosition.y;

  setStyles(arrow, style);

  tooltip.insertAdjacentElement('beforeEnd', arrow);
}

module.exports = createTooltipArrow;