import React, { Fragment } from 'react';

import Link from '../components/link';
import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function ContactPage() {
  return (
    <Fragment>
      <PageTitle title="Contact - Schyler Hosler" />
      <Heading>
        Contact <small aria-hidden="true">- お問合せ</small>
      </Heading>
      <ContentWrapper>
        <p>Coming Soon.</p>
        <p>External links:</p>
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/schyler-hosler-a282aa27">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="https://github.com/hoslersk">
              GitHub
            </Link>
          </li>
          <li>
            <Link to="https://my.playstation.com/profile/DigiVotary">
              PlayStation
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/schylerhosler">
              Twitter
            </Link>
          </li>
        </ul>
      </ContentWrapper>
    </Fragment>
  );
}
