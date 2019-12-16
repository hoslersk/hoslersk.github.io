import React, { Fragment } from 'react';

import BackgroundGrid from './background-grid';
import BackgroundSvg from './background-svg';
import BackgroundTrim from './background-trim';
import Heading from './heading';
import SiteHeader from './site-header';

export default function Page() {
  return (
    <Fragment>
      <SiteHeader />
      <main className="container">
        <Heading>
          Schyler Hosler
        </Heading>
        <div className="content">Under Construction</div>
      </main>
      {/*<footer>footer</footer>*/}
      <BackgroundTrim position="top" />
      <BackgroundSvg position="top" />
      <BackgroundGrid />
      <BackgroundSvg position="bottom" />
      <BackgroundTrim position="bottom" />
    </Fragment>
  );
}
