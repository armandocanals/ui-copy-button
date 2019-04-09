# ui-copy-button
A (really) simple component to copy text from a selector or from props.

## Installation
```
npm i ui-copy-button
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
```
<CopyButton elementId="root" />
```

### Selecting text from props:
```
<CopyButton textToCopy="Copied from props!" />
```

### Set a custom class name:
```
<CopyButton className="btn copy" textToCopy="Copied from props!" />
```

### Override button text:
```
<CopyButton elementId="root">I'm a copy button</CopyButton>
```

### Call a function when a copy is successful:
```
<CopyButton textToCopy="Text copied from props!" onCopied={someCustomAction} />
```
