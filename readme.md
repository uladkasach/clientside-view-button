# Clientside-View-Button
Basic button component built for use with `clientside-view-loader`. Follows [material design](https://material.io/design/components/buttons.html#hierarchy-placement) principles.


![clientside-view-button_demo](https://user-images.githubusercontent.com/10381896/40588489-ea5a2f8a-61ab-11e8-8d3f-2b0a992aa4d8.gif)

# Usage
This module utilizes the `clientside-require` and `clientside-view-loader` modules.

### Install
`npm install clientside-view-button --save`

### Use
```js
// building and appending the view
var view_loader = await load('clientside-view-loader'); // load the view loader
var text_button = await view_loader.load('clientside-view-button').build({type:"text", title:"text button"});
document.body.appendChild(text_button);

// functionality usage
text_button.hide();
text_button.show();
text_button.set_state('loading');
```

# Design


## Button Types
One can choose from the button types by defining `build_options.type` as `text`, `outlined`, or `contained`. See the gif above for visual examples.


## Additional
A button can be set to be a `floating_action_button` by setting the option `floating='true'` or `float='true'`.

# Color Scheme
The default color scheme is set as `color_scheme-blue`. To change the color scheme one can choose from a list of premade color schemes or define their own. To define their own, look at `src/styles.css` to see how `color_scheme-blue` was created. Change the colors as desired.

Premade Color Schemes:
- `color_scheme-blue`
- more coming soon


# Functionality
## State
#### .set_state('loading')
calling `button.state('loading')` can set the state to the loading state and show the spinner, as seen in the gif above.

#### .set_state('default')
calling `button.state('default')` will reset the state to the default state

## Display
#### .hide()
calling `button.hide()` hides the element with `display='none'`

#### .show()
calling `button.show()` will show the button again, undoing `hide()`
