import React from "react";
import { render, fireEvent } from 'react-testing-library';

import CopyButton from "./CopyButton";

it("render the copy button with default text", () => {
  const { container } = render(<CopyButton textToCopy='copied text!'></CopyButton>);
  expect(container.textContent).toBe("Copy");
});

it("render the copy button with text from props", () => {
  const { container } = render(<CopyButton textToCopy='copied text!'>Copy Something!</CopyButton>);
  expect(container.textContent).toBe("Copy Something!");
});

it('render the copy button with a class name', () => {
  const { container } = render(<CopyButton className="btn-copy" textToCopy='copied text!'></CopyButton>);
  expect(container.firstChild.classList.contains('btn-copy')).toBe(true);
});

// TODOs: - Mock the BrowserCopyAction function.
//        - Test actionText when state changes.
//        - Test useEffect Hook.

