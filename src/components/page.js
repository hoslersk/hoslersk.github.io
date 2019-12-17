import React, { Fragment } from 'react';

import BackgroundGrid from './background-grid';
import BackgroundShadow from './background-shadow';
import BackgroundSvg from './background-svg';
import BackgroundTrim from './background-trim';
import Heading from './heading';
import SiteHeader from './site-header';

export default function Page({ children, heading }) {
  return (
    <Fragment>
      <SiteHeader />
      <BackgroundTrim position="top" />
      <main className="container">
        <Heading>
          {heading}
        </Heading>
        {children}
      </main>
      {/*<footer>footer</footer>*/}
      <BackgroundSvg position="top" />
      <BackgroundGrid />
      <BackgroundShadow />
      <BackgroundSvg position="bottom" />
      <BackgroundTrim position="bottom" />
    </Fragment>
  );
}
