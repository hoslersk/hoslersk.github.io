import React, { Fragment as _ } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';
import Fragment from '../components/fragment';


export default function ContactPage() {
  return (
    <_>
      <PageTitle title="Contact - Schyler Hosler" />
      <Heading>
        Contact <small aria-hidden="true">- お問合せ</small>
      </Heading>
      <ContentWrapper>
				<Fragment slug="personal-contact" />
      </ContentWrapper>
    </_>
  );
}
