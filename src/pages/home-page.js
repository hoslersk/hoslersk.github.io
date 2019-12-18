import React, { Fragment } from 'react';

import Heading from '../components/heading';

export default function HomePage() {
  return (
    <Fragment>
      <Heading>
        Home <small aria-hidden="true">- ホーム</small>
      </Heading>
      <div className="content">
        Under Construction.
      </div>
    </Fragment>
  );
}
