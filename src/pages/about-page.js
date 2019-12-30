import React, { Fragment } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function AboutPage() {
  return (
    <Fragment>
      <PageTitle title="About - Schyler Hosler" />
      <Heading>
        About <small aria-hidden="true">- スカイラーについて</small>
      </Heading>
      <ContentWrapper>
        <p>Hi, my name is Schyler ("SKY-LER") and I'm a Web Developer.</p>
        <p>(Insert obligatory "I like to make stuff" line here.)</p>
        <p>
          Check out my{' '}
          <a href="/schyler-hosler-resume.pdf" target="_blank" rel="noreferrer noopener">
            resume
          </a> for more information.
        </p>

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
