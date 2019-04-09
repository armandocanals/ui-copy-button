# ui-copy-button 
![version](https://img.shields.io/npm/v/ui-copy-button.svg?cacheSeconds=2592000)

A (really) simple component to copy text from a selector or from props.

## Installation
```sh
npm i ui-copy-button
```

### Usage
```js
import React from 'react';
import CopyButton from 'ui-copy-button';
```
## Required Props:
| Props  | Description |
| ------------- | ------------- |
| textToCopy | (String) text to copy to clipboard - required if `elementId` prop is not set |
| elementId  | (String) DOM ID of element on the page - required if `textToCopy` prop is not set  |

## Optional Props:
| Props  | Description |
| ------------- | ------------- |
| className | (String) custom class for button |
| actionText  | (String) text to display in the button when copy is successful'  |
| onCopied  | (Function) run when copy is successful |

## Usage Examples
### Selecting text from an element:
```html
<CopyButton elementId="root" />
```

### Selecting text from props:
```html
<CopyButton textToCopy="Copied from props!" />
```

### Set a custom class name:
```html
<CopyButton className="btn copy" textToCopy="Copied from props!" />
```

### Override button text:
```html
<CopyButton elementId="root">I'm a copy button</CopyButton>
```

### Call a function when a copy is successful:
```html
<CopyButton textToCopy="Text copied from props!" onCopied={someCustomAction} />
```
