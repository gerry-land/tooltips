function setStyles(tooltip, config) {
  let style = '';

  for (let property in config) {
    if (config.hasOwnProperty(property)) {
      style += config[property] + '; ';
    }
  }

  tooltip.style = style;

}

module.exports = setStyles;