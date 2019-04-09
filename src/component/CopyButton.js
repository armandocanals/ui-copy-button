import React, { useState, useEffect } from 'react';
import { BrowserCopyAction } from '../actions/actions';

export default function CopyButton(props) {
  const baseText = props.children || "Copy";
  const [buttonText, setButtonText] = useState(baseText);

  useEffect(() => {
    let id = setTimeout(() => {
      setButtonText(baseText);
    }, 750);
    return () => clearTimeout(id);
  });

  const handleOnClick = (e) => {
    if (BrowserCopyAction(props.textToCopy, props.elementId)) {
      if (props.actionText) {
        setButtonText(props.actionText);
      }
      if (typeof props.onCopied === 'function') {
        props.onCopied(e);
      }
    }
  };

  return (
      <button className={props.className}
              onClick={handleOnClick}>
        { buttonText }
      </button>
  );
}
