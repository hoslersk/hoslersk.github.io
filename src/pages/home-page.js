import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function HomePage() {
  return (
    <Fragment>
      <PageTitle title="Home - Schyler Hosler" />
      <Heading>
        Home <small aria-hidden="true">- ホーム</small>
      </Heading>
      <ContentWrapper>
        <p>Pardon the mess. Schyler Hosler (.com) is currently under construction.</p>
        <p>
          But we're still open! Feel free to check out the{' '}
          <Link to="/about">"About"</Link> and <Link to="/contact">"Contact"</Link>{' '}
          pages for more information.
        </p>
      </ContentWrapper>
    </Fragment>
  );
}
