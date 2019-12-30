import React, { Fragment } from 'react';

import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function AboutPage() {
  return (
    <Fragment>
      <Heading>
        About <small aria-hidden="true">- スカイラーについて</small>
      </Heading>
      <ContentWrapper>
        <p>Hi, my name is Schyler ("SKY-LER") and I'm a Web Developer.</p>
        <p>(Insert obligatory "I like to make stuff" line here.)</p>

        <p>Current Interests:</p>
        <ul>
          <li>Web Accessibility</li>
          <li>SVG</li>
          <li>Video Game UIs</li>
        </ul>
      </ContentWrapper>
    </Fragment>
  );
}
