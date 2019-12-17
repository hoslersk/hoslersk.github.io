import React from 'react';
import classNames from 'classnames';

import './background-svg.scss';

export default function BackgroundSvg({ position }) {
  const baseClass = 'background-svg',
        className =  classNames(
          baseClass,
          { [`${baseClass}--${position}`]: position },
        );

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 16 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="background-svg__circles">
        <circle
          className="background-svg__circle"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.03"
          cx="0"
          cy="0"
          r="6"
        />
        <circle
          className="background-svg__circle"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.03"
          cx="0"
          cy="0"
          r="5.8"
        />
      </g>
      <g className="background-svg__lines">
        <line
          className="background-svg__line"
          x1="0.5"
          y1="0"
          x2="6.5"
          y2="6"
          stroke="currentColor"
          strokeWidth="0.03"
        />
        <line
          className="background-svg__line"
          x1="0"
          y1="0"
          x2="7"
          y2="7"
          stroke="currentColor"
          strokeWidth="0.03"
        />
        <line
          className="background-svg__line"
          x1="-0.5"
          y1="0"
          x2="6"
          y2="6.5"
          stroke="currentColor"
          strokeWidth="0.03"
        />
      </g>
    </svg>
  );
}
