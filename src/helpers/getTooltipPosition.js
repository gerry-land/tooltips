/**
 * Get tooltip position from element
 * 
 * And set up difference value for top, left, right positioned tooltips
 * 
 * @param {Object} dimension 
 * @param {String} where 
 * 
 * @return {Object}
 */

function getTooltipPosition(dimension, where) {

  const offset = {};

  switch (where) {
    case 'top': {
      offset.x = dimension.left;
      offset.y = dimension.top - dimension.height;
      // offset.difference = 'whole';

      break;
    }

    case 'bottom': {
      offset.x = dimension.left;
      offset.y = dimension.top + dimension.height;

      break;
    }

    case 'left': {
      offset.x = dimension.left - dimension.width - 4;
      offset.y = dimension.top;
      // offset.difference = 'half';

      break;
    }

    case 'right': {
      offset.x = dimension.left + dimension.width + 4;
      offset.y = dimension.top;
      // offset.difference = 'half';

      break;
    }
  }

  return offset;
}

module.exports = getTooltipPosition;