import React, { Fragment } from 'react';

import Link from '../components/link';
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
          <Link to="https://schylerhosler.com/iro-iro">
            iro-iro - Color Contrast Checker for Accessibility (WIP)
          </Link>
        </p>
      </ContentWrapper>
    </Fragment>
  );
}
