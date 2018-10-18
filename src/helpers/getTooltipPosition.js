function getTooltipPosition(dimension, where) {

  const offset = {};

  switch (where) {
    case 'top': {
      offset.x = dimension.left;
      // offset.y = dimension.top;

      break;
    }

    case 'bottom': {
      offset.x = dimension.left;
      offset.y = dimension.top + dimension.height;

      break;
    }


    // case 'left': {
    //   offset.x = left;
    //   offset.y = ;

    //   break;
    // }

    // case 'right': {
    //   offset.x = left;
    //   offset.y = '';

    //   break;
    // }
  }




  return offset;

  console.log(dimension);
  console.log(where);

}


module.exports = getTooltipPosition;