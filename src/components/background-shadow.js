import React from 'react';

import './background-shadow.scss';

export default function BackgroundShadow() {
  return (
    <svg
      aria-hidden="true"
      className="background-shadow"
      viewBox="0 0 16 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="shadow-gradient"
          cx="0.45"
          cy="0.5"
          r="0.7"
          fx="0.25"
          fy="0.25"
        >
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#shadow-gradient)" />
    </svg>
  );
}
