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
        <pattern id="trim" width="80" height="35" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100%" height="2" fill="currentColor" />
          <rect x="0" y="1" width="5" height="5" fill="currentColor" />
          <circle cx="30" cy="10" r="3" fill="currentColor" />
          <circle cx="50" cy="10" r="3" fill="currentColor" />
          <circle cx="40" cy="25" r="3" fill="currentColor" />
          <rect x="75" y="1" width="5" height="5" fill="currentColor" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#trim)" />
    </svg>
  );
}
