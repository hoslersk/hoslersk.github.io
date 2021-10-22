import React, { Fragment } from 'react';
import { kebabCase, map } from 'lodash';

import Link from '../components/link';
import PageTitle from '../components/page-title';
import PetDemo from '../components/pet-demo';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';
import RichText from '../components/rich-text';
import { useProjects } from '../lib/api';


export default function ProjectsPage() {
  const { projects, isLoading, hasError } = useProjects();

  return (
    <Fragment>
      <PageTitle title="Projects - Schyler Hosler" />
      <Heading>
        Projects <small aria-hidden="true">- プロジェクト</small>
      </Heading>
      <ContentWrapper>
        <p>Coming Soon.</p>
        <div className="row">
          <div className="column">
            <Projects {...{ hasError, isLoading, projects }} />
          </div>
          <div className="column">
            <PetDemo />
            <div>Digital Pet Demo (WIP/TBD)</div>
          </div>
        </div>
      </ContentWrapper>
    </Fragment>
  );
}


function Projects({ hasError, isLoading, projects }) {
  // @TODO: Refactor to use reusable content component with consistent loading and error states
  if (!projects && isLoading) return '...';
  if (hasError) return 'An error occurred. Please try again later.'
  return (
    <ul>
      {map(projects, ({ description, links, name, url }) => (
        <li key={kebabCase(name)}>
          {url ? <Link className="h2" to={url.url}>{url.label}</Link> : <p className="h2">{name}</p>}
          {description && <RichText>{description.json}</RichText>}
          <ul>
            {map(links, ({ label, to }) => (
              <li key={to}>
                <Link to={to}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
