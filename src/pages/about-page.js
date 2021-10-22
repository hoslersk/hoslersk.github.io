import React, { Fragment as _ } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';
import Fragment from '../components/fragment';


export default function AboutPage() {
  return (
    <_>
      <PageTitle title="About - Schyler Hosler" />
      <Heading>
        About <small aria-hidden="true">- スカイラーについて</small>
      </Heading>
      <div className="row">
        <div className="column column--lg">
          <ContentWrapper>
						<Fragment slug="personal-about" />
          </ContentWrapper>
        </div>
      </div>
    </_>
  );
}
