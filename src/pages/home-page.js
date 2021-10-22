import React, { Fragment as _ } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';
import Fragment from '../components/fragment';


export default function HomePage() {
  return (
    <_>
      <PageTitle title="Home - Schyler Hosler" />
      <Heading>
        Home <small aria-hidden="true">- ホーム</small>
      </Heading>
      <ContentWrapper>
				<Fragment slug="personal-home" />
      </ContentWrapper>
    </_>
  );
}
