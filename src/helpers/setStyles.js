function setStyles(element, config) {
  let style = '';

  for (let property in config) {
    if (config.hasOwnProperty(property)) {
      style += config[property] + '; ';
    }
  }

  element.style = style;
}

module.exports = setStyles;