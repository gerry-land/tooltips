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
      minHeight: '30px',
      padding: 'padding: 10px',
      boxSizing: 'box-sizing: border-box',
      borderRadius: 'border-radius: 10px',
      background: 'background: white', 
      color: 'color: black',
      fontSize: 'font-size: 11px',
      lineHeight: 'line-height: 16px',
      textAlign: 'text-align: center',
      fontFamily: 'font-family: Montserrat, arial'
    },
    arrowStyle: {
      position: 'position: absolute',
      background: 'background: inherit',
      color: 'color: inherit',
      size: '10',
      zIndex: 'z-index: -1',
      transform: 'transform: rotate(45deg)'
    }
  }

  return config;
}
module.exports = getDefaultConfig;