import React from 'react';
import classNames from 'classnames';

import './background-trim.scss';

export default function BackgroundTrim({ position }) {
  const baseClass = 'background-trim',
        className = classNames(
          baseClass,
          { [`${baseClass}--${position}`]: position },
        );

  return (
    <svg aria-hidden="true" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="trim" width="80" height="24" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100%" height="2" fill="currentColor" />
          <rect x="0" y="1" width="5" height="5" fill="currentColor" />
          <circle cx="32" cy="10" r="3" fill="currentColor" />
          <circle cx="48" cy="10" r="3" fill="currentColor" />
          <circle cx="40" cy="20" r="3" fill="currentColor" />
          <rect x="75" y="1" width="5" height="5" fill="currentColor" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#trim)" />
    </svg>
  );
}
