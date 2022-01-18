import './StylePropVsCSSmodulesFilesVsCSSinJS.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const divStyle = (darkMode) => {
  return css`
    background-color: ${darkMode ? 'black' : 'aquamarine'};
    height: 40px;
  `;
};

export default function StylePropVsCSSmodulesFilesVsCSSinJS() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: 'blue', height: '80px' }}>style prop</div>
      <div className="divWithCSS">CSS modules</div>
      <div css={divStyle(darkMode)}>CSS in JS</div>
      <button onClick={() => setDarkMode(!darkMode)}>
        dark mode {!darkMode ? 'on' : 'off'}
      </button>
    </>
  );
}
