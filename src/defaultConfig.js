/**
 * Set up default config for tooltip
 */

const config = {
  where: 'bottom',
  position: 'absolute',
  isArrow: true,
  style: {
    minWidth: 'min-width: 136px',
    minHeight: '30px',
    padding: 'padding: 10px',
    boxSizing: 'box-sizing: border-box',
    borderRadius: 'border-radius: 10px',
    background: 'background: white', 
    color: 'color: black',
    fontSize: 'font-size: 11px',
    lineHeight: 'line-height: 16px',
    textAlign: 'text-align: center',
    fontFamily: 'font-family: Montserrat, arial',
  },
  arrowStyle: {
    position: 'position: absolute',
    zIndex: 'z-index: -1',
    background: 'background: inherit', 
    width: 'width: 10px',
    height: 'height: 10px',
    transform: 'transform: rotate(45deg)'
  }
}

module.exports = config;