/**
 * Implementihg close tooltip logic
 * @param {HTMLElement} tooltip
 * @param {HTMLElement} element
 *
 * @returns {void}
 */
function removeTooltip(tooltip) {
  let time = setTimeout(removeElement, 5000);
  let clickTimer = setTimeout(addClick, 50);
  function addClick() {
    window.addEventListener('click', checkClosest);
    clearTimeout(clickTimer);
  }

  function checkClosest(event) {
    let target = event.toElement;
    if (target !== tooltip) {
      removeElement();
    }
  }

  function removeElement() {
    tooltip.remove();
    window.removeEventListener('click', checkClosest);
    clearTimeout(time);
  }
}

module.exports = removeTooltip;