import React from 'react';
import classNames from 'classnames';

import './cursor-svg.scss';

export default function CursorSvg({ className }) {
  const cursorSvgClass = classNames('cursor-svg', className);
  return (
    <svg
      aria-hidden="true"
      className={cursorSvgClass}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="mask" x="0" y="0">
          <rect x="0" y="0" width="10" height="10" fill="#fff"/>
          <circle cx="3" cy="5" r="0.75" />
        </mask>
      </defs>
      <path mask="url(#mask)" fill="currentColor" d="M0,5 L3.5,3 L10,5 L3.5,7 L0,5" />
      <rect fill="currentColor" x="8.75" y="2" width="1.25" height="1.25" />
      <rect fill="currentColor" x="8.75" y="7" width="1.25" height="1.25" />
    </svg>
  );
}
