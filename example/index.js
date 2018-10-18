const Tooltip = require('../index');

(() => {
  const button = document.getElementsByClassName('js-button')[0];

  button.addEventListener('click', () => {
    const tooltip = new Tooltip(button, 'hi dude');
    console.log(tooltip);
    tooltip.render();
  });

})();