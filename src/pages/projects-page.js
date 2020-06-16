import React, { Fragment } from 'react';
import { kebabCase, map } from 'lodash';

import Link from '../components/link';
import PageTitle from '../components/page-title';
import PetDemo from '../components/pet-demo';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

// @TODO: Move content to a CMS
const projects = [
  {
    title: 'SVG RPG (2019 - WIP)',
    links: [
      {
        label: 'SVG RPG Website',
        to: 'http://svg-rpg.com',
      },
      {
        label: 'SVG RPG Repo',
        to: 'https://github.com/hoslersk/svg-rpg/tree/dev',
      },
    ],
  },
  {
    title: 'Semi-Sentient Schoolmate (2016 - WIP)',
    links: [
      {
        label: 'Semi-Sentient Schoolmate Website',
        to: 'http://semisen.com',
      },
      {
        label: 'Semi-Sentient Schoolmate Repo',
        to: 'https://github.com/hoslersk/semi-sentient-schoolmate',
      },
    ],
  },
  {
    title: 'Wanderlyst (2016)',
    links: [
      {
        label: 'Wanderlyst Website',
        to: 'http://wanderlyst.herokuapp.com/',
      },
      {
        label: 'Wanderlyst Front-End Repo',
        to: 'https://github.com/vronnieli/wanderlyst',
      },
      {
        label: 'Wanderlyst API Repo',
        to: 'https://github.com/tonymaibox/wanderlyst-api',
      },
    ],
  },
  {
    title: 'Your Space (2016)',
    links: [
      // {
      //   label: 'Your Space Website',
      //   to: 'http://your-space-project.herokuapp.com/',
      // },
      {
        label: 'Your Space Repo',
        to: 'https://github.com/hoslersk/your-space-project',
      },
    ],
  },
];


export default function ProjectsPage() {
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
            <ul>
              {map(projects, ({ links, title }) => (
                <li key={kebabCase(title)}>
                  <span>{title}</span>
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
