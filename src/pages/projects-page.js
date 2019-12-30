import React, { Fragment } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function ProjectsPage() {
  return (
    <Fragment>
      <PageTitle title="Projects - Schyler Hosler" />
      <Heading>
        Projects <small aria-hidden="true">- プロジェクト</small>
      </Heading>
      <ContentWrapper>
        <p>Coming Soon.</p>
      </ContentWrapper>
    </Fragment>
  );
}
