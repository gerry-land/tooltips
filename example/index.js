const Tooltip = require('../index');

(() => {
  const button_1 = document.getElementsByClassName('js-button-1')[0];

  button_1.addEventListener('click', () => {
    const tooltip = new Tooltip(button_1, {
      message: 'hi dude from 1 button'
    });
    console.log(tooltip);
    tooltip.render();
  });
  
  const button_2 = document.getElementsByClassName('js-button-2')[0];

  button_2.addEventListener('click', () => {
    const tooltip = new Tooltip(button_2, {
      message: 'hi dude from 2 button',
      where: 'top'
    });
    console.log(tooltip);
    tooltip.render();
  });

  const button_3 = document.getElementsByClassName('js-button-3')[0];

  button_3.addEventListener('click', () => {
    const tooltip = new Tooltip(button_3, {
      message: 'hi dude from 3 button'
    });
    console.log(tooltip);
    tooltip.render();
  });

  const button_4 = document.getElementsByClassName('js-button-4')[0];

  button_4.addEventListener('click', () => {
    const tooltip = new Tooltip(button_4, {
      message: 'hi dude from 4 button'
    });
    console.log(tooltip);
    tooltip.render();
  });


  

})();