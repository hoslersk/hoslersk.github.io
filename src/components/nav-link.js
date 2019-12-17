import React from 'react';
import classNames from 'classnames';
import { NavLink as RRNavLink } from 'react-router-dom';

import CursorSvg from './cursor-svg';
import NavBulletSvg from './nav-bullet-svg';

import './nav-link.scss';

export default function NavLink({ children, className, to }) {
  const baseClass = 'nav-link',
        navLinkClass = classNames(baseClass, className),
        activeNavLinkClass = `${baseClass}--active`,
        cursorSvgClass = `${baseClass}__cursor`,
        activeCursorSvgClass = classNames(
          cursorSvgClass,
          `${cursorSvgClass}--active`,
        );
  return (
    <RRNavLink
      activeClassName={activeNavLinkClass}
      exact
      className={navLinkClass}
      to={to}
    >
      <CursorSvg className={activeCursorSvgClass} isActive />
      <CursorSvg className={cursorSvgClass}  />
      <NavBulletSvg />
      <span>{children}</span>
    </RRNavLink>
  );
}
