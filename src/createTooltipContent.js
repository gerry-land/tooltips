const setStyles = require('./helpers/setStyles');
const getStyleProperty = require('./helpers/getStyleProperty');

function createTooltipContent(styles, message, element) {
  const tooltipContent = document.createElement('div');

  tooltipContent.classList.add('tooltip__content');
  tooltipContent.innerHTML = message;

  const width = getStyleProperty(element, 'width');
  styles.width = 'width: ' + width + 'px';
  styles.marginLeft = 'margin-left: calc((' + width + 'px - 100%) / 2)';

  setStyles(tooltipContent, styles);

  return tooltipContent;
}

module.exports = createTooltipContent;
