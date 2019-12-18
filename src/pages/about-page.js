import React, { Fragment } from 'react';

import Heading from '../components/heading';

export default function AboutPage() {
  return (
    <Fragment>
      <Heading>
        About <small aria-hidden="true">- スカイラーについて</small>
      </Heading>
      <div className="content">
        <p>Current Interests:</p>
        <ul>
          <li>Accessibility</li>
          <li>SVG</li>
          <li>Video Game UIs</li>
        </ul>
      </div>
    </Fragment>
  );
}
