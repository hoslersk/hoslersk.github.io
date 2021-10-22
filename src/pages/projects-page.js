import React, { Fragment as _ } from 'react';
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
    <_>
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
    </_>
  );
}


function Projects({ hasError, isLoading, projects }) {
  // @TODO: Refactor to use reusable content component with consistent loading and error states
  if (!projects && isLoading) return '...';
  if (hasError) return 'An error occurred. Please try again later.'
  return (
    <ul>
      {map(projects, ({ description, repoUrls, name, hostedUrl }) => (
        <li key={kebabCase(name)}>
          {hostedUrl ?
						<Link className="h2" to={hostedUrl.url}>{hostedUrl.label}</Link> :
						<p className="h2">{name}</p>
					}
          {description && <RichText>{description}</RichText>}
          <ul>
            {map(repoUrls, ({ label, url }) => (
              <li key={url}>
               <Link to={url}>
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
