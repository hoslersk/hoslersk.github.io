import React from 'react';
import classNames from 'classnames';

import './nav-item.scss';

export default function NavItem({ children, className }) {
  const navItemClass = classNames('nav-item', className);
  return (
    <li className={navItemClass}>
      {children}
    </li>
  );
}
