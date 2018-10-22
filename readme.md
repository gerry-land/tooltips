# Creating flexible tooltip

* npm i tooltip-zeo

## Default config 

```
config = {
  where: 'bottom',
  message: ''
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
    fontFamily: 'font-family: arial'
  },
  arrowStyle: {
    position: 'position: absolute',
    background: 'background: inherit',
    size: '10',
    zIndex: 'z-index: -1',
    transform: 'transform: rotate(45deg)'
  }
}
```

where - *on what side of element tooltip will be render* 
can be: 
  * 'left'
  * 'top'
  * 'right'
  * 'bottom'

message - *message what you want write in tooltip*

position - *the default is absolute if the element is fixed - the tooltip will be fixed too.*

isArrow - *flag what mean is arrow will exist with tooltip*

style - *styles for the tooltip. You can change values what there is in default config, or expand with your custom styles. The format is key of existing or new style and value is simple CSS style. See above*

arrowStyle - *that what in style description, but this change arrow styles*
_________________

## Using

const tooltip = new Tooltip(HTMLElement, config)

where 
  * HTMLElement is element in relation to which tooltip will be created
  * config is object like default config

## Example 

const tooltip = new Tooltip(button_1, {
  message: 'hi dude from 1 button',
  where: 'top',
  style: {
    background: 'background: red',
    minWidth: 'min-width: 136px'
  }, 
  arrowStyle: {
    border: 'border: 2px solid green'
  }
});

### You can see examples in example folder

_________________



