import React from 'react';
import classNames from 'classnames';


import NavItem from './nav-item';
import NavLink from './nav-link';

import './site-header.scss';

export default function SiteHeader() {
  const baseClass = 'site-header',
        className = baseClass,
        navClass = `${baseClass}__nav`,
        listClass = `${baseClass}__list`,
        listItemClass = `${baseClass}__list-item`,
        linkClass = `${baseClass}__link`;

  return (
    <header className={className}>
      <nav className={navClass}>
        <ul className={listClass}>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="#">
              About (TBD)
            </NavLink>
          </NavItem>
          <NavItem className={listItemClass}>
            <NavLink className={linkClass} to="#">
              Projects (TBD)
            </NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}
