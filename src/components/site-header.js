import React, { forwardRef } from 'react';
import { map } from 'lodash';

import NavItem from './nav-item';
import NavLink from './nav-link';
import BackgroundTrim from './background-trim';

import './site-header.scss';

// @TODO: Move to CMS or separate config file
const navLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Tools',
    to: '/tools',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const SiteHeader = forwardRef((props, ref) => {
  const baseClass = 'site-header',
        className = baseClass,
        navClass = `${baseClass}__nav`,
        listClass = `${baseClass}__list`,
        listItemClass = `${baseClass}__list-item`,
        linkClass = `${baseClass}__link`;

  return (
    <header className={className} ref={ref}>
      <nav className={navClass}>
        <ul className={listClass}>
          {map(navLinks, ({ label, to }) => (
            <NavItem className={listItemClass} key={to}>
              <NavLink className={linkClass} to={to}>
                {label}
              </NavLink>
            </NavItem>
          ))}
        </ul>
      </nav>
      <BackgroundTrim position="bottom" />
    </header>
  );
});

export default SiteHeader;
