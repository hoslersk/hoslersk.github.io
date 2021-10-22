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
      <div className="row">
        <div className="column column--lg">
          <ContentWrapper>
            <p>Hi, my name is Schyler ("SKY-LER") and I'm a Web Developer.</p>
            <p>(Insert obligatory "I like to make stuff" line here.)</p>
            <p>
              Check out my{' '}
              <a href="/schyler-hosler-resume.pdf" target="_blank" rel="noreferrer noopener">
                resume
              </a> for more information.
            </p>

            <h2>Current Interests</h2>
            <ul>
              <li>
                Web Accessibility
                <ul>
                  <li>Certified Professional in Accessibility Core Competency (CPACC)</li>
                  <li>Working toward Web Accessibility Specialist (WAS)</li>
                  <li>Finding or developing tools</li>
                </ul>
              </li>
              <li>
                SVG
                <ul>
                  <li>Animations</li>
                  <li>Drawing</li>
                </ul>
              </li>
              <li>
                UI/UX Design
                <ul>
                  <li>Sketch</li>
                  <li>UI Kits</li>
                </ul>
              </li>
              <li>Video Game HUD/UI Design</li>
            </ul>
          </ContentWrapper>
        </div>
      </div>
    </Fragment>
  );
}
