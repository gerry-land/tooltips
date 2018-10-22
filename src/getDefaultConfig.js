/**
 * Set up default config for tooltip
 */
function getDefaultConfig() {

  const config = {
    where: 'bottom',
    position: 'absolute',
    isArrow: true,
    style: {
      position: 'position: relative',
      minWidth: 'min-width: 136px',
      minHeight: '30px',
      padding: 'padding: 10px 10px',
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
      background: 'background: inherit',
      position: 'position: absolute',
      zIndex: 'z-index: -1',
      size: '10',
      transform: 'transform: rotate(45deg)'
    }
  }

  return config;
}
module.exports = getDefaultConfig;