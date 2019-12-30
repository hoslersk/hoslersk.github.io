import React, { Fragment } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function ToolsPage() {
  return (
    <Fragment>
      <PageTitle title="Tools - Schyler Hosler" />
      <Heading>
        Tools <small aria-hidden="true">- ツール</small>
      </Heading>
      <ContentWrapper>
        <p>Coming Soon.</p>
        <p>
          <a href="https://codepen.io/hoslersk/full/MWYyKPK" target="_blank" rel="noreferrer noopener">
            Color Contrast Checker for Accessibility (WIP)
          </a>
        </p>
      </ContentWrapper>
    </Fragment>
  );
}
