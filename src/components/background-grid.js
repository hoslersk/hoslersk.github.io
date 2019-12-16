import React from 'react';

import './background-grid.scss';

export default function BackgroundGrid() {
  return (
    <svg
      aria-hidden="true"
      className="background-grid"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="small-grid" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="url(#small-grid)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
