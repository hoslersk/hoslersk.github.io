import React from 'react';

import BackgroundGrid from './background-grid';

import './content-wrapper.scss';

export default function ContentWrapper({ children }) {
  return (
    <div className="content-wrapper">
      <BackgroundGrid />
      {children}
    </div>
  );
}
