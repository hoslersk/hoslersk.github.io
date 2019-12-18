import React from 'react';

import './background-shadow.scss';

export default function BackgroundShadow() {
  return (
    <svg
      aria-hidden="true"
      className="background-shadow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="shadow-gradient"
          cx="0.5"
          cy="0.5"
          r="0.7"
          fx="0.5"
          fy="0.5"
        >
          <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.6" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#shadow-gradient)" />
    </svg>
  );
}
