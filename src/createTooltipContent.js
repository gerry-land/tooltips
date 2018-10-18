const setStyles = require('./helpers/setStyles');

function createTooltipContent(styles, message) {

  const tooltipContent = document.createElement('div');
  
  tooltipContent.classList.add('tooltip__content');
  tooltipContent.innerHTML = message;

  setStyles(tooltipContent, styles);

  return tooltipContent;

}


module.exports = createTooltipContent;