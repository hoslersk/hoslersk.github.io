import React from 'react';
import classNames from 'classnames';

import CursorSvg from './cursor-svg';
import NavBulletSvg from './nav-bullet-svg';

import './nav-link.scss';

export default function NavLink({ children, className, to }) {
  const baseClass = 'nav-link',
        navLinkClass = classNames(baseClass, className),
        cursorSvgClass = `${baseClass}__cursor`;
  return (
    <a className={navLinkClass} href={to}>
      <CursorSvg className={cursorSvgClass}  />
      <NavBulletSvg />
      <span>{children}</span>
    </a>
  );
}
