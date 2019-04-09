/* Create a `pre` tag to copy text into temporaraly. Using a
   `pre` tag is useful because it preserves whitespace from
   a range selection. */

export function BrowserCopyAction(text=null, selector=null) {
  try {
    if (!document.queryCommandSupported('copy')) {
      throw "This client doesn't support the copy command!";
    } else if (selector && !!document.getElementById(selector)) {
      text = document.getElementById(selector).innerText;      
    } 

    if (!text) throw "No text to copy!";

    let node = document.createElement("pre");
    node.textContent = text;
    node.style.position = "absolute";
    node.style.top = 0;

    document.body.appendChild(node);

    let range = document.createRange();
    range.selectNodeContents(node);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    if (document.execCommand('copy')) {
      document.body.removeChild(node);
      return true;
    } else {
      document.body.removeChild(node);
      throw "document.execCommand('copy') returned false";
    }
  } catch(err) {
    console.error('Unable to copy:', err);
  }
  return false;
}

