const Tooltip = require('../index');

(() => {
  const button_1 = document.getElementsByClassName('js-button-1')[0];

  button_1.addEventListener('click', () => {
    const tooltip = new Tooltip(button_1, {
      message: 'hi dude from 1 button',
      where: 'top',
      style: {
        background: 'background: red',
        minWidth: 'min-width: 136px',
      }, 
      arrowStyle: {
        border: 'border: 2px solid green'
      }
    });
    tooltip.render();
  });
  
  const button_2 = document.getElementsByClassName('js-button-2')[0];

  button_2.addEventListener('click', () => {
    const tooltip = new Tooltip(button_2, {
      message: 'hi dude from 2 button',
      where: 'right'
    });
    tooltip.render();
  });

  const button_3 = document.getElementsByClassName('js-button-3')[0];

  button_3.addEventListener('click', () => {
    const tooltip = new Tooltip(button_3, {
      message: 'hi dude from 3 button',
      where: 'bottom'
    });
    tooltip.render();
  });

  const button_4 = document.getElementsByClassName('js-button-4')[0];

  button_4.addEventListener('click', () => {
    const tooltip = new Tooltip(button_4, {
      message: 'hi dude from 4 button',
      where: 'left'
    });
    tooltip.render();
  });


  

})();