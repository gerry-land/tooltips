const getStyleProperty = require('./getStyleProperty');

function getPosition(position, size) { 
  
  let x, y;

  const offset = Math.round(size/2);

  const left = 'calc((100% - ' + size + 'px) / 2)';
  const top = 'calc((100% - ' + size + 'px) / 2)';
  
  switch (position) {
    case 'top': {
      y = 'bottom: -' + offset;
      x = 'left: ' + left;
      break;
    }

    case 'left': {
      y = 'top: ' + top;
      x = 'right: -' + offset;

      break;
    }
    
    case 'bottom': {
      y = 'top: -' + offset;
      x = 'left: ' + left;
      break;
    }

    case 'right': {
      y = 'top: ' + top;
      x = 'left: -' + offset;
      break;
    }

    default: {
      x = 'left: 50%';
      y = 'top: 50%';
    }
  }
  
  return {
    x: x,
    y: y
  }
}

module.exports = getPosition;