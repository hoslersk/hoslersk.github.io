import React, { forwardRef } from 'react';

import NavItem from './nav-item';
import NavLink from './nav-link';
import BackgroundTrim from './background-trim';

import './site-header.scss';

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
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="/tools">
              Tools
            </NavLink>
          </NavItem>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </ul>
      </nav>
      <BackgroundTrim position="bottom" />
    </header>
  );
});

export default SiteHeader;
