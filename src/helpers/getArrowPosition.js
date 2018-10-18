const getStyleProperty = require('./getStyleProperty');

function getPosition(position, size) { 
  
  let x, y;

  const offset = Math.round(size/2);
  
  const left = 'calc((100% -' + size + 'px) / 2)';
  const top = 'calc((100% - ' + size + 'px) / 2)';
  
  console.log(position);

  switch (position) {
    case 'top': {
      y = 'bottom: -' + offset + 'px';
      x = 'left: ' + left;
      break;
    }

    case 'left': {


      break;
    }
    
    case 'bottom': {

      break;
    }

    case 'right': {

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