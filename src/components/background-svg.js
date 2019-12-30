import React from 'react';
import classNames from 'classnames';

import './background-svg.scss';

export default function BackgroundSvg({ position }) {
  const baseClass = 'background-svg',
        strokeWidth = 0.03,
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
          cx="0"
          cy="0"
          r="6"
          {...{ strokeWidth }}
        />
        <circle
          className="background-svg__circle"
          fill="none"
          stroke="currentColor"
          cx="0"
          cy="0"
          r="5.8"
          {...{ strokeWidth }}
        />
      </g>
      <g className="background-svg__lines">
        <line
          className="background-svg__line"
          x1="0.5"
          y1="-0.5"
          x2="7.75"
          y2="8"
          stroke="currentColor"
          {...{ strokeWidth }}
        />
        <line
          className="background-svg__line"
          x1="0"
          y1="0"
          x2="12"
          y2="14"
          stroke="currentColor"
          {...{ strokeWidth }}
        />
        <line
          className="background-svg__line"
          x1="-0.5"
          y1="0.5"
          x2="6"
          y2="8"
          stroke="currentColor"
          {...{ strokeWidth }}
        />
      </g>
    </svg>
  );
}
