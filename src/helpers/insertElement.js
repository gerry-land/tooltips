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

  console.log(config);

  if (config) {
    const paste = new Promise((resolve) => {
      resolve(
        parent.insertAdjacentElement('afterBegin', element)
      );
    });

    let arrow = config.arrowOffset || 0;

    paste.then(resolve => {
      config.display = 'display: block'
      let top;
      const contentHeight = element.clientHeight;

      switch (config.where) {
        case 'right': {
          top = config.y - ((contentHeight - config.elementHeight) / 2);
          config.top = 'top: ' + top;
          config.left = 'left: ' + (config.x + arrow);

          break;
        }

        case 'left': {
          top = config.y - ((contentHeight - config.elementHeight) / 2);
          config.top = 'top: ' + top;
          config.left = 'left: ' + (config.x - arrow);

          break;
        }

        case 'top': {
          top = config.y - (contentHeight - config.elementHeight);
          config.top = 'top: ' + (top - arrow);
          config.left = 'left: ' + config.x;
          break;
        }

        default: {
          config.top = 'top: ' + (config.y + arrow);
          config.left = 'left: ' + config.x;

          break;
        }
      }

      setStyles(parent, config);
    })
  } else {
    parent.insertAdjacentElement('beforeEnd', element);
  }

}

module.exports = insertElement;