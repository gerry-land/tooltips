const setStyles = require('./setStyles');

/**
 * Inserting element to DOM
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} element
 * @param {Object} config
 *
 * @return {void}
 */

function insertElement(parent, element, config) {
  if (config) {
    insert();
  } else {
    parent.insertAdjacentElement('beforeEnd', element);
  }

  function insert() {
    parent.insertAdjacentElement('afterBegin', element);
    document.body.addEventListener('DOMNodeInserted', ev => {
      if (ev.srcElement === parent) {
        computeStyles();
      }
    });
  };

  function computeStyles() {
    let arrow = config.arrowOffset || 0;
    config.display = 'display: block';
    let top;
    const contentHeight = element.clientHeight;

    switch (config.where) {
      case 'right': {
        top = config.y  - ((contentHeight - config.elementHeight) / 2);
        config.top = 'top: ' + top + 'px';
        config.left = 'left: ' + (config.x + arrow) + 'px';

        break;
      }

      case 'left': {
        top = config.y - ((config.elementHeight - contentHeight) / 2);
        config.top = 'top: ' + top + 'px';
        config.left = 'left: ' + (config.x - arrow) + 'px';

        break;
      }

      case 'top': {
        top = config.y - (contentHeight - config.elementHeight);
        config.top = 'top: ' + (top - arrow) + 'px';
        config.left = 'left: ' + config.x + 'px';
        break;
      }

      default: {
        config.top = 'top: ' + (config.y + arrow) + 'px';
        config.left = 'left: ' + config.x + 'px';

        break;
      }
    }

    setStyles(parent, config);
  };
}

module.exports = insertElement;
