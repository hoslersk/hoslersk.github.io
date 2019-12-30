import React, { Fragment } from 'react';

import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function ContactPage() {
  return (
    <Fragment>
      <Heading>
        Contact <small aria-hidden="true">- お問合せ</small>
      </Heading>
      <ContentWrapper>
        <p>Coming Soon.</p>
        <p>External links:</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/schyler-hosler-a282aa27" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/hoslersk" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://my.playstation.com/profile/DigiVotary" target="_blank" rel="noreferrer noopener">
              PlayStation
            </a>
          </li>
          <li>
            <a href="https://twitter.com/schylerhosler" target="_blank" rel="noreferrer noopener">
              Twitter
            </a>
          </li>
        </ul>
      </ContentWrapper>
    </Fragment>
  );
}
